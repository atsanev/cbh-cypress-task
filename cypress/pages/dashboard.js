const productsBtn = '#main-navigation > div:nth-child(2)'
const discountsBtn = '#main-navigation > div:nth-child(3)'
const ordersBtn = '#main-navigation > div:nth-child(4)'

export function visitDashboard() {
    cy.visit(Cypress.env('baseUrl'))
}

export function clickProductsBtn() {
    cy.get(productsBtn).contains('Products').click()
}

export function clickDiscountsBtn() {
    cy.get(discountsBtn).contains('Discounts').click()
}

export function clickOrdersBtn() {
    cy.get(ordersBtn).contains('Orders').click()
}

export function assertCustomerAccessToProductsUI() {
    cy.get(productsBtn).should('not.exist');
}

export function assertCustomerAccessToDiscountsUI() {
    cy.get(discountsBtn).should('not.exist');
}

export function assertCustomerAccessToOrdersUI() {
    cy.contains('Orders').click();
}

export function assertCustomerAccessToDiscountsURL() {
    cy.visit(Cypress.env('baseUrl') + 'discounts');
    cy.url().should('not.include', '/discounts');
}

export function assertCustomerAccessToProductsURL() {
    cy.visit(Cypress.env('baseUrl') + 'products');
    cy.url().should('not.include', '/products');
}

export function assertCustomerAccessToOrdersURL() {
    cy.visit(Cypress.env('baseUrl') + 'orders');
    cy.url().should('include', '/orders');
}
