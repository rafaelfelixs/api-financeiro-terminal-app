import {select, Separator} from '@inquirer/prompts';

export async function mostrarMenuPrincipal(): Promise<string> {
    return menuPrincipal();
}

async function menuPrincipal(): Promise<any> {
    return select({
        message: 'O que você deseja fazer?',
        choices: [
            {
                name: 'Criar um novo registro $$$',
                value: 'novoRegistro',
                description: 'Inserir um novo registro',
            },
            {
                name: 'Listar registros',
                value: 'listarRegistros',
                description: 'Mostrando registros por status (consolidados, pendentes, cancelados ou todos)',
            },
            {
                name: 'Editar registro',
                value: 'editarRegistro',
                description: 'Você poderá escolher qual registro quer editar',
            },
            {
                name: 'Encerrar app financeiro',
                value: 'encerrarApp',
                description: 'O app será encerrado!',
            },
            new Separator(),
        ],
    });
}
