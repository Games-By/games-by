'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';

const ProfilePage = () => {
   const [user, setUser] = useState({});

   useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
         setUser(storedUser);
      }
   }, []);

   return (
      <>
         <title>
            {user ? `Profile | ${user.name ? user.name : 'Loading...'}` : 'Profile | Games By'}
         </title>
         <Header />
         <Profile />
         <div>{user ? <p>User data: {JSON.stringify(user)}</p> : <p>Loading user data...</p>}</div>
      </>
   );
};

export default ProfilePage;
