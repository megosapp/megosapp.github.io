describe('Top', () => {
  it('top', () => {
    cy.visit('/')
    cy.contains('桜島降灰予報')
  })

  it('cross browser', () => {
    cy.visit('/')

    cy.percySnapshot('Top')
  })
})
