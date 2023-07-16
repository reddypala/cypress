/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('Interact with multiple elements',()=>{
    
    
    it( 'Handling multiple elements',()=>{

        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('#userEmail').type('ayansh@gmail.com');
        cy.get('#userPassword').type('Qsx852@0');
        cy.get('#login').click();
        cy.get('.card');
        // assert to have length 3
        cy.get('.card').should('have.length',3);
        cy.get('.card').should('contain.text',"zara coat 3");
        // cy.get('.card-body .btn.w-40.rounded').first().click();  // out of three elements it click first element
        // cy.get('.card-body .btn.w-40.rounded').last().click();// out of three elements it click last element
        // cy.get('.card-body .btn.w-40.rounded').eq('0').click(); // out of three elements it click first element
        // based on index.

        //print all of the product names
        // Here each command is like forEach() loop in javascript.
        cy.get('.card-body b').each(($ele,index,$listOfElemenents)=> {
            cy.log($ele.text());
            if($ele.text().includes('iphone')){
                cy.get('.card-body .btn.w-40.rounded').eq(index).click();
            }
        })
        

    });











})