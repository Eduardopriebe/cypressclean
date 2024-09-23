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

import { loginPage } from "../page_objects/loginPage.js";
import { newUser } from "../page_objects/newUser.js";
import { newCustomer } from "../page_objects/customers.js";
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
    
    setAuthCookies();
    cy.visit(urls.user, { onBeforeLoad(win) {setAuthSessionStorage(win)}})
    //newUser.btnNewUser().click();
    newUser.name().click({force: true}).type(name);
    newUser.userName().type(username);
    newUser.password().type(password);
    newUser.passConfirm().type(password);
    newUser.roles().type(roles);
    newUser.create().click();
    
    //When
    //newUser.sucessMsg().should('be.visible');

})

function setAuthCookies(){

    cy.setCookie("user.id", String(Cypress.env("auth.user.id")))
    cy.setCookie("token", Cypress.env("auth.token").replace(" ", "%20"))
    cy.request(urls.auth)
}

function setAuthSessionStorage(win){

    win.sessionStorage.setItem("user.id", Cypress.env("auth.user.id"))
    win.sessionStorage.setItem("token", Cypress.env("auth.token"))
  

}

Cypress.Commands.add('new_customer', (name,email,company,salary,city,state,adress,country,zipcode,phonenumber) => {
  
  setAuthCookies();
  cy.visit(urls.customer, { onBeforeLoad(win) {setAuthSessionStorage(win)}})
  newCustomer.name().click({force: true}).type(name);
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

Cypress.Commands.add('list_customers', () =>{

  setAuthCookies();
  cy.visit(urls.customer_list, { onBeforeLoad(win) {setAuthSessionStorage(win)}})
  newCustomer.sucessMsg().should('be.visible');
})