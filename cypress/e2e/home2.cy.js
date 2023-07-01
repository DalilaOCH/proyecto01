import homePage from "../pages/homePage"

describe("testing", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("Hero section", () => {     
   it.only("suscribirse a la lista",()=> {
     homePage.elements.emailInput().type("Da123@gmail.com") 
     homePage.clickOnSubmitBtn()
     homePage.elements.successMessage().should("exist")
     .contains(/Success: Da123@gmail.com has been successfully subscribed/)
    })   
  })


  context("Courses section", () => {
   it.only("Course: Testing Your First Next.js Application", () => {
     cy.getByData("course-0").find("a").contains("Get started").click()
     cy.location("pathname").should("equal", "/testing-your-first-application")
    })  
  })

  context("duplicado de email", () => {
    it.only("probando error de email duplicado", () => {
     homePage.subscribeForUpdate("john@example.com")
     })  
   })
})
