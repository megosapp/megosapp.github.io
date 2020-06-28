describe('Top', () => {
  it('top', () => {
    cy.visit('/')
    cy.contains('桜島降灰予報')
  })

  it('cross browser', () => {
    cy.visit('/')

    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: 'Sakurajima wind',
      testName: 'cross browser'
    })

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    cy.eyesCheckWindow({
      tag: 'Top Window',
      target: 'window',
      fully: true
    })

    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose()
  })
})
