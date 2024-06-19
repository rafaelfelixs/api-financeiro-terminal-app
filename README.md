
# App financeiro terminal

Essa aplicação simula um gerenciador de finanças pessoal. Feito como uma versão simplificada da api money-plus.


## Requisitos da aplicação

### Manipulação de dados

- Um usuário deve conseguir cadastrar um novo registro, com as seguintes propriedades:
    - Descrição
    - Data do registro
    - Tipo do registro (que pode assumir apenas os valores despesa ou receita)
    - Valor do registro
    - Status do registro (que pode ser pendente, consolidado, ou cancelado)
    - Id (deve ser gerado automaticamente)

- Um usuário deve conseguir editar um registro já inserido podendo alterar a descrição, data, tipo, valor e status do registro
- Um usuário deve conseguir excluir um registro já existente
- Um usuário deve conseguir filtrar seus registros por status, podendo escolher entre consolodidados, pendentes, cancelados ou todos.

### Requisitos funcionais da interface (terminal)


- Ao entrar na aplicação o usuário deve ver todos seus registros com as inforamções de id, data, descrição, tipo, valor e status.
- Na tela inicial deve ser possível selecionar um filtro para os registros
- Ao clicar em um registro deve ser possível editá-lo
- Um usuário deve poder cancelar a edição de um registro
- O usuário deve poder criar um novo registro através de um botão
- Um usuário deve poder cancelar a criação de um novo registro
- O usuário deve poder excluir um registro

## Instalação

Instalação do projeto.

##### Vá para a pasta raiz e execute um dos comandos para instalar as dependências

```bash
  npm install
```

ou

```bash
  yarn install
```

## Rodar o projeto

Comando para executar o projeto no terminal (após a instalação das dependências!)

```bash
  node run dev
```

Esse comando irá inicializar o arquivo index.ts por meio da lib tsx


Comando para fazer o build dos arquivos para js

```bash
  node run build
```

Comando para rodar o arquivo index.js buildado a partir da pasta ./build

```bash
  node run start
```


## 🛠 Skills
Javascript, Typescript, InquirerJS


## Fontes e Links

Alguns projetos relacionados

[Doc api financeira - Formação DEV](https://github.com/especialistadev/projetos-equipes-1/blob/main/app-financeira/README.md)

[Money Plus](https://github.com/rafaelfelixs/money-plus/tree/develop)

[Inquirer JS lib](https://github.com/SBoudrias/Inquirer.js/tree/main)

[Inquirer Action Select by zenithlight](https://github.com/zenithlight/inquirer-action-select/tree/main)


## License

[MIT](https://choosealicense.com/licenses/mit/)


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


