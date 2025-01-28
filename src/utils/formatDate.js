export const formatdDate = (date, locale) => {

   const options = { timeZone: 'UTC' };

   return new Date(date).toLocaleDateString(locale, options);
};
