import {mostrarMenuInicial} from "./services/menu/menuInicial";
import {mostrarMenuPrincipal} from "./services/menu/menuPrincipal";
import {mostrarMenuListagem} from "./services/menu/menuListagem";
import {mostrarMenuEdicao} from "./services/menu/menuEdicao";
import {registrarLancamento} from "./services/registro/registrarLancamento";
import {Usuario} from "./Usuario";
import {Lancamentos} from "./Lancamentos";

let lancamentos: Lancamentos[] = [];
let usuario: Usuario = null;

async function main() {
    let respostaMenuPrincipal = '';

    usuario = await mostrarMenuInicial()
    console.log(`Seja bem vindo: ${usuario.nomeUsuario}`);


    do {
        respostaMenuPrincipal = await mostrarMenuPrincipal();
        if (respostaMenuPrincipal === 'novoRegistro') {
            const lancamentoNovo = await registrarLancamento();
            if (lancamentoNovo) {
                lancamentos.push(lancamentoNovo);
                console.log(`Lancamento Novo: ${lancamentoNovo}`);
                console.log(`Lancamentos: ${lancamentos}`);
            }
        }

        if (respostaMenuPrincipal === 'listarRegistros') {
            await mostrarMenuListagem(lancamentos);
        }

        if (respostaMenuPrincipal === 'editarRegistro') {
            lancamentos = await mostrarMenuEdicao(lancamentos);
        }
    } while (respostaMenuPrincipal !== 'encerrarApp' && usuario)
}

main().then().catch();