class LoginPage
{

Email()
{
    return cy.get('#loginEmail')
}

Password()
{
    return cy.get("input[name='password']")

}
SignIn()
{
  return  cy.get("input[value='Sign Me In']")
}


}

export default LoginPage;
