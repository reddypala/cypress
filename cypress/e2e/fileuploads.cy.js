
import 'cypress-file-upload';

describe('Handling file uploads',()=>{

    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('file-sample.pdf');
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get(".example h3").should('have.text',"File Uploaded!");
    })

    it('fileupload -Rename',()=>{
        
    })

    
})