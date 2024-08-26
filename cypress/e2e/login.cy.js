const locales = ['pt-BR', 'en-US', 'es-ES'];

const errorMessages = {
   'pt-BR': {
      emailPlaceholder: 'Digite seu e-mail',
      password: 'Senha',
      passwordPlaceholder: 'Digite sua senha',
      remember: 'Lembrar de mim',
      forgot: 'Esqueceu a senha?',
      or: 'ou',
      register: 'Registre-se',
      errors: {
         emptyEmail: 'O campo de e-mail é obrigatório!',
         invalidEmail: 'Por favor, insira um endereço de e-mail válido!',
         emptyPassword: 'O campo de senha é obrigatório!',
      },
   },
   'en-US': {
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Type your password',
      remember: 'Remember me',
      forgot: 'Forgot the password?',
      or: 'or',
      register: 'Register',
      errors: {
         emptyEmail: 'The E-mail field is required!',
         invalidEmail: 'Please enter a valid email address!',
         emptyPassword: 'The Password field is required!',
      },
   },
   'es-ES': {
      emailPlaceholder: 'Introduce tu correo electrónico',
      password: 'Contraseña',
      passwordPlaceholder: 'Escribe tu contraseña',
      remember: 'Recuérdame',
      forgot: '¿Olvidaste la contraseña?',
      or: 'o',
      register: 'Regístrate',
      errors: {
         emptyEmail: '¡El campo de correo electrónico es obligatorio!',
         invalidEmail: '¡Por favor, introduce una dirección de correo válida!',
         emptyPassword: '¡El campo de contraseña es obligatorio!',
      },
   },
};

locales.forEach((locale) => {
   describe(`Login Page Validations in ${locale}`, () => {
      beforeEach(() => {
         cy.visitWithLocale(locale, '/login');
      });

      const messages = errorMessages[locale];

      it('should show validation errors for empty email and password fields', () => {
         cy.get('input[name="email"]').clear();
         cy.get('input[name="password"]').clear();
         cy.get('.button').click();

         cy.wait(500); 

         cy.get('input[name="email"]')
            .parent()
            .find('.error')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
               cy.log('Texto do erro de e-mail:', text.trim());
               expect(text.trim()).to.include(messages.errors.emptyEmail);
            });

         cy.get('input[name="password"]')
            .parent()
            .find('.error')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
               cy.log('Texto do erro de senha:', text.trim());
               expect(text.trim()).to.include(messages.errors.emptyPassword);
            });
      });

      it('should show error for invalid email', () => {
         cy.get('input[name="email"]').type('invalidemail');
         cy.get('input[name="password"]').clear();
         cy.get('.button').click();

         cy.wait(500);

         cy.get('input[name="email"]')
            .parent()
            .find('.error')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
               cy.log('Texto do erro de e-mail inválido:', text.trim());
               expect(text.trim()).to.include(messages.errors.invalidEmail);
            });
      });

      it('should not show errors when email and password are valid', () => {
         cy.get('input[name="email"]').type('valid.email@example.com');
         cy.get('input[name="password"]').type('ValidPassword123');
         cy.get('.button').click();

         cy.wait(500);

         cy.get('input[name="email"]')
            .parent()
            .find('.error')
            .should('not.exist');
         cy.get('input[name="password"]')
            .parent()
            .find('.error')
            .should('not.exist');
      });
   });
});
