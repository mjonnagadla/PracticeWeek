describe('Cypress Test', () => {
    it('Visit the PW Site', () => {
    cy.visit('https://sat.propertyware.com/pw/login.jsp')
    cy.get('[name=email]').type('dawn@jwcrentals.com')
    cy.get('[name=password]').type('Realpage12')
    cy.get('[type=button]').click()
    cy.get('.tabLblProperties').click()
    cy.contains('New Building').click()
    cy.get('[name="entity.name"]').type('Practicewk1')
    cy.get('[name="entity.propertyTypeID"]').select('House')
    cy.get('[name="entity.address"]').type('233 Main St #42')
    cy.get('[name="entity.city"]').type('Otego')
    cy.get('[name=otherState]').select('NY')
    cy.get('[name="entity.zip"]').type('13825')
    cy.scrollTo('bottom')
    cy.get('#editBuildingForm :nth-child(33) > input.button:nth-child(1)').click()
    cy.get('#saveAddrBrokerBtn').click()
    cy.get('input[value="Delete"]').click()

    
    } )
}
)