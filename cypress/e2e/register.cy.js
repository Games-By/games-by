const locales = ['pt-BR', 'en-US', 'es-ES'];

locales.forEach((locale) => {
   describe(`Register Page in ${locale}`, () => {
      beforeEach(() => {
         cy.visitWithLocale(locale, '/register');
      });

      it('should render the registration form', () => {
         if (locale === 'pt-BR') {
            cy.get('h4.title').should('contain', 'Criar Conta');
         } else if (locale === 'en-US') {
            cy.get('h4.title').should('contain', 'Create Account');
         } else if (locale === 'es-ES') {
            cy.get('h4.title').should('contain', 'Crear Cuenta');
         }
      });

      it('should render terms and conditions link', () => {
         cy.get('p.terms').within(() => {
            cy.get('a').should('have.attr', 'href', `/${locale}/terms`);
         });
      });

      it('should register a user successfully', () => {
         cy.get('input[name="name"]').type('John Doe');
         cy.get('input[name="username"]').type('john_doe');
         cy.get('input[name="birth"]').type('01/01/2000');
         cy.get('input[name="email"]').type('john.doe@example.com');
         cy.get('input[name="confirmEmail"]').type('john.doe@example.com');

         if (locale === 'pt-BR') {
            cy.get('input[name="userID"]').type('123456789');
         }

         cy.get('input[name="password"]').type('Password123');
         cy.get('input[name="confirmPassword"]').type('Password123');

         cy.get('button').contains(locale === 'pt-BR' ? 'Registrar' : (locale === 'en-US' ? 'Register' : 'Registrar')).click();

         cy.url().should('include', '/login');
      });
   });
});
