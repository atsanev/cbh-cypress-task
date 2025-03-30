import { visitOrdersPage, assertOrdersPageContents, createOrder, assertOrder, deleteOrder, assertOrderNotVisibleCustomer2 } from '../../pages/orders'
import users from '../../fixtures/users.json'

describe('Orders Page as Customer 1 ', () => {
    before(() => {
        cy.login(users.email, users.password)
    })
    it('Delete order as admin', () => {
        visitOrdersPage()   
        deleteOrder(9)
    })
})




