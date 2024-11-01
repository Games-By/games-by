import { getAllUsers } from '@/Services/client-data/getAllUsers';

export const validateFields = async (formData, setError, locale, t) => {
   const newErrorState = {};

   if (!formData.name) {
      newErrorState.name = t('errors.name.requiredName');
   } else {
      const lettersRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;
      if (!lettersRegex.test(formData.name)) {
         newErrorState.name = t('errors.name.invalidName');
      } else if (formData.name.length < 2) {
         newErrorState.name = t('errors.name.shortName');
      } else if (formData.name.length > 50) {
         newErrorState.name = t('errors.name.longName');
      }
   }

   if (!formData.username) {
      newErrorState.username = t('errors.username.requiredUsername');
   } else {
      const allUsers = await getAllUsers();

      const userExists = allUsers.users.some((user) => user.username === formData.username);

      if (userExists) {
         newErrorState.username = t('errors.username.invalidUserName');
      }
   }

   if (!formData.birth) {
      newErrorState.birth = t('errors.birth.requiredBirth');
   } else {
      const birthRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
      if (!birthRegex.test(formData.birth)) {
         newErrorState.birth = t('errors.birth.birthFormat');
      } else {
         const [day, month, year] = formData.birth.split('/').map(Number);
         const birthDate = new Date(year, month - 1, day);
         if (birthDate > new Date()) {
            newErrorState.birth = t('errors.birth.birthFuture');
         } else {
            const ageDifMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDifMs);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);
            if (age < 13) {
               newErrorState.birth = t('errors.birth.moreThenThirteen');
            }
         }
      }
   }

   if (!formData.email) {
      newErrorState.email = t('errors.email.requiredEmail');
   } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
         newErrorState.email = t('errors.email.invalidEmail');
      }
   }

   if (!formData.confirmEmail) {
      newErrorState.confirmEmail = t('errors.email.requiredConfirmEmail');
   }
   if (formData.confirmEmail !== formData.email) {
      newErrorState.confirmEmail = t('errors.email.differentEmails');
   }

   if (!formData.userID && locale === 'pt-BR') {
      newErrorState.userID = t('errors.id.requiredId');
   } else {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (
         (!cpfRegex.test(formData.userID) && locale === 'pt') ||
         (!validateCPF(formData.userID) && locale === 'pt')
      ) {
         newErrorState.userID = t('errors.id.invalidId');
      }
   }

   if (!formData.password) {
      newErrorState.password = t('errors.password.requiredPassword');
   } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
         newErrorState.password = t('errors.password.invalidPassword');
      }
   }

   if (!formData.confirmPassword) {
      newErrorState.confirmPassword = t('errors.password.requiredConfirmPassword');
   }
   if (formData.confirmPassword !== formData.password) {
      newErrorState.confirmPassword = t('errors.password.differentPasswords');
   }

   if (!formData.gender) {
      newErrorState.gender = t('errors.gender.requiredGender');
   }

   setError((prevState) => ({ ...prevState, ...newErrorState }));

   return Object.keys(newErrorState).length === 0;
};

const validateCPF = (cpf) => {
   cpf = cpf.replace(/[^\d]/g, '');

   if (cpf.length !== 11) {
      return false;
   }

   if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
   }

   let sum = 0;
   for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
   }
   let remainder = 11 - (sum % 11);
   if (remainder === 10 || remainder === 11) {
      remainder = 0;
   }
   if (remainder !== parseInt(cpf.charAt(9))) {
      return false;
   }

   sum = 0;
   for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
   }
   remainder = 11 - (sum % 11);
   if (remainder === 10 || remainder === 11) {
      remainder = 0;
   }
   if (remainder !== parseInt(cpf.charAt(10))) {
      return false;
   }

   return true;
};
