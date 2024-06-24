import axios from 'axios';
import { ImageRegister } from './imageRegister';
import { validateFields } from '@/utils/validateFields';

export const userRegister = async (e, formData, imageData, error, locale) => {
   e.preventDefault();
   if (!validateFields(formData, error, locale)) return false;
   try {
      const response = await axios.post(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register/user`,
         formData,
         { headers: { 'Content-Type': 'application/json' } }
      );
      if (imageData) {
         await ImageRegister(imageData);
      }
   } catch (error) {
      if (
         error.response &&
         error.response.data &&
         error.response.data.message
      ) {
         console.error('Error:', error.response.data.message);
      }
   }
};
