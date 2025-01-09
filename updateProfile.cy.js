describe("Assertion demo", () => {
    Cypress.on('uncaught:exception', (err) => {
        console.error('Uncaught exception:', err);
        return false;
    });

    it("Checking Profile Update", () => {
         // Test data stored in variables
        const userData = {
            email: "mim789313@gmail.com",
            password: "mim12345",
            fullName: "JIM AKTER",
            updatedEmail: "jim789313@email.com",
            phoneNumber: "01878245373",
            dob: "2006-02-25",
        };
           // Visit the website
        cy.visit("https://www.xampro.org/");

        cy.get(".splash-screen-header.modal-header")
            .should('be.visible')
            .click();

        cy.get("a.navbar-login-btn span")
            .should('be.visible')
            .click();

        cy.get("#email").type(userData.email);
        cy.get("#password").type(userData.password);
        cy.get(".account-access-submit-button").click();

        cy.get(".dropdown-desktop-show-mobile-hide > #basic-nav-dropdown", { timeout: 10000 })
            .should('be.visible')
            .click();

        cy.get(":nth-child(1) > .d-flex > .gdhdjhb > h6")
            .should('be.visible')
            .click();

        cy.get(".profile-view-btn > #basic-nav-dropdown")
            .should('be.visible')
            .click();

        cy.get(":nth-child(8) > a")
            .should('be.visible')
            .click();

        cy.get("#fullName").clear().type(userData.fullName);
        cy.get("#email").clear({ force: true }).type(userData.updatedEmail, { force: true });

        cy.get("#phoneNumber").clear().type(userData.phoneNumber);
        cy.get("#dob").clear().type(userData.dob);

        cy.get("#radio-gender-female").click();
        cy.get("#education").click();

        cy.get(".css-1xc3v61-indicatorContainer")
            .should('be.visible')
            .click();
    });
});
