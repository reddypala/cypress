// alerts/popups

describe('Javascript alerts Handling',()=>{

    it('alerts',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#alertbtn").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.equal('Hello , share this practice page and share your knowledge');
        })
    })

    it('confirm alerts',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#confirmbtn").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('Hello , Are you sure you want to confirm?');
        })
    })
})