'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Banners from '@/components/Banner';
import Releases from '@/components/Releases';
import { ToastContainer } from 'react-toastify';
import Discover from '@/modules/Discover';
import HorizontalImages from '@/modules/HorizontalImages';
import useWindowSize from '@/hooks/useWindowSize';
import Offers from '@/modules/Offers';
import Columns from '@/modules/Columns';
require('dotenv').config();

const Index = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const { width } = useWindowSize();

   const checkTokenExpiration = () => {
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (!tokenExpiration) {
         return false;
      }
      const expirationDate = new Date(tokenExpiration);
      if (new Date() > expirationDate) {
         localStorage.removeItem('wishlist');
         localStorage.removeItem('user');
         localStorage.removeItem('cart');
         localStorage.removeItem('userEmail');
         localStorage.removeItem('authToken');
         localStorage.removeItem('imageProfile');
         localStorage.removeItem('tokenExpiration');
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
         <Header />
         <main style={{ paddingTop: width > 768 ? '8rem' : '6rem' }}>
            <Banners isLoggedIn={isLoggedIn} />
            <Releases />
            <Discover />
            <HorizontalImages />
            <Offers />
            <Columns />
         </main>
         <ToastContainer />
      </>
   );
};

export default Index;
