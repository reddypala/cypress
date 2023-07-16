/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('find vs get',()=>{

    it('find',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input.search-keyword").type("ca");
        cy.wait(3000);
        cy.get('.products').as('prodContainer'); // as means aliasing
        cy.get('@prodContainer').find('.product').should('have.length',4);
        cy.get('@prodContainer').find('.product').eq('1').contains('ADD TO CART').click();
        cy.get('@prodContainer').find('.product').each(($ele,index,$list)=>{

            const nameOfVeg = $ele.find('h4.product-name').text()
            if(nameOfVeg.includes('Cashews')){
                //$ele.find('button').trigger("click"); or use below wrap() method
                cy.wrap($ele).find('button').click();
            }
        })

        //Manually resolving the promise
        cy.get('.brand').then(($ele)=>{
            cy.log($ele.text())
        })
    })
})