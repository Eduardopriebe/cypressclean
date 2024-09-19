// cypress/page-objects/loginPage.js
class LoginPage {
    visit() {
      cy.visit('www.google.com.br');  // URL de login
    }
  
    // fillUsername(username) {
    //   cy.get('input[name="username"]').type(username);
    // }
  
    // fillPassword(password) {
    //   cy.get('input[name="password"]').type(password);
    // }
  
    // submit() {
    //   cy.get('button[type="submit"]').click();
    // }
  }
  
  export const loginPage = new LoginPage();