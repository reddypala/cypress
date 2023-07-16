/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('Handling frames',()=>{
    it.skip('approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        iframe.clear().type("Welcome melcow {ctrl+a}");
        cy.get("button[aria-label='Bold']").click();
    })

    it.skip('approach2-by using custom command',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr")
            .clear().type("Welcome melcow {ctrl+a}");
        cy.get("button[aria-label='Bold']").click();
    })


    it('approach3-by using cypress iframe plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr")       // load the frame or switch to the frame
        
        //cy.iframe("#mce_0_ifr").clear().type("This is cypress {ctrl+a}"); or
        cy.iframe().clear().type("This is cypress {ctrl+a}");
        cy.get("button[aria-label='Bold']").click();

    })



    
});