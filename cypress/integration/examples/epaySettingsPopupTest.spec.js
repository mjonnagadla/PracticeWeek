import HomePage from "../../pageObjects/HomePage";
import ContactsPage from '../../pageObjects/ContactsPage';



it('Epay settings', () => {
    cy.login();
    const homePage=new HomePage();
    const contactsPage=new ContactsPage();
    homePage.Contacts().click();
    cy.get('table.gridview tr td:nth-child(2)').eq(1).click();
    cy.get('#epaySubtab').click()
    cy.get('#addEpayButton').click()
    cy.get('#editEPayInfoContainer').within(() => {
    cy.get('#achNickname').type('Test Nick Name')
    cy.get('input[name="epayAccount.bankName"]').type('Test Bank')
    cy.get('input[name="epayAccount.bankRoutingNumberDecrypted"]').type('111000025')
    cy.get('input[name="epayAccount.bankAccountNumberDecrypted"]').type('12233405')
    cy.get('#pNumber  a').click()
    cy.get('input[value="Save"]').click()

     })
    })