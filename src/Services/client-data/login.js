import axios from 'axios';
import Cookies from 'js-cookie';
import { getWishlist } from '@/Services/client-data/getWishlist';
import { validateEmail, validatePassword } from '@/utils/validateLoginFields';
import { handleLoginError } from '@/utils/loginErrors';
import dotenv from 'dotenv';

dotenv.config();

export const getUser = async (email) => {
   try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
         params: { email: email.toLowerCase() },
      });
      const imageName = response.data.user.image;
      const localUser = {
         _id: response.data.user._id,
         name: response.data.user.name,
         username: response.data.user.username,
         admin: response.data.user.admin,
         image: response.data.user.image,
         email: response.data.user.email,
         birth: response.data.user.birth,
      };
      if (response.status === 200) {
         localStorage.setItem('user', JSON.stringify(localUser));
         const imageProfile = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/download/image`,
            { params: { imageName } }
         );
         const wishlist = await getWishlist();
         localStorage.setItem('imageProfile', JSON.stringify(imageProfile));
         localStorage.setItem('wishlist', JSON.stringify(wishlist));
      }
   } catch (error) {
      console.error('Error getting profile:', error);
   }
};

export const handleLogin = async (
   loginData,
   setLoading,
   setIsLoggedIn,
   router,
   t,
   setEmailError,
   setPasswordError,
   keepLoggedIn
) => {
   const lowercaseEmail = loginData.email.toLowerCase();
   const password = loginData.password;

   const emailValidationError = validateEmail(lowercaseEmail, t);
   const passwordValidationError = validatePassword(password, t);

   if (emailValidationError || passwordValidationError) {
      setEmailError(emailValidationError);
      setPasswordError(passwordValidationError);
      return;
   }

   const dataToSend = { email: lowercaseEmail, password };
   try {
      setLoading(true);
      const response = await axios.post(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
         dataToSend
      );
      const expirationTime = keepLoggedIn ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
      const expirationDate = new Date(new Date().getTime() + expirationTime);

      Cookies.set('authToken', response.data.token, { expires: expirationDate });
      await getUser(lowercaseEmail);
      setIsLoggedIn(true);
      router.replace('/');
   } catch (error) {
      handleLoginError(error, loginData, setEmailError, setPasswordError, t);
   } finally {
      setLoading(false);
   }
};
