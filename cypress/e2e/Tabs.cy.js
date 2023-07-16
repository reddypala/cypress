/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('Handle Tabs', () => {

    it('Approach_1', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example>a").invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        //after performing operations on the child tab, now go to parent tab

        cy.go('back')  //back to parent tab
    })

    it('Approach_2', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        // write the Jquery function then()
        cy.get(".example>a").then((e) => {
            //capture the href attribute
            let url = e.prop('href')

            cy.visit(url);
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        //after performing operations on the child tab, now go to parent tab

        cy.go('back')  //back to parent tab

    })
})