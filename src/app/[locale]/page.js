'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header/Header';
import GlobalStyle from '@/Styles/globals';
import { useEffect, useState } from 'react';
import { useRouter } from '../../../navigation';
require('dotenv').config()

// export const metadata = {
//    title: "Games By | Home",
//    description: "Generated by create next app",
// };

export default function Index() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const getUser = async () => {
      const authToken = localStorage.getItem('authToken');
      const userEmail = localStorage.getItem('userEmail');
      if (!authToken || !isLoggedIn) {
         return;
      }
      try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
            params: { email: userEmail },
         });
         if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
         }
      } catch (error) {
         console.error('Error getting profile:', error);
      }
   };

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      const user = localStorage.getItem('user');
      if (authToken) {
         setIsLoggedIn(true);
      }
      if (!user) {
         getUser();
      }
   }, []);

   return (
      <div>
         <GlobalStyle />
         <Header isLoggedIn={isLoggedIn} />
         {isLoggedIn ? (
            <div>
               <p>Usuário logado!</p>
            </div>
         ) : (
            <div>
               <p>Você precisa estar logado para acessar esta página.</p>
            </div>
         )}
      </div>
   );
}
