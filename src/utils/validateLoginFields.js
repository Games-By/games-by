export const validateEmail = (email) => {
   if (!email) {
      return 'The E-mail field is required!';
   }
   if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address!';
   }
   return '';
};

export const validatePassword = (password) => {
   if (!password) {
      return 'The Password field is required!';
   }
   return '';
};
