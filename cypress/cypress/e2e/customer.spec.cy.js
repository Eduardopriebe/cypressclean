// cypress/integration/login.spec.js
import { newCustomer } from "../page_objects/customers";

import {faker} from '@faker-js/faker';


describe('Cliente Novo', () => {
  
  let data;
  
  before(() => {
    //Given
    cy.fixture("dados").then((tData) => {
     data = tData;
    // cy.log(data.username)
    // cy.log(data.password)  
    });
  });
  
  it('Criando Customer com sucesso', () => {

    cy.login(data.username, data.password);
    cy.new_customer(faker.name.fullName(12),
                    faker.internet.email(),
                    faker.company.name(),
                    faker.number.int(6),
                    faker.address.city(),
                    faker.address.state(),
                    faker.address.streetAddress(),
                    faker.address.country(),
                    faker.address.zipCode(),
                    faker.phone.number(),
                  )
                  
   newCustomer.sucessMsg().should('be.visible');
  });
});
