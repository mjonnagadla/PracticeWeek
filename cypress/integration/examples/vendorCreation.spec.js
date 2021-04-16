describe('My Second Test', () => {
    it('Visit the PW1 Site', () => {
        cy.login();
        cy.get('.tabLblMoneyOut > a').click()
        cy.get('[value="New Vendor"]').click()
        function name() {
            var text = "";
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
            text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            return text;
        }
        cy.get('[name="entity.name"]').type(name())
        cy.get('[id="entity.vendorTypeID"]').select('Electrician')
        cy.get('[name="entity.address"]').type('301 falls blvd')
        cy.get('[name="entity.city"]').type('Quincy')
        cy.get('[id="otherState"]').select('MA')
        cy.get('[name="entity.zip"]').type('02189')
        cy.get('[name="entity.phone"]').type('1234567890')
        cy.get('[name="entity.email"]').type('test@cypress1.com')
        cy.get('[name="entity.phone"]').type('1234567890')
        cy.get('[name="entity.accountNumber"]').type('23300654330')
        cy.get('[name="entity.taxID"]').type('111-22-3333')
        cy.get('[name="entity.website"]').type('https:\\www.testvendor.com')
        cy.get('[name="entity.comments"]').type(' Hurray !! Vendor Creation by Cypress ')
        cy.get(':nth-child(18) > [value="Save"]').click()
        cy.get('input[value="Delete Vendor"]').click()


    })
})
