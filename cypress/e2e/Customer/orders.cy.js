import { visitOrdersPage, assertOrdersPageContents, createOrder, assertOrder, deleteOrder, assertOrderNotVisibleCustomer2 } from '../../pages/orders'
import users from '../../fixtures/users.json'

describe('Orders Page as Customer 1 ', () => {
    beforeEach(() => {
        cy.login(users.email, users.password)
    })
    it('View orders', () => {
        cy.switchToUser(users.customerId)
        visitOrdersPage()   
        assertOrdersPageContents('customer')
    })
    it('Create order', () => {
        cy.switchToUser(users.customerId)
        visitOrdersPage()   
        createOrder(9)
        assertOrder(9)
    })
    it('Switch to Customer 2', () => {
        cy.switchToUser(users.customer2Id)
        visitOrdersPage()
        assertOrderNotVisibleCustomer2()
    })
})
