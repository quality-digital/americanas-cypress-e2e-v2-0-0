# Changelog

Todos os formatos seguem o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).
## [v2.0.0] - 2025-07-28
### Adicionado
- Fixture de CPFs adicionada em `cypress/fixtures/cpfs.json`
- Script `fakeData.js` usando CPFs fixos ao invés de gerar aleatoriamente

### Alterado
- Substituição de `faker.number.int` por CPF da fixture
- Organização de `fakeData.js` para testes diretos via Node

## [1.0.0] - 2025-07-25
### Adicionado
- Estrutura inicial do projeto com Cypress
- README com instruções e padrão de contribuição
- Primeiro teste automatizado: home.cy.js
