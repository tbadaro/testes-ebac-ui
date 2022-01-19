/// <reference types="cypress" />
var faker = require('faker');

describe('funcionalidade página de produtos', () => {
    
    beforeEach('go to login page', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('deve selecionar um produto da loja', () => {
        cy.get('[class="product-block grid"]')
        .eq(3)
        .click()
    })

    it('deve adicionar o produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
        //.eq(3)
        .contains('Argus All-Weather Tank')
        .click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')

    })


});