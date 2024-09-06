import React, { memo, useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import { GameGenres, SideBarStyles } from './styles';
import Logo from '../Logo';
import { Link } from '../../../navigation';
import Navigation from '../Navigation';
import { useLocale } from 'next-intl';
import data from '@/data/menu.json';
import { FaPlusCircle } from 'react-icons/fa';

const { genresData } = data;

const SideBar = ({ isOpen, setIsOpen }) => {
   const [user, setUser] = useState({});
   const { width } = useWindowSize();
   const locale = useLocale();

   useEffect(() => {
      const localUser = JSON.parse(localStorage.getItem('user'));
      if (localUser) {
         setUser(localUser);
      }
   }, []);

   return (
      <>
         <SideBarStyles isOpen={isOpen}>
            <Link href={'/'} className='logo'>
               <Logo logoWidth={width > 1440 ? 200 : 160} />
            </Link>
            <Navigation />
            <GameGenres>
               <h2 className='title'>Buscar games por gênero</h2>
               <ul className='genres'>
                  {genresData[locale].map((genre, index) => (
                     <li key={index}>
                        <Link href={'/'}>{genre}</Link>
                     </li>
                  ))}
               </ul>
            </GameGenres>
            {user && user.admin && (
               <Link
                  href='https://www.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='dashboard-button'
               >
                  <FaPlusCircle />
                  <span>ADMIN GAMES</span>
               </Link>
            )}
         </SideBarStyles>
      </>
   );
};

export default memo(SideBar);
