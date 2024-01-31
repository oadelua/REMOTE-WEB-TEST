describe('Remote Web Test', () => {
  it('passes', () => {
    cy.wait(3000)
    cy.visit('/')
    cy.wait (3000)
    cy.get('#ccc-notify-accept').click()
    cy.get('.sc-a67a4d61-3 > .sc-f5488d64-0 > [data-meta-row-node="1"] > .sc-8a2dfa49-0').click()
    cy.get('[data-index="1"] > .label').click()
    cy.get('.inner-secondary > :nth-child(2) > :nth-child(1) > .page-list > :nth-child(2) > .sc-8a2dfa49-0').click()
    cy.get('.css-6y63e8').click()
    cy.get('.css-6y63e8').type('Nigeria {enter}') //this cmd allows you search for an item from a list and enter
    cy.get('.sc-117b11cd-1').click({force: true})
    cy.get('.sc-117b11cd-1').type('75000')
    cy.get('.sc-fcc5005d-1 > .sc-74bbb271-4 > .btn-inner-container > :nth-child(2) > .sc-74bbb271-0').click()
    cy.get('.huWifs > .btn-inner-container > :nth-child(2) > .sc-74bbb271-0').click()
  })
})