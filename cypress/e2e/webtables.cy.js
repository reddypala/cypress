/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe('handle tables', () => {

    beforeEach('Login', () => {

        cy.visit("https://demo.opencart.com/admin/")
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();
        //CustomersMenu ---> customers
        cy.get("#menu-customer>a").click();   //customers main menu
        //submenu customers
        cy.get("#menu-customer>ul>li:first-child").click();
    })

    it('check number of rows and columns', () => {

        cy.get(".table>tbody>tr").should('have.length', '10'); // to find length of number of rows have.length
        cy.get(".table>thead>tr>td").should('have.length', '7'); // validation on number of columns.

    })

    it('check cell data from specific row and column', () => {
        cy.get(".table>tbody>tr:nth-child(5)>td:nth-child(3)").contains('rs@yopmail.com');

    })

    it('Read all the rows & columns data in the page', () => {
        cy.get('table>tbody>tr').each(($row, index, $rows) => {

            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text())
                })
            })
        })
    })

    it.only('pagination', () => {
        // find total no of pages  Showing 1 to 10 of 5632 (564 Pages).
        /*let totalPages;
        cy.get(".col-sm-6.text-end").then((e) => {
            let myText = e.text()   // Showing 1 to 10 of 5632 (564 Pages) is retured and stored in myText
            totalPages = myText.substring(myText.indexOf('(') + 1, myText.indexOf('Pages') - 1);
            cy.log("Total number of pages:"+totalPages);

        })*/

        // Read or get the data from the table.
        let totalPages = 5;
        for (let p = 1; p <= totalPages; p++) {
            if (totalPages > 1) {
                cy.log("The active page is:" + p);
                cy.get("ul.pagination>li:nth-child("+p+")").click();
                cy.wait(3000);
                cy.get('table>tbody>tr').each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get("td:nth-child(3)").then((e) => {
                            cy.log(e.text());
                        })
                    })
                })
            }
        }

    })
})