// cypress/page-objects/loginPage.js
class LoginPage {
    visit() {
      cy.visit('https://curso-automacao-web-app.herokuapp.com/login');  // URL de login
    }
    
    fillUsername(username) {
      return cy.get('#yourUsername');
    }
  
    fillPassword(password) {
      return cy.get('#yourPassword');
    }
  
    submit() {
      return cy.get('#logginButton').click();
    }

    sucess() {

      return cy.get('h1');
    }
  }
  
  export const loginPage = new LoginPage();