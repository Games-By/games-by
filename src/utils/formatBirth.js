export const formatBirth = (data) => {
   let input = data.birth.replace(/\D/g, '');
   if (input.length > 8) input = input.slice(0, 8);

   let formattedInput = '';

   if (input.length >= 2) {
      formattedInput += input.slice(0, 2);
      if (input.length >= 4) {
         formattedInput += '/' + input.slice(2, 4);
         if (input.length > 4) {
            formattedInput += '/' + input.slice(4, 8);
         }
      } else if (input.length > 2) {
         formattedInput += '/' + input.slice(2);
      }
   } else {
      formattedInput += input;
   }

   return formattedInput;
};
