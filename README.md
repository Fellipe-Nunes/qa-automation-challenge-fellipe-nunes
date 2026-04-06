# QA Automation Senior Technical Challenge

Projeto desenvolvido como solução para o **teste técnico de QA Automatizador Sênior**, contemplando três frentes principais de qualidade:

- **Web Automation** (Blog do Agi)
- **API Automation** (Dog API)
- **Performance Test** (BlazeDemo com JMeter)

O objetivo deste repositório é demonstrar uma abordagem de qualidade com foco em:

- boas práticas de automação;
- organização e manutenibilidade;
- clareza de documentação;
- execução multiplataforma;
- geração de evidências e relatórios;
- visão de QA Sênior sobre cobertura funcional e não funcional.

---

# 📌 Visão Geral

## Escopos cobertos

### 1. Web Automation
**Aplicação alvo:** [Blog do Agi](https://blogdoagi.com.br/)  
**Funcionalidade foco:** pesquisa de artigos via lupa (canto superior direito)

Foram automatizados cenários críticos e de maior valor para a funcionalidade de busca:

- **Busca válida com retorno de resultados**
- **Busca sem resultados**

---

### 2. API Automation
**API alvo:** [Dog API](https://dog.ceo/dog-api/documentation)

Endpoints cobertos:

- `GET /breeds/list/all`
- `GET /breed/{breed}/images`
- `GET /breeds/image/random`

Validações realizadas:

- status code;
- estrutura de contrato;
- consistência de payload;
- tipos de dados;
- cenários positivos e negativos relevantes.

---

### 3. Performance Test
**Aplicação alvo:** [BlazeDemo](https://www.blazedemo.com)  
**Cenário:** Compra de passagem aérea com sucesso

Critério de aceitação solicitado:

- **250 requisições por segundo**
- **90th percentile < 2 segundos**

Foram preparados:

- **Teste de carga**
- **Teste de pico**
- **Plano JMeter (.jmx)**
- **Relatório e análise dos resultados**

---

# 🧱 Stack Tecnológica

## Automação Web e API
- **Java 17**
- **Maven**
- **JUnit 5**
- **Selenium WebDriver**
- **Rest Assured**
- **AssertJ**
- **Jackson / JSON Path**
- **Allure Reports**
- **WebDriverManager**

## Performance
- **Apache JMeter 5.6+**

## CI/CD
- **GitHub Actions**

---

# 📂 Estrutura do Projeto

```bash
qa-automation-senior-challenge/
├── .github/
│   └── workflows/
│       ├── web-api-tests.yml
│       └── performance-smoke.yml
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── config/
│   │   │   │   ├── DriverFactory.java
│   │   │   │   └── EnvironmentConfig.java
│   │   │   ├── pages/
│   │   │   │   ├── BasePage.java
│   │   │   │   ├── BlogHomePage.java
│   │   │   │   └── BlogSearchResultsPage.java
│   │   │   ├── clients/
│   │   │   │   └── DogApiClient.java
│   │   │   ├── models/
│   │   │   │   ├── DogApiBaseResponse.java
│   │   │   │   ├── BreedsListResponse.java
│   │   │   │   ├── BreedImagesResponse.java
│   │   │   │   └── RandomImageResponse.java
│   │   │   └── utils/
│   │   │       ├── WaitUtils.java
│   │   │       ├── ScreenshotUtils.java
│   │   │       └── TestDataFactory.java
│   │   └── resources/
│   │       ├── config.properties
│   │       └── logback.xml
│   │
│   └── test/
│       ├── java/
│       │   ├── base/
│       │   │   ├── BaseWebTest.java
│       │   │   └── BaseApiTest.java
│       │   ├── web/
│       │   │   └── BlogSearchTest.java
│       │   ├── api/
│       │   │   └── DogApiTest.java
│       │   └── listeners/
│       │       └── TestListener.java
│       └── resources/
│           └── testdata/
│
├── performance/
│   ├── jmeter/
│   │   └── blazedemo-flight-purchase.jmx
│   ├── reports/
│   │   ├── load-test/
│   │   └── spike-test/
│   └── results/
│
├── docs/
│   ├── web-test-scope.md
│   ├── api-test-scope.md
│   ├── performance-analysis.md
│   └── evidences/
│
├── pom.xml
└── README.md
