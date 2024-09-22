// cypress/page-objects/loginPage.js
class NewUser {
        
    btnNewUser() {
      return cy.get('#button-forms-customer-create > .icon > .bi');
    }
  
    name() {
     return cy.get('#userName1');  //Form Name
    }
    
    userName(username) {
      return cy.get('#userName2'); //Form username
    }
  

    password(password) {
      return cy.get('#userPassword1'); //Form password
    }

    passConfirm(confirm) {
      return cy.get('#userPasswordConfirmation'); //Form confirm
    }

    roles (rols) {
      return cy.get('#userRoles'); //From roles do user
    }

    create() {
      return cy.get('#submit'); // button create to confirm
    }

    sucessMsg(){
      return cy.get('#alert-success');
    }
}  
  export const newUser = new NewUser();