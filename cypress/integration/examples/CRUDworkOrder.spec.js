describe('Work order Cr/Up/Cl', () => 
{
  beforeEach(() => {
    cy.visit('https://sat.propertyware.com/pw/login.jsp?unauthorized=true')
  })
  it('Work order Creation', () => 
  {
    cy.get('#loginEmail')
      .type('cynthia@azezrentals.com')
    cy.get('input[name="password"]')
      .type('Realpage12')
    cy.get('form[name="loginForm"] > input.button.login-button')
      .click()
    cy.title().should('include','Staging 2 [NEXT RELEASE 1.0.0.306]')
    cy.get('div#appHeader li.tabLblMaintenance > a')
    .click() //click on maintenance tab in PW
    ///cy.title().should('include','Staging 2 [NEXT RELEASE 1.0.0.306]')
    cy.get('form#maintenanceHomeForm div.primaryButtons > input:nth-child(1)')
    .click() //click on New WOrk Order button
    cy.get('#workOrderDetailForm > div.pageSection > table:nth-child(1) > tbody > tr:nth-child(2) > td > input')
    .click() //Click on Add location
    cy.get('input#searchText')
    .type('A') //given location in search field
    cy.get('[value="Search"]')
    .click() // click on search
    cy.get('.liststyle1 > tbody > tr:nth-Child(1) > td > input')
    .check() //check the location from list
    cy.get('#btnDone')
    .click() // after selecting address click on done
    cy.get('[name="entity.publishToTenantPortal"]')
    .uncheck() //uncheck tenant portal
    cy.get('input#ownerPortalPublishCheckbox')
    .uncheck() //uncheck owner portal
    cy.get('form#workOrderDetailForm tr:nth-child(19) > td > textarea')
    .type('Work order Description')
    cy.get('form#workOrderDetailForm div:nth-child(14) > input:nth-child(1)')
    .click()
    cy.screenshot()
    cy.get('#tabDetail')
    .click()
  })
  it('Work order update', () => 
  {
    cy.get('#loginEmail')
      .type('cynthia@azezrentals.com')
    cy.get('input[name="password"]')
      .type('Realpage12')
    cy.get('form[name="loginForm"] > input.button.login-button')
      .click()
    cy.title().should('include','Staging 2 [NEXT RELEASE 1.0.0.306]')
    cy.get('div#appHeader li.tabLblMaintenance > a')
    .click()
    cy.get('.gridview > tbody > :nth-child(2) > :nth-child(2) > span > a')
    .click()
    cy.get('#workOrderDetailForm > div.primaryButtons > input:nth-child(2)')
    .click()
    cy.get('[name="entity.type"]')
    .select('Evaluation')
    cy.get('#workOrderDetailForm > div:nth-child(14) > input:nth-child(1)')
    .click()
    cy.screenshot()
    cy.get('#tabDetail')
    .click()
  })
  it('Work order close', () => 
  {
    cy.get('#loginEmail')
      .type('cynthia@azezrentals.com')
    cy.get('input[name="password"]')
      .type('Realpage12')
    cy.get('form[name="loginForm"] > input.button.login-button')
      .click()
    cy.title().should('include','Staging 2 [NEXT RELEASE 1.0.0.306]')
    cy.get('div#appHeader li.tabLblMaintenance > a')
    .click()
    cy.get('.gridview > tbody > :nth-child(5) > :nth-child(2) > span > a')
    .click()
    cy.get('#workOrderDetailForm > div.primaryButtons > input:nth-child(5)')
    .click()
    cy.get('#closeWorkOrdersForm > div:nth-child(13) > input:nth-child(1)')
    .click()
    cy.screenshot()
    cy.get('#tabDetail')
    .click()
  })
})
