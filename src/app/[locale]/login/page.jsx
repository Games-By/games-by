'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { Link, useRouter } from '../../../../navigation';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
   const router = useRouter()
   const [loginData, setLoginData] = useState({
      email: '',
      password: '',
   });
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         router.replace('/');
      }
   }, []);

   const handleChange = (e) => {
      setLoginData({
         ...loginData,
         [e.target.name]: e.target.value,
      });
   };
   const handleLogin = async () => {
      try {
         setLoading(true);
         const response = await axios.post('http://localhost:3001/auth/login',
            loginData,
         );
         localStorage.setItem('authToken', response.data.token);
         localStorage.setItem('userEmail', loginData.email);
         localStorage.setItem('user', loginData);
         router.replace('/');
      } catch (error) {
         setLoading(false);
         setError(error.response.data.message || 'Error when logging in');
      }
   };
   return (
      <>
         <h1>Login</h1>
         <div>
            <input
               type='text'
               placeholder='email'
               value={loginData.email}
               name='email'
               onChange={handleChange}
            />
            <input
               type='password'
               placeholder='Password'
               value={loginData.password}
               name='password'
               onChange={handleChange}
            />
            <button onClick={handleLogin} disabled={loading}>
               {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
         </div>
         <Link href={'/register'}>Register</Link>
      </>
   );
}
