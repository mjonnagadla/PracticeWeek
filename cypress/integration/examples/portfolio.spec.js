describe('portfolio creation and deletion', ()=>{
    it ('creating & deleting a portfolio', ()=>{
        cy.login();
        cy.get('li.tabLblProperties > a').click()
        cy.get('a[href="/pw/properties/edit_portfolio.do?action=NewPortfolio"]').click()
        cy.get('input[name="entity.name"]').type('PortNew108')
        cy.get("#editPortfolioForm > div:nth-child(13) > input:nth-child(1)").click()
        cy.get("input[value='Delete']").click()

           })
})