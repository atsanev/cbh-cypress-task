const ordersTable = '[role="table"]';
const ordersCreateTableRow = '.table td';
const orderRow = '[role="row"]';
const orderCell = '[role="cell"]';
const addOrderBtn = '.btn-primary';
const entriesOptions = '[value="100"]';
//const buyCheckbox = '[type="checkbox"]'
//this is terrible, never do this
const buyCheckbox = ':nth-child(1) > :nth-child(1) > .form-check'
const quantityInput = ':nth-child(1) > :nth-child(4) > .form-control'
const createOrderTable = '.table';
const deleteBtn = '.btn-danger';
const orderShowBtn = '[role="button"]';
const saveBtn = '.btn-primary';
const titlePopup = '#swal2-title';
const textPopup = '#swal2-html-container';
const confirmDeleteBtn = '.swal2-confirm';
const cancelDeleteBtn = '.swal2-cancel';
const closePopupBtn = '.swal2-close';

export function visitOrdersPage() {
    cy.visit(Cypress.env('ordersUrl'))
    cy.url().should('include', '/orders')
}

export function assertOrdersPageContents(role) {
    cy.get(ordersTable).should('be.visible');
    cy.get(addOrderBtn).should('be.visible');
    cy.get(entriesOptions).should('be.visible');
    cy.get(orderShowBtn).should('be.visible');
    if (role === 'admin') {
        cy.get(orderRow).eq(2).find(deleteBtn).should('be.visible');
    }
}

export function createOrder(quantity) {
    cy.get(addOrderBtn).click();
    cy.url().should('include', '/orders/create');
    cy.get(buyCheckbox).click();
    cy.get(quantityInput).should('be.visible').clear()
    cy.get(quantityInput).should('be.visible').type(quantity);
    cy.get(saveBtn).should('be.visible').should('include.text', 'Save').click();
    cy.url().should('include', '/orders');
    cy.get(ordersTable).should('contain', quantity);
}

export function deleteOrder(quantity) {
    cy.get(orderRow).eq(2).find(deleteBtn).click();
    //close popup if it is open
    cy.get(titlePopup).should('be.visible').should('contain', 'Delete record');
    cy.get(textPopup).should('be.visible').should('contain', 'You won\'t be able to revert this!');
    cy.get(closePopupBtn).should('be.visible').click();
    //cancel delete
    cy.get(orderRow).eq(2).find(deleteBtn).click();
    cy.get(titlePopup).should('be.visible').should('contain', 'Delete record');
    cy.get(textPopup).should('be.visible').should('contain', 'You won\'t be able to revert this!');
    cy.get(cancelDeleteBtn).should('be.visible').click();
    //confirm delete
    cy.get(orderRow).eq(2).find(deleteBtn).click();
    cy.get(titlePopup).should('be.visible').should('contain', 'Delete record');
    cy.get(textPopup).should('be.visible').should('contain', 'You won\'t be able to revert this!');
    cy.get(confirmDeleteBtn).should('be.visible').click();
    cy.url().should('include', '/orders');
    cy.get(ordersTable).should('not.contain', quantity);
}

export function assertOrder(quantity) {
    cy.get(orderRow).eq(2).find(orderCell).should('contain', quantity);
}

export function assertInsufficientQuantity() {
    cy.contains('Has insufficient stock for product Demo Product').should('be.visible');
}

export function assertOrderNotVisibleCustomer2() {
    cy.contains('No data').should('be.visible');
}




