# Changelog

Todos os formatos seguem o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [Unreleased]

## [1.4.0] - 2025-08-07
### Adicionado
- Nova branch feat/jira-1034 com teste automatizado de validação de produto adicionado ao carrinho.


## [1.2.1] - 2025-08-06
### Corrigido
- Suporte completo a testes automatizados em dispositivos mobile utilizando `viewport` e `user-agent` para simulação realista.
- Conflito de merge no arquivo `pdp.cy.js` resolvido, unificando corretamente os blocos de verificação de URL e validações da PDP.
- Ajuste no fluxo de clique e verificação de URL após a busca do produto para garantir consistência nos testes em diferentes dispositivos.


## [1.2.0] - 2025-08-04
### Adicionado
- Nova branch `feat/product-search-test` criada para desenvolvimento de testes automatizados relacionados à busca de produtos
- Teste `search.cy.js` que realiza a busca por um produto na Americanas e valida o resultado por SKU
- Teste `pdp.cy.js` que acessa a PDP a partir da busca e valida presença do título, preço e botão de compra
- Atualização do `README.md` com a documentação dos novos cenários


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
