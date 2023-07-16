/// <reference types="cypress"/>
import Login from "../PageObjects/LoginPage"
describe('pom',()=>{

    //using page object class.
    it('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
        //create a object of login page class and invoke the method to perform action on that page.

        const ln = new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickLoginButton();
        ln.verifyLogin();
    })
})