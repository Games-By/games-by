'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, Link } from '../../../../navigation';
import { Access, Inputs, LoginBox, LoginPageStyles } from './LoginPageStyles';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import AdvertisingSpace from '@/components/AdvertisingSpace/AdvertisingSpace';
import Logo from '@/components/Logo';
import Checkbox from '@/components/Checkbox';
import { useTranslations } from 'next-intl';
import { GrHomeRounded } from 'react-icons/gr';
import { useAuth } from '@/contexts/AuthContext';
import { handleLogin } from '@/Services/client-data/login';

const LoginPage = () => {
   const { setIsLoggedIn, isLoggedIn } = useAuth();
   const router = useRouter();
   const [loginData, setLoginData] = useState({ email: '', password: '' });
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [loading, setLoading] = useState(false);
   const [keepLoggedIn, setKeepLoggedIn] = useState(false);
   const t = useTranslations('LoginPage');
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      if (isLoggedIn) {
         router.replace('/');
      }
   }, []);

   const handleChange = (e) => {
      setEmailError('');
      setPasswordError('');
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
   };

   const handleCheckboxChange = () => {
      setKeepLoggedIn((prev) => !prev);
   };

   const handleLoginSubmit = () => {
      handleLogin(
         loginData,
         setLoading,
         setIsLoggedIn,
         router,
         t,
         setEmailError,
         setPasswordError,
         keepLoggedIn
      );
   };

   useEffect(() => {
      setIsClient(true);
   });

   return (
      <>
         <title>Login | Games By</title>
         {isClient && (
            <LoginPageStyles>
               <Link href={'/'} className='back'>
                  <GrHomeRounded />
                  Back to home
               </Link>
               <div className='ads'>
                  <AdvertisingSpace />
               </div>
               <LoginBox>
                  <Logo className={'logo'} />
                  <Inputs>
                     <Input
                        type='text'
                        placeholder={t('emailPlaceholder')}
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
                        placeholder={t('passwordPlaceholder')}
                        value={loginData.password}
                        name='password'
                        onChange={handleChange}
                        label={t('password')}
                        required={true}
                        error={passwordError}
                        className={'input'}
                     />
                     <Checkbox
                        checked={keepLoggedIn}
                        onChange={handleCheckboxChange}
                        label={t('remenber')}
                     />
                  </Inputs>
                  <Access>
                     <span className='forgot-passaword'>{t('forgot')}</span>
                     <Button
                        title={'Login'}
                        textTransform={`capitalize`}
                        onClick={handleLoginSubmit}
                        loading={loading}
                        className={'button'}
                        loadingSize={9.5}
                     />
                     <span className='or'>{t('or')}</span>
                     <Link href={'/register'} className='register'>
                        {t('register')}
                     </Link>
                  </Access>
               </LoginBox>
            </LoginPageStyles>
         )}
      </>
   );
};

export default LoginPage;
