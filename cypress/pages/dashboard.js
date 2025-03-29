const productsBtn = '#main-navigation > div:nth-child(2)'
const discountsBtn = '#main-navigation > div:nth-child(3) > a'
const ordersBtn = '#main-navigation > div:nth-child(4) > a'

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

