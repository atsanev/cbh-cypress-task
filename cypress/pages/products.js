const productsTable = '[role="table"]';
const productRow = '[role="row"]';
const addProductBtn = '.btn-primary';
const searchInput = '#table_filter';
const editBtn = '.btn-info';
const deleteBtn = '.btn-danger';
const saveBtn = '.btn-primary';
const entriesOptions = '[value="100"]';
const productNameInput = '[name="input.name"]';
const productPriceInput = '[name="input.price"]';
const productStockQuantityInput = '[name="input.quantity"]';
const titlePopup = '#swal2-title';
const textPopup = '#swal2-html-container';
const confirmDeleteBtn = '.swal2-confirm';
const cancelDeleteBtn = '.swal2-cancel';
const closePopupBtn = '.swal2-close';


export function visitProductsPage() {
    cy.visit(Cypress.env('productsUrl'))
    cy.url().should('include', '/products')
}

export function assertProductsPageContents() {
    cy.get(productsTable).should('be.visible');
    cy.get(addProductBtn).should('be.visible');
    cy.get(searchInput).should('be.visible');
    cy.get(editBtn).should('be.visible');
    cy.get(deleteBtn).should('be.visible');
    cy.get(entriesOptions).should('be.visible');
}

export function addProduct(productName, productPrice, productDescription) {
    cy.get(addProductBtn).should('be.visible').click();
    cy.url().should('include', '/products/create');
    cy.get(productNameInput).should('be.visible').clear()
    cy.get(productNameInput).should('be.visible').type(productName);
    cy.get(productPriceInput).should('be.visible').clear()
    cy.get(productPriceInput).should('be.visible').type(productPrice);
    cy.get(productStockQuantityInput).should('be.visible').clear()
    cy.get(productStockQuantityInput).should('be.visible').type(productDescription);
    cy.get(saveBtn).contains('Save').should('be.visible').click();
    cy.get(productsTable).should('contain', productName);
    cy.url().should('include', '/products');
}

export function editProduct(productName, productPrice, productDescription)  {
    cy.get(productRow).eq(2).find(editBtn).click();
    cy.url().should('include', '/products/edit');
    cy.get(productNameInput).should('be.visible').clear()
    cy.get(productNameInput).should('be.visible').type(productName);
    cy.get(productPriceInput).should('be.visible').clear()
    cy.get(productPriceInput).should('be.visible').type(productPrice);
    cy.get(productStockQuantityInput).should('be.visible').clear()
    cy.get(productStockQuantityInput).should('be.visible').type(productDescription);
    cy.get(saveBtn).should('be.visible').click();
    cy.url().should('include', '/products');
    cy.get(productsTable).should('contain', productName);
    cy.get(productsTable).should('contain', productPrice);
    cy.get(productsTable).should('contain', productDescription);
}

export function deleteProduct(productName) {
    //close popup if it is open
    cy.get(productRow).eq(2).find(deleteBtn).click();
    cy.get(titlePopup).should('be.visible').should('contain', 'Delete record');
    cy.get(textPopup).should('be.visible').should('contain', 'You won\'t be able to revert this!');
    cy.get(closePopupBtn).should('be.visible').click();
    //cancel delete
    cy.get(productRow).eq(2).find(deleteBtn).click();
    cy.get(titlePopup).should('be.visible').should('contain', 'Delete record');
    cy.get(textPopup).should('be.visible').should('contain', 'You won\'t be able to revert this!');
    cy.get(cancelDeleteBtn).should('be.visible').click();
    //confirm delete
    cy.get(productRow).eq(2).find(deleteBtn).click();
    cy.get(titlePopup).should('be.visible').should('contain', 'Delete record');
    cy.get(textPopup).should('be.visible').should('contain', 'You won\'t be able to revert this!');
    cy.get(confirmDeleteBtn).should('be.visible').click();
    cy.url().should('include', '/products');
    cy.get(productsTable).should('not.contain', productName);
}

export function searchProduct(productName) {
    cy.get(searchInput).should('be.visible').type(productName);
    cy.get(productsTable).should('contain', productName);
}
