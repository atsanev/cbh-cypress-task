import users from '../../fixtures/users.json'


describe('Login', () => {
    it('should login successfully', () => {
        cy.login(users.email, users.password)
        cy.get('.card-body').contains('Welcome Back')
    })
})
