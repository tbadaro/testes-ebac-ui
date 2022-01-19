/// <reference types="cypress" />

context('funcionalidade login', () => {

    beforeEach('go to login page', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome')
    })

    it('deve exibir mensagem de erro ao inserir usuário inválido', () => {       
        cy.get('#username').type('usuarioErrado')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro:')
    })

    it('deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhaerrada')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro:')
    })
})