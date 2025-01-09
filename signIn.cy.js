describe("Assertion demo", () => {
    Cypress.on('uncaught:exception', (err) => {
        console.error('Uncaught exception:', err);
        return false;
    });

    it("Checking SignIn", () => {
         // Test data stored in variables
        const userData = {
            email: "mim789313@gmail.com",
            password: "mim12345",
            
        };
          // Visit the website
        cy.visit("https://www.xampro.org/");

            // Close the splash screen if visible
        cy.get(".splash-screen-header.modal-header")
            .should('be.visible')
            .click();

          // Navigate to the registration page
        cy.get("a.navbar-login-btn span")
            .should('be.visible')
            .click();

            
          // Fill out the signup form using variables
        cy.get("#email").type(userData.email);
        cy.get("#password").type(userData.password);
        cy.get(".account-access-submit-button").click();

    });
});