# :shopping_cart: Projeto E-commerce com Cypress

Este é um projeto de automação de testes usando Cypress para testar funcionalidades de um site de e-commerce.

## :gear: Pré-requisitos

- Node.js (versão LTS recomendada)

## :man_technologist: Configuração do projeto

1. Clone o repositório:
`git clone https://github.com/arthurqabr/ecomerce-cypress.git`

2. Navegue até o diretório do projeto:
`cd ecomerce-cypress`

3. Instale as dependências:
`npm install` ou `yarn`

## :space_invader: Executando os testes

1. Abra o Cypress Test Runner:
`npx cypress open`

2. No Cypress Test Runner, clique em um arquivo de teste para executá-lo. Lembrando que os testes de API estão em `e2e/integrations`

## :trophy: Issues e Projeto

O repositório conta com uma seção de **Issues**, onde são declarados os casos de testes e discutidas as melhorias do projeto. Além disso, o projeto utiliza um **Projeto** para o acompanhamento das tarefas, com colunas como TO DO, IN PROGRESS e DONE.

## :dart: Actions

Este projeto utiliza **Actions** para a execução automatizada dos testes em uma pipeline. Antes de um merge para a branch "main", todos os testes são executados na pipeline para garantir a integridade do código.
