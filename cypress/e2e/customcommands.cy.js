/// <reference types="cypress"/>

describe('Custom commands',()=>{

    it.only('handling links without custom command',()=>{

        cy.visit("https://demo.nopcommerce.com/");

        // direct-without using custom command
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();

        //using custom command
       // cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get('.product-name h1').should('have.text','Apple MacBook Pro 13-inch');

    })


})