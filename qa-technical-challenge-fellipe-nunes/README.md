# QA Technical Challenge — Fellipe Nunes

Este repositório contém a solução do teste técnico para posição de **QA Automatizador Sênior**.

O projeto foi dividido em três partes:

- Automação Web
- Automação de API
- Teste de Performance

Todos os testes foram desenvolvidos pensando em:

- reprodutibilidade
- boas práticas
- execução multiplataforma
- CI/CD

---

# Tecnologias utilizadas

## Web
Playwright + TypeScript

## API
Java + RestAssured + JUnit5

## Performance
Apache JMeter

---

# Estrutura do projeto
qa-technical-challenge-fellipe-nunes
│
├── web
├── api
└── performance

---

# Executar testes WEB
cd web
npm install
npx playwright install
npm test

Relatório
npx playwright show-report

---

# Executar testes API
cd api
mvn clean test

---

# Executar testes de performance

Instalar JMeter.

Executar:
cd performance

jmeter -n -t blazedemo-load-test.jmx -l load-result.jtl -e -o report-load

jmeter -n -t blazedemo-spike-test.jmx -l spike-result.jtl -e -o report-spike

---

# Cenários testados

## WEB
- Busca com resultados
- Busca sem resultados

## API
- Listagem de raças
- Imagens por raça
- Imagem aleatória

## Performance
Fluxo completo de compra de passagem no BlazeDemo.

---

# CI

Executado via GitHub Actions automaticamente.