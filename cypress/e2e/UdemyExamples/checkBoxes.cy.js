/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('webelements', () => {

    it('checkboxes', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', "option1");
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked').and('have.value', 'option1');

    })

    it('selecting multiple checkboxes', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // write a common locator that points to all checkboxes
        // pass array of value attribute values (value="option2") to check() method..
        cy.get("input[type='checkbox']").check(['option2', 'option3']);

    })

    it('static dropdown',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#dropdown-class-example").select('option2').should('have.value','option2');

    })

    it('dynamic dropdowns',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#autocomplete").type("Ind");
        cy.get("li.ui-menu-item div").each(($ele,index,$list)=>{

            if($ele.text() == 'India'){
                cy.wrap($ele).click();
            }

        })
        // assertion
        cy.get("#autocomplete").should('have.value','India');
    })

    it('Handling visible and invisible elements',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    })

    it.only('radio buttons',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // selecting radio2 button.
        cy.get(".radioButton").check(['radio2']).should('be.checked');

    })

})