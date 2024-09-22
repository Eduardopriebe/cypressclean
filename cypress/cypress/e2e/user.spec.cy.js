// cypress/integration/login.spec.js
import {faker} from '@faker-js/faker';


describe('Usuário Novo', () => {
  
  let data;
  
  before(() => {
    //Given
    cy.fixture("example").then((tData) => {
     data = tData;
    // cy.log(data.username)
    // cy.log(data.password)  
    });
  });
  
  it('Criando user com sucesso', () => {
    const password = faker.internet.password(10)

    //When
    cy.login(data.username, data.password);
    cy.new_user(faker.name.fullName(), faker.internet.email(), password, data.roleAdm )

    //Then
   
  });
});
