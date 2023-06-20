describe('template spec', () => {
  it('frist test', () => {
    cy.visit('http://localhost:3000')
  })

  it('second test', () => {
    cy.visit('https://example.cypress.io')
  })

  it('third test', () => {
    cy.visit('http://localhost:3000')
  })
})