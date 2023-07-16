describe('mysuite',()=>{

    it('Capture screenshots & videos',()=>{

        cy.visit('https://demo.opencart.com/');
        cy.screenshot("Homepage");
        cy.wait(5000);
        //to capture screenshot of webelement
        cy.get("img[title='Your Store']").screenshot("OpenCartLogo");

        //cypress By default, Automatically capture screenshots and record videos when test
        // failure occurs.When tests are run FROM CLI tool like cmd prompt, CI tool.

        cy.get("li.nav-item:nth-child(7)").click();
        cy.get("h2").should('have.text','Tablets');
    })
})