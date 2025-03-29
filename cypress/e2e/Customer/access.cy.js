import users from '../../fixtures/users.json'
import { assertCustomerAccessToProductsUI, assertCustomerAccessToDiscountsUI, assertCustomerAccessToOrdersUI, assertCustomerAccessToOrdersURL, assertCustomerAccessToProductsURL, assertCustomerAccessToDiscountsURL } from '../../pages/dashboard'
describe('Products Page as Customer', () => {
    beforeEach(() => {
        cy.login(users.email, users.password)
    })

    context('Customer 1', () => {

        it('Positive: switch to Customer 1, navigate to all pages', () => {
            cy.switchToUser(users.customerId)
            assertCustomerAccessToOrdersUI();
            assertCustomerAccessToOrdersURL();
        })

        it('Negative: switch to Customer 1, navigate to all pages', () => {
            cy.switchToUser(users.customerId)
            assertCustomerAccessToProductsUI();
            assertCustomerAccessToProductsURL();
            assertCustomerAccessToDiscountsUI();
            assertCustomerAccessToDiscountsURL();
        })

    })

    context('Customer 2', () => {

        it('Positive: switch to Customer 2, navigate to all pages', () => {
            cy.switchToUser(users.customer2Id)
            assertCustomerAccessToOrdersUI();
            assertCustomerAccessToOrdersURL();
        }) 

        it('Negative: switch to Customer 2, navigate to all pages', () => {
            cy.switchToUser(users.customer2Id)
            assertCustomerAccessToProductsUI();
            assertCustomerAccessToProductsURL();
            assertCustomerAccessToDiscountsUI();
            assertCustomerAccessToDiscountsURL();
        })

    })

})
