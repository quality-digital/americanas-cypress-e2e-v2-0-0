# Automação E2E – Americanas

Este repositório contém a automação de testes end-to-end (E2E) para o site [americanas.com.br](https://www.americanas.com.br), utilizando o framework [Cypress](https://www.cypress.io/).

---

## 🎯 Objetivo

Automatizar cenários de testes para funcionalidades críticas do e-commerce da Americanas, assegurando:

- Qualidade da experiência do usuário
- Redução de falhas em produção
- Padronização e rastreabilidade nos testes

---

## 📁 Estrutura do Projeto

```
cypress/
├─ e2e/
│  ├─ ui_tests/
│  └─ api_tests/
├─ fixtures/
├─ support/
│  ├─ commands/
│  ├─ page_elements/
│  └─ e2e.js
cypress.config.js
cypress.env.json
```

---

## ⚙️ Instalação

> ⚠️ Pré-requisitos: Node.js instalado

```bash
git clone https://github.com/quality-digital/americanas-cypress-e2e
cd americanas-cypress-e2e
npm install
```

---

## ▶️ Execução dos Testes

### Cypress UI (modo interativo)
```bash
npx cypress open
```

### Headless (terminal)
```bash
npx cypress run
```

### Scripts úteis (após configuração)

```bash
npm run test:ui       # Executa testes de interface
npm run test:api      # Executa testes de API
```

---

## 🧩 Plugins sugeridos

- [`cypress-plugin-xhr-toggle`](https://www.npmjs.com/package/cypress-plugin-xhr-toggle) – Controle de requisições XHR
- [`faker-js/faker`](https://www.npmjs.com/package/@faker-js/faker) – Geração de dados fake
- [`cypress-axe`](https://www.npmjs.com/package/cypress-axe) – Testes de acessibilidade
- [`cypress-mochawesome-reporter`](https://www.npmjs.com/package/cypress-mochawesome-reporter) – Relatórios HTML

---

## 📦 Versionamento

Adotamos versionamento semântico no padrão:

```text
MAJOR.MINOR.PATCH  → Exemplo: 1.0.0
```

---
## 📘 Referência de Commits

Este projeto segue o padrão de mensagens de commit conhecido como [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/), que facilita a padronização, automação e rastreabilidade das alterações no repositório.
---
## 🌿 Padrão de Branches

- `feat/`: Novos testes ou funcionalidades
- `fix/`: Correções de bugs ou falhas nos testes
- `chore/`: Atualizações de estrutura, configs ou documentação

---
### Plugins

- Controle do comportamento das solicitações XHR durante a execução dos testes [cypress-plugin-xhr-toggle](https://www.npmjs.com/package/cypress-plugin-xhr-toggle)