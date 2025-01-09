describe("Assertion Demo", () => {

    // Handle uncaught exceptions to prevent test interruption
    Cypress.on('uncaught:exception', (err) => {
        console.error('Uncaught exception:', err);
        return false;
    });

    it("Checking Registration", () => {

        // Test data stored in variables
        const testData = {
            name: "Mim Akter",
            email: "mim789313@gmail.com",
            phone: "01878245373",
            password: "mim12345",
        };

        // Visit the website
        cy.visit("https://www.xampro.org/");

        // Close the splash screen if visible
        cy.get(".splash-screen-header.modal-header")
          .should('be.visible')
          .click();

        // Navigate to the registration page
        cy.get("a.navbar-register-btn.nav-link span")
          .should('be.visible')
          .click();

        // Fill out the registration form using variables
        cy.get("#name")
          .should('exist')
          .type(testData.name);

        cy.get("#email")
          .should('exist')
          .type(testData.email);

        cy.get("#phoneNumber")
          .should('exist')
          .type(testData.phone);

        cy.get("#password")
          .should('exist')
          .type(testData.password);

        cy.get("#confirmPassword")
          .should('exist')
          .type(testData.password);

        // Submit the form by clicking the forward arrow button
        cy.get("img[src='/static/media/ForwardArrow.370c4cdf.svg']")
          .should('be.visible')
          .click();
    });
});
