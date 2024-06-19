import {confirm, input} from '@inquirer/prompts';
import {Usuario} from "../../Usuario";

export async function registrarUsuario(): Promise<Usuario> {
    let nomeUsuario = '';

    let confirmacaoUsuario = false;
    do {
        nomeUsuario = await inserirNomeUsuario();
        console.log('Nome do usuario inserido: ', nomeUsuario);
        confirmacaoUsuario = await confirmarUsuario();
    } while (confirmacaoUsuario === false)

    return {nomeUsuario};
}

function inserirNomeUsuario(): Promise<string> {
    const regexNomeValido = new RegExp('[A-Za-z]');

    return input({
        message: 'Insira o nome do usuario: ',
        validate: (input) => {
            if (input && input.length > 30) {
                return 'Insira um nome válido. De 1 a 30 caracteres.';
            }
            if (input && !regexNomeValido.test(input)) {
                return 'Nome não é válido. Insira novamente, apenas letras.';
            }
            return true;
        },
    });
}

function confirmarUsuario(): Promise<boolean> {
    return confirm({message: 'Deseja realmente salvar o usuario?'});
}
