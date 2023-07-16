class Login{
    // approach - 2
    txtUsername = "[placeholder='Username']";
    txtPassword = "[placeholder='Password']";
    submit = "button[type='submit']";
    label = "h6";
    
    //user defined methods
    setUserName(username){
        cy.get().type(username);
    }

    setPassword(userpassword){
        cy.get().type(userpassword);
    }

    clickLoginButton(){
        cy.get().click();
    }

    verifyLogin(){
        cy.get().should('have.text','Dashboard');
    }
}

export default Login;