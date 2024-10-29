import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const checkTokenExpiration = () => {
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (!tokenExpiration) return false;

      const expirationDate = new Date(tokenExpiration);
      if (new Date() > expirationDate) {
         [
            'wishlist',
            'user',
            'cart',
            'userEmail',
            'authToken',
            'imageProfile',
            'tokenExpiration',
         ].forEach((item) => localStorage.removeItem(item));
         return false;
      }
      return true;
   };

   const initializeAuth = () => {
      const authToken = localStorage.getItem('authToken');
      if (authToken && checkTokenExpiration()) {
         setIsLoggedIn(true);
      }
   };

   useEffect(() => {
      initializeAuth();
   }, []);

   return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
