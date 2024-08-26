Cypress.Commands.add('visitWithLocale', (locale, path) => {
   cy.visit(`/${locale}${path}`);
});
