import { visitProductsPage, assertProductsPageContents, addProduct, editProduct, searchProduct, deleteProduct } from '../pages/products'
import users from '../fixtures/users.json'
import products from '../fixtures/products.json'

describe('Products Page as Admin', () => {
    beforeEach(() => {
        cy.login(users.email, users.password)
        visitProductsPage()
    })

    it('should navigate to products page', () => {
        assertProductsPageContents()
    })

    it('should add a product', () => {  
        addProduct(products.name, products.price, products.quantity)
    })

    it('should edit a product', () => {
        editProduct(products.name, products.price, products.quantity)
    })

    it('should search for a product', () => {
        searchProduct(products.name)
    })

    it('should delete a product', () => {
        deleteProduct(products.name)
    })
    
})
