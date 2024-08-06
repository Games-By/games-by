'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';
import Banners from '@/components/Banner';
import Releases from '@/components/Releases';
import { ToastContainer } from 'react-toastify';
require('dotenv').config();

const Index = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const checkTokenExpiration = () => {
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (!tokenExpiration) {
         return false;
      }
      const expirationDate = new Date(tokenExpiration);
      if (new Date() > expirationDate) {
         localStorage.removeItem('authToken');
         localStorage.removeItem('tokenExpiration');
         localStorage.removeItem('userEmail');
         return false;
      }
      return true;
   };

   const initialize = async () => {
      const authToken = localStorage.getItem('authToken');
      if (authToken && checkTokenExpiration()) {
         setIsLoggedIn(true);
      }
   };
   useEffect(() => {
      initialize();
   }, []);

   return (
      <>
         <title>Home | Games By</title>
         <Header isLoggedIn={isLoggedIn} />
         <Banners isLoggedIn={isLoggedIn} />
         <Releases />

         <ToastContainer />
      </>
   );
};

export default Index;
