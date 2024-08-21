export const handleLoginError = (
   error,
   loginData,
   setEmailError,
   setPasswordError
) => {
   if (error.response && error.response.data && error.response.data.message) {
      const { message } = error.response.data;

      if (loginData.email === '' || message.toLowerCase().includes('e-mail')) {
         setEmailError('The E-mail field is required!');
      } else if (message.includes('User not found!')) {
         setEmailError('This email address is not registered');
      } else {
         setEmailError('An unexpected error occurred with the email.');
      }

      if (
         loginData.password === '' ||
         message.toLowerCase().includes('password')
      ) {
         if (message.includes('not filled')) {
            setPasswordError('The Password field is required!');
         } else if (message.includes('is invalid!')) {
            setEmailError('The E-mail or Password field is incorrect!');
            setPasswordError('The E-mail or Password is incorrect!');
         } else {
            setPasswordError('An unexpected error occurred with the password.');
         }
      }
   } else {
      console.error('Error when logging in:', error);
   }
};
