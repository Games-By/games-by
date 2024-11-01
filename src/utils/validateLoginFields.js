export const validateEmail = (email, t) => {
   if (!email) {
      return t('errors.emptyEmail');
   }
   if (!/\S+@\S+\.\S+/.test(email)) {
      return t('errors.invalidEmail');
   }
   return '';
};

export const validatePassword = (password, t) => {
   if (!password) {
      return t('errors.emptyPassword');
   }
   return '';
};
