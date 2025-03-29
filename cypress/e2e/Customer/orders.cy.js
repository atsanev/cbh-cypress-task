import { visitOrdersPage } from '../../pages/orders'
import users from '../../fixtures/users.json'

describe('Orders Page as Customer', () => {
    beforeEach(() => {
        cy.login(users.email, users.password)
        cy.switchToUser(users.customerId)
        visitOrdersPage()
    })
    
})
