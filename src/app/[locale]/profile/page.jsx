'use client'
import GlobalStyle from '@/Styles/globals';
import React from 'react';
import Header from '@/components/Header/Header';
import { useRouter } from '../../../../navigation.ts';

const Profile = () => {
   const router = useRouter()
   const handleLogout = () => {
      localStorage.removeItem('authToken');

      router.replace('/login');
   };

   return (
      <>
         <GlobalStyle />
         <Header />
         <h1>Profile</h1>
         <button onClick={handleLogout}>Logout</button>
      </>
   );
};

export default Profile;
