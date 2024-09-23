require ('cypress-plugin-api')

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

it('Login usuário via API', () => {

    cy.login_api(data.username, 
                 data.password)
})

});