class homePage{


    elements ={
        emailInput : () => cy.getByData("email-input"),
        submitBtn : () => cy.getByData("submit-button"),
        successMessage : () => cy.getByData("success-message")
    }


    clickOnSubmitBtn(){
        this.elements.submitBtn().click()
    }

    subscribeForUpdate(correo){
        this.elements.emailInput().type(correo)
        this.elements.submitBtn().click()
        cy.getByData("server-error-message")
     .contains("Error: "+correo+" already exists. Please use a different email address.")

    }
}


module.exports = new homePage();
