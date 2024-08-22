import { getAllUsers } from '@/Services/client-data/getAllUsers';

export const validateFields = async (formData, setError, locale) => {
   const newErrorState = {};

   if (!formData.name) {
      newErrorState.name = 'The field "Name" is required';
   } else {
      const lettersRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;
      if (!lettersRegex.test(formData.name)) {
         newErrorState.name = 'Name must contain only letters and spaces';
      } else if (formData.name.length < 2) {
         newErrorState.name = 'Name is too short';
      } else if (formData.name.length > 50) {
         newErrorState.name = 'Name is too long';
      }
   }

   if (!formData.username) {
      newErrorState.username = 'The field "Username" is required';
   } else {
      const allUsers = await getAllUsers();

      const userExists = allUsers.users.some(
         (user) => user.username === formData.username
      );

      if (userExists) {
         newErrorState.username = 'The username is already taken.';
      } else {
         console.log('Username is available');
      }
   }

   if (!formData.birth) {
      newErrorState.birth = 'The field "Birth" is required';
   } else {
      const birthRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
      if (!birthRegex.test(formData.birth)) {
         newErrorState.birth = 'Birth date must be in DD/MM/YYYY format';
      } else {
         const [day, month, year] = formData.birth.split('/').map(Number);
         const birthDate = new Date(year, month - 1, day);
         if (birthDate > new Date()) {
            newErrorState.birth = 'Birth date cannot be in the future';
         } else {
            const ageDifMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDifMs);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);
            if (age < 13) {
               newErrorState.birth = 'You must be at least 13 years old';
            }
         }
      }
   }

   if (!formData.email) {
      newErrorState.email = 'The field "E-mail" is required';
   } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
         newErrorState.email = 'E-mail is not valid';
      }
   }

   if (!formData.confirmEmail) {
      newErrorState.confirmEmail = 'The field "Confirm Email" is required';
   }
   if (formData.confirmEmail !== formData.email) {
      newErrorState.confirmEmail = 'The E-mail addresses are different';
   }

   if (!formData.userID && locale === 'pt-BR') {
      newErrorState.userID = 'The field "CPF" is required';
   } else {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (
         (!cpfRegex.test(formData.userID) && locale === 'pt') ||
         (!validateCPF(formData.userID) && locale === 'pt')
      ) {
         newErrorState.userID = 'User ID must be a valid CPF';
      }
   }

   if (!formData.password) {
      newErrorState.password = 'The field "Password" is required';
   } else {
      const passwordRegex =
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
         newErrorState.password =
            'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
      }
   }

   if (!formData.confirmPassword) {
      newErrorState.confirmPassword =
         'The field "Confirm Password" is required';
   }
   if (formData.confirmPassword !== formData.password) {
      newErrorState.confirmPassword = 'The passwords are different';
   }

   if (!formData.gender) {
      newErrorState.gender = 'Gender is required';
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
