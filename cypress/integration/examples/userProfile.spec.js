describe('User Profile creation ', () => {
    it('User Profile Creation', () => {
      cy.visit('https://sat.propertyware.com/pw/login.jsp')
      cy.get('[name=email]').type('dawn@jwcrentals.com')
    cy.get('[name=password]').type('Realpage12')
    cy.get('[type=button]').click()
   
          cy.contains('Setup').click()
          cy.wait(4000)
	  cy.get('div.menuHeader').contains('Administration Setup').prev().click( )
      cy.contains('Manage Users').click()
      cy.contains('User Profiles').click()
      cy.get('[type=button]').click()
      cy.get("input[name='entity.profileName']").type('TestCypress'+Math.floor((Math.random() * 100) + 1))
      cy.get("input[name='entity.addConversationWithOwners']").check()
      cy.get("[name='entity.createEditEPayBankInfo']").check()
      cy.get('.primaryButtons > div > input.button:nth-child(2)').click()
    })
})       
