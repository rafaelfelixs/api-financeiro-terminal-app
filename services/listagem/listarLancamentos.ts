import {Status} from "../../Status";
import {Lancamentos} from "../../Lancamentos";

export async function listarLancamentos(lancamentos: Lancamentos[], filtroStatus): Promise<void> {

    if (filtroStatus === 'listarTodosRegistros') {
        console.log(`Foram encontrados ${lancamentos.length}.`);
        console.log(`Listando lançamentos...`);
        for (const item of lancamentos) {
            console.log(`Id Lançamento: ${item.idLancamento}. \nLançamento ${item.descricaoLancamento}. \nData lançamento: ${item.dataLancamento}. \nTipo lançamento: ${item.tipoLancamento}. \nValor do lançamento: ${item.valorLancamento}. \nStatus lançamento: ${item.statusLancamento}`);
        }
        return;
    }

    console.log(`filtro: ${filtroStatus}, status: ${Status[filtroStatus]}`);
    let lancamentosFiltrados = lancamentos.filter(item => item.statusLancamento === Status[filtroStatus]);

    console.log(`Foram encontrados ${lancamentosFiltrados.length} com o seguinte status ${Status[filtroStatus]}`);
    console.log(`Listando lançamentos...`);
    for (const item of lancamentosFiltrados) {
        console.log(`Id Lançamento: ${item.idLancamento}. \nLançamento ${item.descricaoLancamento}. \nData lançamento: ${item.dataLancamento}. \nTipo lançamento: ${item.tipoLancamento}. \nValor do lançamento: ${item.valorLancamento}. \nStatus lançamento: ${item.statusLancamento}`);
    }
}
