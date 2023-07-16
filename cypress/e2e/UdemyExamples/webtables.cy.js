describe('tables',()=>{

    it.skip('static table',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("table[name='courses'] tr td:nth-child(2)").each(($ele,index,$list)=>{
            let text = $ele.text();
            if(text.includes('python')){
                cy.get("table[name='courses'] tr td:nth-child(2)").eq(index).next().then((price)=>{
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                });
                
            }
        })
    })

    it('mouse Hover',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // cypress donot have support for mouse hover.so use jquery function 'show' called by 'invoke' method.
        //cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force: true});
        cy.url().should('include','top');

        // to click on hidden elements without mouse hover,cypress has ability to do it

    })
})