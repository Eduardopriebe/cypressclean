// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginPage } from "../page_objects/loginPage";
import { newUser } from "../page_objects/newUser";
import { newCustomer } from "../page_objects/customers";
import urls from './urls.js'
require('cypress-xpath')

// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.visit(urls.login);
    loginPage.fillUsername().type(username);
    loginPage.fillPassword().type(password);
    loginPage.submit();
    loginPage.sucess().contains('Dashboard');
  });

Cypress.Commands.add('new_user', (name,username,password,roles) => {
    cy.visit(urls.user);
    newUser.btnNewUser().click();
    newUser.name().click({force: true}).type(name);
    newUser.userName().type(username);
    newUser.password().type(password);
    newUser.passConfirm().type(password);
    newUser.roles().type(roles);
    newUser.create().click();
    
    //When
    //newUser.sucessMsg().should('be.visible');

})

Cypress.Commands.add('new_customer', (name,email,company,salary,city,state,adress,country,zipcode,phonenumber) => {
  cy.visit(urls.customer);
  
  //newCustomer.btnNewCustomer().click();
  newCustomer.name().type(name);
  newCustomer.email().click({force: true}).type(email);
  newCustomer.company().click({force: true}).type(company);
  newCustomer.salary().click({force: true}).type(salary);
  newCustomer.city().click({force: true}).type(city);
  newCustomer.state().click({force: true}).type(state);
  newCustomer.address().click({force: true}).type(adress);
  newCustomer.country().select(country);
  newCustomer.zipcode().click({force: true}).type(zipcode);
  newCustomer.phonenumber().click({force: true}).type(phonenumber);

  newCustomer.submit().click({force: true});

  

})
Cypress.Commands.add('user_Success', (msg) => {
  // //When
  //newUser.sucessMsg().should('be.visible');
  newUser.sucessMsg().should(msg);
})

Cypress.Commands.add('customer_Success', (msg) => {
  // //When
  //newUser.sucessMsg().should('be.visible');
  newCustomer.sucessMsg().should(msg);
})