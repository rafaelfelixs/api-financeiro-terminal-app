import {confirm, input, select} from '@inquirer/prompts';
import {randomUUID} from "node:crypto";
import {Lancamentos} from "../../Lancamentos";

export async function registrarLancamento(): Promise<Lancamentos> {
    const descricaoLancamento = await inserirDescricaoLancamento(null);
    console.log('Descrição do Lancamento inserido: ', descricaoLancamento);

    const dataLancamento = await inserirDataLancamento(null);
    console.log('Data do Lancamento inserido: ', dataLancamento);

    const tipoLancamento = await inserirTipoLancamento(null);
    console.log('Tipo de Lancamento inserido: ', tipoLancamento);

    const valorLancamento = await inserirValorLancamento(null);
    console.log('Valor do Lancamento inserido: ', valorLancamento);

    const statusLancamento = await inserirStatusLancamento(null);
    console.log('Status de Lancamento inserido: ', statusLancamento);

    const idLancamento = randomUUID();
    console.log('Id de Lancamento gerado: ', idLancamento);

    const confirmacaoLancamento = await confirmarLancamento();
    console.log('confirmação lançamento: ', confirmacaoLancamento);
    if (confirmacaoLancamento === false) {
        return null;
    }

    return {descricaoLancamento, dataLancamento, tipoLancamento, valorLancamento, statusLancamento, idLancamento};
}

export function inserirDescricaoLancamento(valorDefault): Promise<string> {
    const regexNomeValido = new RegExp('[A-Za-z]');

    return input({
        message: 'Insira a descrição do lançamento: ',
        default: valorDefault || '',
        validate: (input) => {
            if (input && input.length > 50) {
                return 'Insira uma descrição válida. De 1 a 50 caracteres.';
            }
            if (input && !regexNomeValido.test(input)) {
                return 'Nome não é válido. Insira novamente, apenas letras.';
            }
            return true;
        },
    });
}

export function inserirValorLancamento(valorDefault): Promise<string> {
    const regexValorValido = new RegExp('^[0-9]*(\\.[0-9]{0,2})?$');
    return input({
        message: 'Insira o valor do lançamento (valor exemplo 123.45): ',
        default: valorDefault || '',
        validate: (input) => {
            if (input && !regexValorValido.test(input)) {
                return 'Valor não é válido. Insira novamente, exemplo 123.45.';
            }
            return true;
        },
    });
}

export function inserirDataLancamento(valorDefault): Promise<string> {
    const regexDataValida = new RegExp('^(0[1-9]|1\\d|2\\d|3[01])\\/(0[1-9]|1[0-2])\\/(19|20)\\d{2}$');
    return input({
        message: 'Insira a data do lançamento (data exemplo 30/05/2024): ',
        default: valorDefault || '',
        validate: (input) => {
            if (input && !regexDataValida.test(input)) {
                return 'Data não é válida. Insira novamente, exemplo 30/05/2024 - dia/mês/ano.';
            }
            return true;
        },
    });
}

export function inserirTipoLancamento(valorDefault): Promise<string> {
    return select({
        message: 'Selecione o tipo do lançamento:',
        default: valorDefault || null,
        choices: [
            {
                name: 'Despesa',
                value: 'despesa',
                description: 'O valor será considerado como despesa (débito)',
            },
            {
                name: 'Receita',
                value: 'receita',
                description: 'O valor será considerado como receita (crédito)',
            },
        ],
    });
}

export function inserirStatusLancamento(valorDefault): Promise<string> {
    return select({
        message: 'Selecione o status do lançamento:',
        default: valorDefault || null,
        choices: [
            {
                name: 'Pendente',
                value: 'pendente',
                description: 'O lançamento será considerado como pendente, não será contabilizado ainda.',
            },
            {
                name: 'Consolidado',
                value: 'consolidado',
                description: 'O lançamento já pode ser contabilizado.',
            },
            {
                name: 'Cancelado',
                value: 'cancelado',
                description: 'O lançamento não pode ser contabilizado, pois foi cancelado.',
            },
        ],
    });
}

function confirmarLancamento(): Promise<boolean> {
    return confirm({message: 'Deseja realmente salvar o lançamento?'});
}
