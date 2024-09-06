import React, { memo } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import { GameGenres, SideBarStyles } from './styles';
import Logo from '../Logo';
import { Link } from '../../../navigation';
import Navigation from '../Navigation';
import { useLocale } from 'next-intl';
import data from '@/data/menu.json';

const { genresData } = data;

const SideBar = ({ isOpen, setIsOpen }) => {
   const { width } = useWindowSize();
   const locale = useLocale();
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
         </SideBarStyles>
      </>
   );
};

export default memo(SideBar);
