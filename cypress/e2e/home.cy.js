/*describe('template spec', () => {
  it('frist test', () => {
    cy.visit('http://localhost:3000')
  })*/

  /*it('second test', () => {
    cy.visit('https://example.cypress.io')
  })*/

  /*it('third test', () => {
    //cy.visit('http://localhost:3000')
  })*/

  /*it('xpath test', () => {
    cy.visit('https://example.cypress.io')
    cy.xpath('//h1').contains("Kitchen Sink")
    cy.xpath('//h1').should('have.length', 1);
  });*/


  /*it.only("the features on the homepage are correct", () => {
    cy.visit('http://localhost:3000')
    cy.get("dt")
  })*/

  it.only("Prueba1", () => {
    cy.visit('http://localhost:3000')
    cy.xpath('//h1').contains("Cypress")
  })

  it.only("Prueba2", () => {
    cy.visit('http://localhost:3000')
    cy.xpath('//p').invoke('text')
    .should('match', /^Lorem ipsum dolor sit, amet consectetur adipisicing elit./)
  })

  it.only("Prueba3", () => {
    cy.visit('http://localhost:3000')
    cy.get("dt").should('have.length', 2)
  })
  
  





