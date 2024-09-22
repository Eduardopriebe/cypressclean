// cypress/page-objects/loginPage.js
class Dashboard {
    header() {
     return cy.get('.logo > .d-none');  //Logo da página
    }
    
    user(username) {
      return cy.get('.nav-link > .d-none'); //User name na tela
    }
  }
  
  export const dashboard = new Dashboard();