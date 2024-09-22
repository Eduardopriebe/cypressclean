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

// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    loginPage.visit();
    loginPage.fillUsername().type(username);
    loginPage.fillPassword().type(password);
    loginPage.submit();
    loginPage.sucess().contains('Dashboard');
  });

Cypress.Commands.add('new_user', (name,username,password,roles) => {
    newUser.page();
    newUser.btnNewUser().click();
    newUser.name().click({force: true}).type(name);
    newUser.userName().type(username);
    newUser.password().type(password);
    newUser.passConfirm().type(password);
    newUser.roles().type(roles);
    newUser.create().click();
    newUser.sucessMsg().should('be.visible');

})