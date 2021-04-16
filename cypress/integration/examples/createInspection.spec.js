describe('Inspection', function () {
    it('create and delete', function () {
        cy.visit('https://sat.propertyware.com/pw/login.jsp')
        cy.title().should('include', 'Propertyware Login Page')
        cy.get('#loginEmail').type('kathy@villarealty.com')
        cy.get('input[name="password"]').type('Realpage12')
        cy.get('input[value="Sign Me In"]').click()
    
      cy.get('.tabLblInspections > a').click()
      cy.get('input[value="New Inspection"]').click()
     // cy.get('#locationPicker').type('*')
        cy.get('#locationPicker').type('FIRSTGUARD').wait(2000).type("{downarrow}{enter}").then(function(){
        cy.get('select[name="inspectionTemplateID"]').select('House Visit')
        cy.get('#newInternalComment').type('RPractice Week')
        cy.get('#newInspectionSave').click()
        cy.get('#deleteInspectionButton').click()
    })
     
   })
})