/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
  })
  it.only('preenche os campos obrigatórios e envia o formulário', function() {
    cy.get('#firstName').type('Janaina')
    cy.get('#lastName').type('Falcão')
    cy.get('#email').type('janaina@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})
  
