

describe('Pruebas automatizadas Zero Bank', function(){
    beforeEach(function() {
      cy.visit('http://zero.webappsecurity.com/login.html');
      cy.get('#user_login').type('username');
      cy.get('#user_password').type('password');
      cy.get('.btn').click();
    })

it('Consultar las transacciones de la cuenta loan', function(){
    cy.get(':nth-child(8) > .board-content > .table > tbody > tr > :nth-child(1) > a').click()
    cy.get('.board-header').should('have.text', 'Show Transactions')
})

it('Consultar las transacciones de retiro', function(){
    cy.get('#account_activity_tab > a').click();
    cy.wait(1000);
    cy.get('.ui-tabs-nav > :nth-child(2) > a').click();
    cy.get('#aa_fromDate').click({ force: true }).type('2012-09-05');
    cy.get('#aa_toDate').click({ force: true }).type('2012-09-05');
    cy.get('#aa_type').select(2,{ force: true }).should('have.value', 'WITHDRAWAL');
    cy.get('.btn').click({ force: true });
    cy.get('#filtered_transactions_for_account > .table > tbody > tr > :nth-child(4)').should('have.text', '50')

   
    

    


    

})

})