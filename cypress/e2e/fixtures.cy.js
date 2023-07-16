/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('fixtures', () => {
    // Direct access and data is Hardcoded.
    it.skip('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[placeholder='Username']").type('Admin');
        cy.get("[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');

    })

    it.skip('using fixtures to get data from fixture file', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        // data present in the fixture file is loaded into the variable "data"
        cy.fixture('orangeHrm').then((data) => {
            cy.get("[placeholder='Username']").type(data.username);
            cy.get("[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected);
        })
    })

    // suppose if the same data is required in multiple tests(multiple 'it' blocks).In this case, 
    // create the hook and load the data.
    // A global variable is declared and refer in all the tests.
    let userData;
    before('before hook to load the data for multiple tests', () => {
        cy.fixture('orangeHrm').then((data) => {
            userData = data;
        })
    })

    it.skip('test2', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[placeholder='Username']").type(userData.username);
        cy.get("[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userData.expected);
    })

    

    
})