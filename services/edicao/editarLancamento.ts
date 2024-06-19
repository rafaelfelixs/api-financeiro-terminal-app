import actionSelect from "./inquire-action-select";
import {select} from "@inquirer/prompts";
import {
    inserirDataLancamento,
    inserirDescricaoLancamento,
    inserirStatusLancamento,
    inserirTipoLancamento,
    inserirValorLancamento
} from "../registro/registrarLancamento";
import {Lancamentos} from "../../Lancamentos";

export async function edicaoLancamento(lancamentos, indiceDoLancemento): Promise<Lancamentos[]> {
    const respostaMenuEdicao = await opcoesEdicao(lancamentos[indiceDoLancemento])
    if (respostaMenuEdicao.action === 'show') {
        console.log('Mostrando lançamento...');
        console.log(`Id Lançamento: ${lancamentos[indiceDoLancemento].idLancamento}. \nLançamento ${lancamentos[indiceDoLancemento].descricaoLancamento}. \nData lançamento: ${lancamentos[indiceDoLancemento].dataLancamento}. \nTipo lançamento: ${lancamentos[indiceDoLancemento].tipoLancamento}. \nValor do lançamento: ${lancamentos[indiceDoLancemento].valorLancamento}. \nStatus lançamento: ${lancamentos[indiceDoLancemento].statusLancamento}`);
        return lancamentos;
    }

    if (respostaMenuEdicao.action === 'edit') {
        console.log('Abrindo o menu de edição dos campos...');
        const respostaMenuEdicaoCampo = await opcoesEdicaoCampo(lancamentos[indiceDoLancemento]);
        lancamentos[indiceDoLancemento] = await edicaoCampo(lancamentos[indiceDoLancemento], respostaMenuEdicaoCampo);
        console.log(`O registro foi editado com sucesso`);
        console.log(`Id Lançamento: ${lancamentos[indiceDoLancemento].idLancamento}. \nLançamento ${lancamentos[indiceDoLancemento].descricaoLancamento}. \nData lançamento: ${lancamentos[indiceDoLancemento].dataLancamento}. \nTipo lançamento: ${lancamentos[indiceDoLancemento].tipoLancamento}. \nValor do lançamento: ${lancamentos[indiceDoLancemento].valorLancamento}. \nStatus lançamento: ${lancamentos[indiceDoLancemento].statusLancamento}`);
        return lancamentos;
    }

    if (respostaMenuEdicao.action === 'delete') {
        return await lancamentos.filter((item, key) => key !== indiceDoLancemento);
    }
}

async function opcoesEdicao(lancamento: Lancamentos): Promise<any> {
    console.log(`Id ${lancamento.idLancamento}`);
    return actionSelect({
            message: 'Escolha o que você deseja fazer com o lançamento',
            actions: [
                {value: 'show', name: 'Mostrar detalhes do lançamento', key: 'o'},
                {value: 'edit', name: 'Editar os campos do lançamento', key: 'e'},
                {value: 'delete', name: 'Deletar o lançamento', key: 'x'}
            ],
            choices: [
                {
                    value: `${lancamento.idLancamento}`,
                    name: `Lançamento ${lancamento.descricaoLancamento}. \nData lançamento: ${lancamento.dataLancamento}. \nTipo lançamento: ${lancamento.tipoLancamento}. \nValor do lançamento: ${lancamento.valorLancamento}. \nStatus lançamento: ${lancamento.statusLancamento}`
                },
            ]
        }
    );
}

async function opcoesEdicaoCampo(lancamento): Promise<any> {
    let choicesCampos = [];
    for (const property in lancamento) {
        choicesCampos.push({
            name: `${property}: ${lancamento[property]}`,
            value: `${property}`,
            description: `Editar o campo ${property}`
        })
    }

    return select({
        message: 'Selecione o que você deseja fazer',
        choices: choicesCampos,
    });
}

async function edicaoCampo(lancamento, campo): Promise<Lancamentos> {
    if (campo === 'descricaoLancamento') {
        lancamento[campo] = await inserirDescricaoLancamento(lancamento[campo]);
    }

    if (campo === 'dataLancamento') {
        lancamento[campo] = await inserirDataLancamento(lancamento[campo]);
    }

    if (campo === 'tipoLancamento') {
        lancamento[campo] = await inserirTipoLancamento(lancamento[campo]);
    }

    if (campo === 'valorLancamento') {
        lancamento[campo] = await inserirValorLancamento(lancamento[campo]);
    }

    if (campo === 'statusLancamento') {
        lancamento[campo] = await inserirStatusLancamento(lancamento[campo]);
    }

    return lancamento;
}