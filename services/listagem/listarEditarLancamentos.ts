import {select} from "@inquirer/prompts";

export async function listarEditarLancamentos(lancamentos) {
    let indiceLancamentoEscolhido: string;
    indiceLancamentoEscolhido = await escolhendoLancamentos(lancamentos);

    return indiceLancamentoEscolhido;
}

async function escolhendoLancamentos(lancamentos): Promise<any>{
    let choicesLancamentos = [];

    for (const [index, item] of lancamentos) {
        choicesLancamentos.push({
            name: `Lançamento ${item.descricaoLancamento}. Valor do lançamento: ${item.valorLancamento}.`,
            value: `${item.idLancamento}`,
            description: `Selecionar o lançamento ${item.descricaoLancamento}.`,
        })
        console.log(`index: ${index}, descricao: ${item.descricaoLancamento}`);
    }

    // await lancamentos.forEach((item, index) => choicesLancamentos.push({
    //     name: `Lançamento ${item.descricaoLancamento}. Valor do lançamento: ${item.valorLancamento}.`,
    //     value: `${item.idLancamento}`,
    //     description: `Selecionar o lançamento ${item.descricaoLancamento}.`,
    // }))


    return select({
        message: 'Selecione qual lançamento você deseja editar',
        choices: choicesLancamentos,
    });
}
