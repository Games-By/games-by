'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { Link, useRouter } from '../../../../navigation';
import { useState } from 'react';
import axios from 'axios';
import { Access, LoginBox, LoginPageStyles } from './LoginPageStyles';
import Image from 'next/image';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import AdvertisingSpace from '@/components/AdvertisingSpace/AdvertisingSpace';
require('dotenv').config();

const LoginPage = () => {
   const router = useRouter();
   const [loginData, setLoginData] = useState({
      email: '',
      password: '',
   });
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
      setLoginData({
         ...loginData,
         [e.target.name]: e.target.value,
      });
   };
   const getUser = async (email) => {
      try {
         const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
            {
               params: { email: email },
            }
         );
         if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
         }
      } catch (error) {
         console.error('Error getting profile:', error);
      }
   };
   const handleLogin = async () => {
      try {
         setLoading(true);
         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
            loginData
         );
         const expirationTime = keepLoggedIn
            ? 30 * 24 * 60 * 60 * 1000
            : 24 * 60 * 60 * 1000;
         const expirationDate = new Date(new Date().getTime() + expirationTime);
         localStorage.setItem('tokenExpiration', expirationDate);
         localStorage.setItem('authToken', response.data.token);
         localStorage.setItem('userEmail', loginData.email);
         await getUser(loginData.email);
         router.replace('/');
      } catch (error) {
         if (
            error.response &&
            error.response.data &&
            error.response.data.message
         ) {
            const { message } = error.response.data;

            if (message.includes('E-mail') || loginData.email === '') {
               setEmailError('The E-mail field is required!');
            } else if (message.includes('User not found!')) {
               setEmailError('This email address is not registered');
            }

            if (
               message.includes('password' && 'not filled') ||
               loginData.password === ''
            ) {
               setPasswordError('The Password field is required!');
            } else if (message.includes('password' && 'is invalid!')) {
               setPasswordError('The password is incorrect!');
            }
         } else {
            console.error('Error when logging in', error);
         }
      } finally {
         setLoading(false);
      }
   };
   const handleCheckboxChange = () => {
      setKeepLoggedIn((prev) => !prev);
   };
   return (
      <>
         <LoginPageStyles>
            <AdvertisingSpace />
            <LoginBox>
               <Image
                  src={`/assets/logo.png`}
                  width={200}
                  height={50}
                  alt='Logo of Games By'
                  quality={100}
                  className='logo'
               />

               <div className='input-container'>
                  <Input
                     type='text'
                     placeholder='Enter your email'
                     value={loginData.email}
                     name='email'
                     onChange={handleChange}
                     label={'E-mail'}
                     required={true}
                     error={emailError}
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
                  />
                  <span className='keep'>
                     <input
                        type='checkbox'
                        checked={keepLoggedIn}
                        onChange={handleCheckboxChange}
                     />
                     keep me logged
                  </span>
               </div>

               <Access>
                  <span className='forgot-passaword'>Forgot the password?</span>
                  <Button
                     title={'Login'}
                     currentColor={`rgba(var(--purple-2))`}
                     hoverColor={`rgba(var(--cyan))`}
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
