/// <reference types="cypress" />


describe("Laragigs home page", () => {
    beforeEach(() => {
        cy.visit("http://laragigs.test/")
    });

    it("should showcase error if information is missing", () => {
        cy.contains("Register").click()
        cy.visit("http://laragigs.test/")
        cy.contains("Senior React Dev").click()
        cy.visit("http://laragigs.test/")
        cy.get("input[name='search']").type("Senior React Dev")
        cy.contains("Search").click()
    })

    it("should showcase error if elements are missing", () => {
        cy.contains("Login").click()
        cy.get("input[name='email']").type("kaiju@example.com")
        cy.get("input[name='password']").type("Monday123")
        cy.contains("Sign In").click()
        cy
            .contains("You are now logged in")
            .should('be.visible')
    })
})
