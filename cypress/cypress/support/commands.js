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
import urls from './urls.js'

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
    newUser.sucessMsg().should('be.visible');

})