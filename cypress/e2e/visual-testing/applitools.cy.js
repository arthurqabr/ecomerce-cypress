describe('Visual test', () => {
    
    
    it('Cypress eye Open', function() {
        // navigate to the url we want to test
        cy.visit('https://www.google.com/')

        cy.eyesOpen({
            appName: 'Sauce Demo',
            testName: 'Main app layout'
        })
        cy.eyesCheckWindow({
            tag: 'Sauce window',
            target: 'window',
            fully: true
        })
        cy.eyesClose()
    })
})