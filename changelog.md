# Changelog

Todos os formatos seguem o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [1.1.0] - 2025-07-30
### Adicionado
- Estrutura inicial do projeto com Cypress
- Fixture de CPFs adicionada em `cypress/fixtures/cpfs.json`
- Script `fakeData.js` com suporte a dados fixos
- Cenário automatizado `home.cy.js` que valida o carregamento da home da Americanas e a presença da logo no DOM
- Documentação do cenário no `README.md` com comando de execução isolada


## [1.0.0] - 2025-07-28
### Alterado
- Substituição de `faker.number.int` por CPF da fixture
- Organização de `fakeData.js` para testes diretos via Node

## [1.0.0] - 2025-07-25
### Adicionado
- Projeto iniciado com estrutura base e dependências do Cypress
