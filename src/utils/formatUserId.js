export const formatUserID = (data) => {
   let input = data.userID.replace(/\D/g, '');

   if (input.length > 11) input = input.slice(0, 11);

   let formattedInput = '';

   if (input.length >= 3) {
      formattedInput += input.slice(0, 3);

      if (input.length >= 4) {
         formattedInput += '.' + input.slice(3, 6);

         if (input.length > 6) {
            formattedInput += '.' + input.slice(6, 9);
         }
      }

      if (input.length > 9) {
         formattedInput += '-' + input.slice(9, 11);
      }
   } else {
      formattedInput = input;
   }

   return formattedInput;
};
