'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';
import { getWishlist } from '@/Services/client-data/getWishlist';
import Banners from '@/components/Banner';
import Releases from '@/components/Releases';
import { debounce } from '@/utils/debounce';
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
   const fetchWishlist = async () => {
      try {
         const wishList = await getWishlist();
         localStorage.setItem('wishlist', JSON.stringify(wishList));
      } catch (error) {
         console.error('Error fetching wishlist:', error);
      }
   };

   const debouncedFetchWishlist = debounce(fetchWishlist, 800);

   const initialize = async () => {
      const authToken = localStorage.getItem('authToken');
      if (authToken && checkTokenExpiration()) {
         setIsLoggedIn(true);
         debouncedFetchWishlist();
      }
   };
   useEffect(() => {
      initialize();
   }, []);

   return (
      <>
         {isLoggedIn ? (
            <div>
               <p>Usuário logado!</p>
            </div>
         ) : (
            <div>
               <p>Usuário não logado!</p>
            </div>
         )}
         <title>Home | Games By</title>
         <Header isLoggedIn={isLoggedIn} />
         <Banners isLoggedIn={isLoggedIn} />
         {/* <Releases /> */}
      </>
   );
};

export default Index;
