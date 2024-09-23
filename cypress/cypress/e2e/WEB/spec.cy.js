// cypress/integration/login.spec.js
import { loginPage } from '../../page_objects/loginPage';
import { dashboard, Dashboard } from '../../page_objects/Dashboard';


describe('Usuario realizar loin', () => {
  
  let data;
  
  before(() => {
    //Given
    cy.fixture("dados").then((tData) => {
     data = tData;
    // cy.log(data.username)
    // cy.log(data.password)  
    });
  });
  
  it('Acessar a página com Usuário e senha válidos', () => {
    
    //When
    cy.login(data.username, data.password);

    //Then
   dashboard.header().should('be.visible');
   dashboard.user().should('be.visible');

  });
});
