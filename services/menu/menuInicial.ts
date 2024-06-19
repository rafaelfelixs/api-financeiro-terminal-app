import {select} from '@inquirer/prompts';
import {registrarUsuario} from '../registro/registrarUsuario';
import {Usuario} from "../../Usuario";

export async function mostrarMenuInicial(): Promise<Usuario> {
    const opcaoMenu = await menuInicial();
    if (opcaoMenu === 'inserirUsuario') {
        return await registrarUsuario();
    }

    return {nomeUsuario: 'Guest User'};
}

async function menuInicial(): Promise<any> {
    return select({
        message: 'Primeiro escolha como você será identificado',
        choices: [
            {
                name: 'Informar um identificador',
                value: 'inserirUsuario',
                description: 'Você irá informar um nome',
            },
            {
                name: 'Informar um identificador aleatório',
                value: 'gerarUsuarioAleatorio',
                description: 'Será criado um usuário aleatorio',
            },
        ],
    });
}
