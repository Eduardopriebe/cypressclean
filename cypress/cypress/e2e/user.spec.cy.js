// cypress/integration/login.spec.js
import { newUser } from "../page_objects/newUser";
import {faker} from '@faker-js/faker';


describe('Usuário Novo', () => {
    
  before(() => {
    //Given
    cy.auth_bypass_api();
  });
  
  it('Criando user com sucesso', () => {
    const password = faker.internet.password(10)
    cy.new_user(faker.name.fullName(), 
                faker.internet.email(), 
                password, 
                "ADMIN")

    //Then
    newUser.sucessMsg().should('be.visible');
   
  });
});
