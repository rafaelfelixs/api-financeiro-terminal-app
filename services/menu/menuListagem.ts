import {select} from '@inquirer/prompts';
import {listarLancamentos} from "../listagem/listarLancamentos";

export async function mostrarMenuListagem(lancamentos): Promise<void> {
    if (!lancamentos.length) {
        console.log('Não há lancamentos para listar. Insira um registro primeiro!');
        return;
    }

    const opcaoMenu = await menuListagem();

    await listarLancamentos(lancamentos, opcaoMenu);
}

async function menuListagem(): Promise<any> {
    return select({
        message: 'Que tipo de registro você quer listar?',
        choices: [
            {
                name: 'Listar todos os registros',
                value: 'listarTodosRegistros',
                description: 'Todos os registros serão exibidos',
            },
            {
                name: 'Listar registros pendentes',
                value: 'listarRegistroPendentes',
                description: 'Apenas os registros pendentes serão exibidos',
            },
            {
                name: 'Listar registros consolidados',
                value: 'listarRegistroConsolidados',
                description: 'Apenas os registros consolidados serão exibidos',
            },
            {
                name: 'Listar registros cancelados',
                value: 'listarRegistroCancelados',
                description: 'Apenas os registros cancelados serão exibidos',
            },
        ],
    });
}
