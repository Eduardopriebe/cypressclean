// cypress/integration/login.spec.js
import { newCustomer } from "../../page_objects/customers";

import {faker} from '@faker-js/faker';
import { user } from "../../support/urls";


describe('Cliente Novo', () => {
    
  before(() => {
    //Given
    cy.auth_bypass_api();
  });
  
  it('Criando Customer com sucesso', () => {

    //When
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
   
   //Then               
   newCustomer.sucessMsg().should('be.visible');
  });
});
