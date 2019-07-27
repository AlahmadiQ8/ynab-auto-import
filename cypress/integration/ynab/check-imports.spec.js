/// <reference types="Cypress" />

context('ynab', () => {
  before(() => {
    // cy.visit('https://app.youneedabudget.com/users/authentication');
    cy.visit('https://app.youneedabudget.com', {
      headers: {
        'X-Session-Token': Cypress.env('session-token'),
        Cookie: Cypress.env('cookie')
      }
    });
  });

  it.skip('loging with ynab account', () => {
    cy.get('#request_data_email')
      .type(Cypress.env('email'))
      .should('have.value', Cypress.env('email'));
    cy.get('#request_data_password')
      .type(Cypress.env('password'))
      .should('have.value', Cypress.env('password'));
    cy.get('#login')
      .should('not.be.disabled')
      .click();

    cy.url({ timeout: 10000 }).should('contain', 'budget');
  });

  it('check imports', () => {
    cy.get('.nav-account-row', { timeout: 10000 }).then(accounts => {
      for (const account of accounts) {
        cy.log(account.querySelector('.nav-account-icons-right').textContent);
        if (account.querySelector('.nav-account-icons-right').textContent) {
          cy.log(`clicking ${account.textContent}`);
          cy.get(`#${account.id}`).click();
          account.click();
          cy.url({ timeout: 10000 }).should('contain', 'account');
          cy.get('button:contains("Import")').click();
        }
      }
    });
  });
});
