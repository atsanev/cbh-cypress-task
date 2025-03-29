import { visitProductsPage, assertProductsPageContents, addProduct, editProduct, searchProduct, deleteProduct } from '../pages/products'
import users from '../fixtures/users.json'

describe('Products Page as Admin', () => {
    beforeEach(() => {
        cy.login(users.email, users.password)
        visitProductsPage()
    })

    it('should navigate to products page', () => {
        assertProductsPageContents()
    })

    it('should add a product', () => {  
        addProduct('Test Product', '100', '10')
    })

    it('should edit a product', () => {
        editProduct('Test Product', '101', '11')
    })

    it('should search for a product', () => {
        searchProduct('Test Product')
    })

    it('should delete a product', () => {
        deleteProduct('Test Product')
    })
    
})
