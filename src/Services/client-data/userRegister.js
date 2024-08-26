import axios from 'axios';
import { ImageRegister } from './imageRegister';
import { validateFields } from '@/utils/validateFields';

export const userRegister = async (e, formData, imageData, error, locale, t) => {
   e.preventDefault();
   if (!validateFields(formData, error, locale, t)) return false;
   try {
      const response = await axios.post(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register/user`,
         formData,
         { headers: { 'Content-Type': 'application/json' } }
      );
      if (imageData) {
         await ImageRegister(imageData);
      }
      return response;
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
