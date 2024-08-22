export const handleLoginError = (
   error,
   loginData,
   setEmailError,
   setPasswordError,
   t
) => {
   if (error.response && error.response.data && error.response.data.message) {
      const { message } = error.response.data;

      if (loginData.email === '' || message.toLowerCase().includes('e-mail')) {
         setEmailError(t('errors.emptyEmail'));
      } else if (message.includes('User not found!')) {
         setEmailError(t('errors.userNotFound'));
      } else {
         setEmailError(t('errors.genericEmail'));
      }

      if (
         loginData.password === '' ||
         message.toLowerCase().includes('password')
      ) {
         if (message.includes('not filled')) {
            setPasswordError(t('errors.emptyPassword'));
         } else if (message.includes('is invalid!')) {
            setEmailError(t('errors.genericEmailandPassword'));
            setPasswordError(t('errors.genericEmailandPassword'));
         } else {
            setPasswordError(t('errors.genericPassword'));
         }
      }
   } else {
      console.error('Error when logging in:', error);
   }
};
