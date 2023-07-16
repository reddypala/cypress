
describe('Browser Navigation',()=>{

    it('NavigationTest',()=>{
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq','Your Store');
        cy.get("li.nav-item:nth-child(7)").click();
        cy.get("div#content h2").should('have.text','Cameras');


        // to go back to home page
        cy.go('back');
        cy.title().should('eq','Your Store');

        // to go forward i.e cameras page
        cy.go('forward');
        cy.get("div#content h2").should('have.text','Cameras');

        //alterate command to go back
        cy.go(-1); // back to Home page

        cy.go(1); // forward to cameras page

        // to reload
        cy.reload();
        
    })
})