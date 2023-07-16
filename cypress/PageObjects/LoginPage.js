class Login{
    // approach - 1
    //user defined methods
    setUserName(username){
        cy.get("[placeholder='Username']").type(username);
    }

    setPassword(userpassword){
        cy.get("[placeholder='Password']").type(userpassword);
    }

    clickLoginButton(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.get("h6").should('have.text','Dashboard');
    }
}

export default Login;