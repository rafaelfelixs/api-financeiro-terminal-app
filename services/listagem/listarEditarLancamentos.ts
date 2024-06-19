import {select} from "@inquirer/prompts";
import {Lancamentos} from "../../Lancamentos";

export async function listarEditarLancamentos(lancamentos: Lancamentos[]): Promise<string> {
    let indiceLancamentoEscolhido: string;
    indiceLancamentoEscolhido = await escolhendoLancamentos(lancamentos);

    return indiceLancamentoEscolhido;
}

async function escolhendoLancamentos(lancamentos): Promise<any>{
    let choicesLancamentos = [];

    await lancamentos.forEach((item, index) => choicesLancamentos.push({
        name: `Lançamento ${item.descricaoLancamento}. Valor do lançamento: ${item.valorLancamento}.`,
        value: `${index}`,
        description: `Selecionar o lançamento ${item.descricaoLancamento}.`,
    }));

    return select({
        message: 'Selecione qual lançamento você deseja editar',
        choices: choicesLancamentos,
    });
}
