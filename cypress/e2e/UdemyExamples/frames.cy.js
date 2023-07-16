/// <reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('frame test',()=>{

    it('handling frame',()=>{
        // plugin is required to handle frames
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq('0').click();
        cy.wait(2000);
        cy.iframe().find("h1.pricing-title").should('have.length',2);
    })
})