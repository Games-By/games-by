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
   });
});
