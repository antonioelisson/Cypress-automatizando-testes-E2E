const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false, // grava um vídeo de cada teste
    reporter: 'mochawesome', // gera um relatório detalhado dos testes
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
});

// Após a configuração executamos o Mochawesome digitando no terminal o comando npx cypress run --reporter mochawesome