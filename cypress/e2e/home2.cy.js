describe("Newsletter Subscribe Firme", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
it("suscribirse a la lista",()=> {
    cy.getByData("email-input").type("Da123@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").invoke('text')
    .should('match', /Success: Da123@gmail.com has been successfully subscribed/)



})



})
