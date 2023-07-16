/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe';
import '@4tw/cypress-drag-drop'
describe("Mouse Operations",()=>{

    it.skip('MouseHover',()=>{

        cy.visit("https://demo.opencart.com/");
        cy.xpath("//a[text()='Mac (1)']").should('not.be.visible');
        cy.xpath("//a[text()='Desktops']").trigger('mouseover').click();
        cy.xpath("//a[text()='Mac (1)']").should('be.visible');
    })

    it.skip('Right click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //cy.xpath("//span[@class='context-menu-one btn btn-neutral']").trigger('contextmenu');
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
        
    })

    it.skip('Double click',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded("#iframeResult"); //loaded the frame

        //approach1 -trigger() a double click event.
        // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe("#iframeResult").find("#field2").should('have.value',"Hello World!");
        
        // approach 2 - doubleclick
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("#field2").should('have.value',"Hello World!");

    })

    it.skip('Drag and drop using plugin',()=>{
        // plug in is required "npm install --save-dev @4tw/cypress-drag-drop"
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box6").should('be.visible');
        cy.get("#box106").should('be.visible');
        cy.wait(3000);
        //cy.get("#box6").drag('#box106');
        cy.get("#box6").drag('#box106',{force:true});

    })

    it.only('scrolling page',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        //India scroll down
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)')
        .scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').should('be.visible');

        //scroll up 
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(2)').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(2)').should('be.visible');

        // to the end of the page.
        cy.get('#footer').scrollIntoView({duration:2000});
        cy.get('#footer').should('be.visible');
    })
})