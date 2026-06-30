describe('Form Submission Practice', () => {
    it('fills out a login form', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/secure')
        cy.get('.flash.success').should('contain', 'You logged into a secure area')

    })
})

describe('Table Practice', () => {
it('visits the tables page', () => {
cy.visit('https://the-internet.herokuapp.com/tables')
cy.get('#table1 tbody tr').should('have.length', 4)
cy.get('#table1 thead tr th').should('have.length', 6)
cy.get('#table1 tbody tr').first().find('td').eq(0).should('contain', 'Smith')
cy.get('#table1 tbody tr').first().contains('delete').click()
cy.url().should('include', '#delete')
})
})