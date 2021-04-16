import HomePage from "../pageObjects/HomePage";



class ContactsPage
{
  NewContactButton()
{
    return cy.get("input[value='New Contact']")
}

FirstName()
{
    return cy.get("input[name='entity.firstName']") 
}

LastName()
{
    return cy.get("input[name='entity.lastName']") 
}

Mobile()
{
    return cy.get("input[name='entity.mobilePhone']") 
}

Email()
{
    return cy.get("input[name='entity.email']") 
}

SaveContact()
{
    return cy.get("input[value='Save']").eq(1)
}

ModifiedDate()
{
    return cy.get('th').contains('Modified Date')
}

SortZtoA()
{
    return cy.get('#columnOptionsDiv > ul > li:nth-child(2)')
}
DeleteContactBtn()
{
    return cy.get("input[value='Delete']")
}

BackToContactsHome()
{
    return cy.get('div.backLinks a')
}
PortalTab()
{
    return cy.get('div.tabbedSection a').contains('Portal')
}
LoginAsBtn()
{
    return cy.get("input[value=' Login As']")
}

createContact()
{   const homePage=new HomePage();
    homePage.Contacts().click();
    this.NewContactButton().click();
    cy.fixture("contacts").then((contacts) => {
        const fname = contacts.fname;
        const lname = contacts.lname;
        const email = contacts.email;
        const mobile = contacts.mobile;
    
    this.FirstName().type(fname);
    this.LastName().type(lname);
    this.Email().type(email);
    this.Mobile().type(mobile);
    this.SaveContact().click(); })
 
}  

}

export default ContactsPage;