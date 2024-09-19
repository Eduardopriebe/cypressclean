// cypress/integration/login.spec.js
import { loginPage } from '../page_objects/loginPage';

describe('Login Test', () => {
  it('Access to google page', () => {
    loginPage.visit();
    // loginPage.fillUsername('user123');
    // loginPage.fillPassword('password123');
    // loginPage.submit();
    
    // // Verificar se o login foi bem-sucedido
    // cy.url().should('include', '/dashboard');
  });
});