import users from '../fixtures/users.json'
import { visitDashboard, clickProductsBtn, clickDiscountsBtn, clickOrdersBtn } from '../pages/dashboard'


describe('Dashboard', () => {

    beforeEach(() => {
        cy.login(users.email, users.password)
    })


    it('should navigate to products page', () => {
        visitDashboard()
        clickProductsBtn()
        cy.url().should('include', '/products')
    })

    it('should navigate to discounts page', () => {
        visitDashboard()
        clickDiscountsBtn()
        cy.url().should('include', '/discounts')
    })

    it('should navigate to orders page', () => {
        visitDashboard()
        clickOrdersBtn()
        cy.url().should('include', '/orders')
    })
})
