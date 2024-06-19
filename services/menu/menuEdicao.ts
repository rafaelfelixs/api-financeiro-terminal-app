import {select} from '@inquirer/prompts';
import {edicaoLancamento} from "../edicao/editarLancamento";
import {listarEditarLancamentos} from "../listagem/listarEditarLancamentos";
import {Lancamentos} from "../../Lancamentos";

export async function mostrarMenuEdicao(lancamentos): Promise<Lancamentos[]> {
    if (!lancamentos.length) {
        console.log('Não há lancamentos para editar. Insira um registro primeiro!');
        return;
    }

    const opcaoMenu = await menuEdicao();
    let lancamentosEditados = null;

    if (opcaoMenu === 'editarPrimeiroRegistro') {
        lancamentosEditados = await edicaoLancamento(lancamentos, 0);
    }

    if (opcaoMenu === 'editarAlgumRegistro') {
        const indiceLancamentoEditado = listarEditarLancamentos(lancamentos);
        console.log(`Indice: ${indiceLancamentoEditado}`);
        lancamentosEditados = await edicaoLancamento(lancamentos, indiceLancamentoEditado);
    }

    if (opcaoMenu === 'editarUltimoRegistro') {
        lancamentosEditados = await edicaoLancamento(lancamentos, lancamentos.length - 1);
    }

    return lancamentosEditados;
}

async function menuEdicao(): Promise<any> {
    return select({
        message: 'Que tipo de registro você quer listar?',
        choices: [
            {
                name: 'Editar o primeiro registro',
                value: 'editarPrimeiroRegistro',
                description: 'Você poderá editar o primeiro registro dos seus lançamentos.',
            },
            {
                name: 'Escolher qual registro editar',
                value: 'editarAlgumRegistro',
                description: 'Você poderá escolher qual registro quer editar.',
            },
            {
                name: 'Editar o último registro',
                value: 'editarUltimoRegistro',
                description: 'Você poderá editar o último registro dos seus lançamentos.',
            },
        ],
    });
}
