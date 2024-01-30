it('book_demo test', () => {
    cy.visit('/')
    cy.wait(3000)
    cy.get('#ccc-notify-accept > span').click()
    cy.get('.sc-acd052f5-0 > .sc-74bbb271-4 > .btn-inner-container > :nth-child(2) > .sc-74bbb271-0').click()
    cy.get('.sc-951def71-4 > :nth-child(1)').click()
    cy.get('.sc-951def71-4 > :nth-child(1)').type('Web')
    cy.get('.sc-951def71-4 > :nth-child(2)').click()
    cy.get('.sc-951def71-4 > :nth-child(2)').type('Test')
    cy.get('.sc-951def71-4 > :nth-child(3)').click()
    cy.get('.sc-951def71-4 > :nth-child(3)').type('test@testorg.com')
    cy.get('.sc-951def71-4 > :nth-child(4)').click()
    cy.get('.sc-951def71-4 > :nth-child(4)').type('TestOrg')
    cy.get('.hKijkn > .btn-inner-container > .sc-74bbb271-3').click({force:true})


})