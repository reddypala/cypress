/// <reference types="cypress"/>

// suppose, to test the same thing with "multiple sets" of data -> Data driven testing
describe('DataDrivenTest',()=>{

    it('Performing DDT',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.fixture('orangeHrmMultiplesets').then((data) => {

            // iterate through the data
            data.forEach((userdata) => {
                cy.get("[placeholder='Username']").type(userdata.username);
                cy.get("[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                if(userdata.username == 'Admin' && userdata.password == 'admin123'){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userdata.expected);
                    cy.get('p.oxd-userdropdown-name').click();
                    cy.get("a[href*='logout']").click();
                }

                else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected);
                }

                
            });
        

        })
    })
})