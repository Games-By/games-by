'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from '../../../navigation.ts';
import Cookies from 'js-cookie';

const Profile = () => {
   const router = useRouter();
   const [userData, setUserData] = useState({});

   const VerifyLogin = async () => {
      const authToken = Cookies.get('authToken');
      if (!authToken) {
         router.replace('/');
      }
   };

   const handleLogout = () => {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
      localStorage.removeItem('imageProfile');
      Cookies.remove('authToken');


      router.replace('/login');
   };

   const getUser = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (Object.values(userData).length === 0) {
         setUserData(user);
      }
   };

   getUser();

   useEffect(() => {
      VerifyLogin();
   }, []);

   return (
      <>
         <h1>{userData.name}</h1>
         <button onClick={handleLogout}>Logout</button>
      </>
   );
};

export default Profile;
