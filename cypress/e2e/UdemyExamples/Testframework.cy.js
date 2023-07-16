/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('My second Test suite', () => {

    
    before('before hook to loaddata',() => {
        //runs only once before all tests
        cy.fixture('example').then(function(data){
            this.userdata = data;
        })
    })

    it('My first Testcase', function()  {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.xpath("//div[@class='form-group']//input[@name='name']").type(this.userdata.name);
        cy.get('select').select(this.userdata.gender);
        cy.get("h4 input[name='name']").should('have.value',this.userdata.name);
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2');
        

    })
})