'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';
import Banners from '@/components/Banner';
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

   useEffect(() => {
      const initialize = async () => {
         const authToken = localStorage.getItem('authToken');
         if (authToken && checkTokenExpiration()) {
            setIsLoggedIn(true);
         }
      };
      initialize();
   }, []);

   return (
      <>
         <Header isLoggedIn={isLoggedIn} />
         <Banners isLoggedIn={isLoggedIn} />
         {isLoggedIn ? (
            <div>
               <p>Usuário logado!</p>
            </div>
         ) : (
            <div>
               <p>Você precisa estar logado para acessar esta página.</p>
            </div>
         )}
      </>
   );
};

export default Index;
