/// <reference types="Cypress" />
describe('Navigating to SAT & Login to PW', function(){
    it('create Lease', function(){
        cy.login();
        // Clicking on Leases Module
        cy.get('.tabLblLeases > a').click()
        // Clicking on New Lease
        cy.get('[value="New Lease"]').click()
        cy.get("input[value='Attach Location']").click()
        cy.get('.liststyle1 > tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('[value="Done"]').click()
        cy.get("input[name='entity.startDateAsString']").type('04/01/2021')
        cy.get('#leaseFormSelect').select('Month to Month')
        // Clicking on Add Contact
        cy.get("input[value='Add Contact']").click()
        // Clicking on Create New Contact
        cy.get("input[value = 'Create New Contact']").click()
        // Generates randome name
        function name() {
            var text = "";
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
                text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            return text;
        }
        // Creating New Tenant
        cy.get("input[name='leaseContact.firstName']").type(name())
        cy.get("input[name='leaseContact.lastName']").type(name())
        cy.get("input[name='leaseContact.address']").type('3121 Palm Way')
        cy.get("input[name='leaseContact.city']").type('Austin')
        cy.get("#otherState").select('TX')
        cy.get("input[name='leaseContact.zip']").type('78758')
        cy.get("input[name='leaseContact.mobilePhone']").type('7894561230')
        cy.get('#saveContactButton').click()
        // save on address validation
        cy.get('#saveAddrBrokerBtn').click()
        // save on Lease
        cy.get('#leaseEditForm > :nth-child(12) > [value="Save"]').click()
        // save on address validation
        //cy.get('#addressPrompt > :nth-child(2) > [value="Save"]').click()
        // Leases > MoveIn form
        cy.get('#moveInForm .primaryButtons > :nth-child(2)').click()
        // Creating New Charge
        cy.get("input[value='New Charge']").click()
        cy.get("input[name='charge.editAmountAsString']").clear().type('100')
        cy.get("input[name='charge.dateAsString']").clear().type('04/01/2021')
        cy.get("#editChargeFormContainer .primaryButtons > :nth-child(1)").click()
        // Creating New Payments
        cy.wait(2000)
        cy.get("[value='New Payment']").click()
        cy.get("input[name='payment.refNo']").type('Check#1')
        cy.get('.pageSection').find("input[type='checkbox']").click()
        cy.get('#editPaymentFormContainer .primaryButtons > :nth-child(1)').click()
    })
})