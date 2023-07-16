/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("alerts", () => {
    //1. Hnadling a simple alert box.
    it('handleAlerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains("I am a JS Alert")
        })

        //alert window automatically closed by cypress
        cy.get("#result").should('have.text', "You successfully clicked an alert")

    })

    // 2.javascript confirmation alert having "ok" and "cancel" buttons
    it('confirmation alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        //cypress automatically closes alert by using "ok" button
        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.get("#result").should('have.text', "You clicked: Ok")

    })

    it('confirmation alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        //cypress closes alert by using "cancel" button.Here event we have to write.
        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.on('window:confirm', () => false); //cypress closing alert window using cancel button. if it is true 
        //it will use ok button to close alert window.
        cy.get("#result").should('have.text', "You clicked: Cancel")

    })

    //3. Javascript "prompt" alert
    it('prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS prompt")
        })

        cy.get("#result").should('have.text', "You entered: welcome")
    })

    //4. authenticated alert
    it('authenticated alert', () => {
        //approach1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth:
            {
                username: "admin",
                password: "admin"
            }
        });
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")

        
    })

    //4. authenticated alert
    it('authenticated alert', () => {
        //approach2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")
    })
})