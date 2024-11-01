import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [updateProfile, setUpdateProfile] = useState(false);

   const clearStorage = () => {
      const storageItems = [
         'wishlist',
         'user',
         'cart',
         'imageProfile',
         'localCart'
      ];
      storageItems.forEach((item) => localStorage.removeItem(item));
   };

   const initializeAuth = () => {
      const authToken = Cookies.get('authToken');
      if (authToken) {
         setIsLoggedIn(true);
      }
      if (!authToken) {
         setIsLoggedIn(false);
         clearStorage();
      }
   };

   useEffect(() => {
      initializeAuth();
   }, []);

   return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, updateProfile }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
