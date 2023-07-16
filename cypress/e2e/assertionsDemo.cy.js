
describe('assertions demo', ()=>{

    it('implicit assertions', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain',"orangehrmlive")
        // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include',"orangehrmlive.com")
        // cy.url().should('contain',"orangehrmlive")
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('include',"orangehrmlive.com")

        cy.url().should('contain',"orangehrmlive")
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('include',"orangehrmlive.com")

        cy.title().should('include','Orange').and('eq','OrangeHRM').and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        //capture all the links from the webpage
        cy.xpath("//a").should('have.length',5) 

        cy.get("input[placeholder='Username']").type("admin") // enter text into input box
        cy.get("input[placeholder='Username']").should('have.value','admin')

    })

    it('Explicit assertions', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expectedName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actualName = x.text()

            //BDD style assertions
            expect(actualName).to.equal(expectedName)
           // expect(actualName).to.not.equal(expectedName)   //Negative assertion

            //TDD assertions
            assert.equal(actualName,expectedName)
           // assert.notEqual(actualName,expectedName)

                                               })
    })


})