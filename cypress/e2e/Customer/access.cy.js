import visitProductsPage from '../../pages/products'
import users from '../../fixtures/users.json'
import { assertCustomerAccessToProductsUI, assertCustomerAccessToDiscountsUI, assertCustomerAccessToOrdersUI, assertCustomerAccessToOrdersURL, assertCustomerAccessToProductsURL, assertCustomerAccessToDiscountsURL } from '../../pages/dashboard'
describe('Products Page as Customer', () => {
    beforeEach(() => {
        cy.login(users.email, users.password)
        cy.switchToUser(users.customerId)
        visitProductsPage()
    })

    it('should navigate to orders page', () => {
        assertCustomerAccessToOrdersUI();
        assertCustomerAccessToOrdersURL();
    })

    it('should not navigate to products page', () => {
        assertCustomerAccessToProductsUI();
        assertCustomerAccessToProductsURL();
    })

    it('should not navigate to discounts page', () => {
        assertCustomerAccessToDiscountsUI();
        assertCustomerAccessToDiscountsURL();
    })
    

})
