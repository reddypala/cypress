/// <reference types="cypress"/>
describe("check UI elements", ()=>{

    it("checking Radio Button", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //verified the visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it("checking checkBoxes", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // verified the visibility of checkbox
        cy.get("input#monday").should('be.visible')
        //selecting single checkbox
        cy.get("input#monday").check().should('be.checked')
        //unselect or uncheck the check box
        cy.get("input#monday").uncheck().should('not.be.checked')
        //select all checkboxes at one shot
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //unselect all check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        //How to select first and last checkbox out of all checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })
})