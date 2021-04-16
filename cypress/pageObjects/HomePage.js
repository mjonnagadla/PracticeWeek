class HomePage
{

Dashboards()
{
    return cy.get("li.tabLblDashboards > a")
}

Properties()
{
    return cy.get("li.tabLblProperties > a")

}
Marketing()
{
  return  cy.get("li.tabLblMarketing > a")
}

Leases()
{
  return  cy.get("li.tabLblLeases > a")
}

Contacts()
{
  return  cy.get("li.tabLblContacts > a")
}

}

export default HomePage;
