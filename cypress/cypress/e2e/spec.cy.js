describe('Page Navigation Test', () => {
  
  it('should navigate to settings', () => {

    const varUrl = 'https://coderbyte.com/profile';

    cy.visit(varUrl);

    cy.contains('settings').click();

    cy.url().should('include', '/settings');

  });
});