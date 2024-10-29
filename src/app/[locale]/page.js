'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Banners from '@/components/Banner';
import Releases from '@/components/Releases';
import { ToastContainer } from 'react-toastify';
import Discover from '@/modules/Discover';
import HorizontalImages from '@/modules/HorizontalImages';
import Offers from '@/modules/Offers';
import Columns from '@/modules/Columns';
import Footer from '@/modules/Footer';
import SideBar from '@/components/SideBar';
import { Main } from '@/Styles/styles';
import useWindowSize from '@/hooks/useWindowSize';
import dotenv from 'dotenv';
dotenv.config();

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
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <div className='main-content'>
               <Header />
               <Banners isLoggedIn={isLoggedIn} />
               <Releases />
               <Discover />
               <HorizontalImages />
               <Offers />
               <Columns />
            </div>
         </Main>
         <Footer />
         <ToastContainer />
      </>
   );
};

export default Index;
