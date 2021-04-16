import HomePage from "../../pageObjects/HomePage";
import ContactsPage from '../../pageObjects/ContactsPage';

describe('Contacts Module Test', function() 
{
    const homePage=new HomePage();
    const contactsPage=new ContactsPage();
     before (() => {
        cy.login();
      cy.fixture('contacts.json').then(function(data) {
        this.data = data;
      })
    })

 it('Create and delete contact',function() {

contactsPage.createContact();
contactsPage.BackToContactsHome().click();
contactsPage.ModifiedDate().click();
contactsPage.SortZtoA().click();
//Verify that contact is present and delete it
cy.get('table.gridview tr td:nth-child(2)').each(($el, index, $list) => {


    const name=$el.text();
     var nameArray = name.split(" ");
     var firstName=nameArray[0];
     var lastName=nameArray[1];
     
     if((firstName===this.data.fname) && (lastName===this.data.lname))
     cy.get('table.gridview tr td:nth-child(2)').eq(index).prev().click()
    .then(function()
   {
        contactsPage.DeleteContactBtn().click();
        cy.get('table.gridview tr td:nth-child(3)').contains(this.data.email).should('not.exist');
   })

})
})

})

