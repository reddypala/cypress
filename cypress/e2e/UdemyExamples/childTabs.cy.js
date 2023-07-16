
describe('Handling tabs', () => {

    it.skip('approach1-remove target attribute', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke('removeAttr', 'target').click();
        cy.url().should('include','qaclickacademy');
        cy.wait(6000);
        //cy.title().should('include','QAClick Academy')
        cy.go('back');
    })

    // switching from one domain to another new domain won't work in cypress
    // simply cross domain is not supported by cypress by default.
    it('approach2 - grab href and hit url', () => {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.get("#opentab").then((el) =>{

            // grab href link
            const url = el.prop('href');
            cy.visit(url);
            cy.origin(url,()=>{
                cy.get(".navbar-nav li a[href*='about']").click();
            })
       })

    })

   


    
})