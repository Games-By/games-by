'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, Link } from '../../../../navigation';
import axios from 'axios';
import {
   Access,
   Inputs,
   LoginBox,
   LoginPageStyles,
   Remenber,
} from './LoginPageStyles';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import AdvertisingSpace from '@/components/AdvertisingSpace/AdvertisingSpace';
import { getWishlist } from '@/Services/client-data/getWishlist';
import Logo from '@/components/Logo';
import { validateEmail, validatePassword } from '@/utils/validateLoginFields';
import { handleLoginError } from '@/utils/loginErrors';
import { FaCheck } from 'react-icons/fa';
require('dotenv').config();

const LoginPage = () => {
   const router = useRouter();
   const [loginData, setLoginData] = useState({ email: '', password: '' });
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [loading, setLoading] = useState(false);
   const [keepLoggedIn, setKeepLoggedIn] = useState(false);

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         router.replace('/');
      }
   }, []);

   const handleChange = (e) => {
      setEmailError('');
      setPasswordError('');
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
   };

   const getUser = async (email) => {
      try {
         const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
            { params: { email: email.toLowerCase() } }
         );
         const imageName = response.data.user.image;
         if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
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

   const handleLogin = async () => {
      const lowercaseEmail = loginData.email.toLowerCase();
      const password = loginData.password;

      const emailValidationError = validateEmail(lowercaseEmail);
      const passwordValidationError = validatePassword(password);

      if (emailValidationError || passwordValidationError) {
         setEmailError(emailValidationError);
         setPasswordError(passwordValidationError);
         return;
      }

      const dataToSend = { email: lowercaseEmail, password: password };
      try {
         setLoading(true);
         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
            dataToSend
         );
         const expirationTime = keepLoggedIn
            ? 30 * 24 * 60 * 60 * 1000
            : 24 * 60 * 60 * 1000;
         const expirationDate = new Date(new Date().getTime() + expirationTime);
         localStorage.setItem('tokenExpiration', expirationDate);
         localStorage.setItem('authToken', response.data.token);
         localStorage.setItem('userEmail', lowercaseEmail);
         await getUser(loginData.email);
         router.replace('/');
      } catch (error) {
         handleLoginError(error, loginData, setEmailError, setPasswordError);
      } finally {
         setLoading(false);
      }
   };

   const handleCheckboxChange = () => {
      setKeepLoggedIn((prev) => !prev);
   };

   return (
      <>
         <title>Login | Games By</title>
         <LoginPageStyles>
            <AdvertisingSpace />
            <LoginBox>
               <Logo className={'logo'} />
               <Inputs>
                  <Input
                     type='text'
                     placeholder='Enter your email'
                     value={loginData.email}
                     name='email'
                     onChange={handleChange}
                     label={'E-mail'}
                     required={true}
                     error={emailError}
                     className={'input'}
                  />
                  <Input
                     type='password'
                     placeholder='Type your password'
                     value={loginData.password}
                     name='password'
                     onChange={handleChange}
                     label={'Password'}
                     required={true}
                     error={passwordError}
                     className={'input'}
                  />
                  <Remenber>
                     {keepLoggedIn && <FaCheck className='check'/>}
                     <input
                        type='checkbox'
                        className='checkbox'
                        checked={keepLoggedIn}
                        onChange={handleCheckboxChange}
                     />
                     <span className='text' style={{color: keepLoggedIn && 'rgba(var(--primary), .9)'}}>Remember me</span>
                  </Remenber>
               </Inputs>
               <Access>
                  <span className='forgot-passaword'>Forgot the password?</span>
                  <Button
                     title={'Login'}
                     textTransform={`capitalize`}
                     onClick={handleLogin}
                     loading={loading}
                  />
                  <span className='or'>or</span>
                  <Link href={'/register'} className='register'>
                     Register me
                  </Link>
               </Access>
            </LoginBox>
         </LoginPageStyles>
      </>
   );
};

export default LoginPage;
