'use client';
import Image from 'next/image';
import { HeaderStyle, Language } from './HeaderStyles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Link } from '../../../navigation';
import ProfileThumb from '../ProfileThumb/ProfileThumb';
import SearchBar from '../SearchBar/SearchBar';
import { IoIosClose } from 'react-icons/io';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';
import SearchMobile from '../SearchMobile';

const Header = ({ isLoggedIn }) => {
   const [translateActive, setTranslateActive] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);
   const [isSearchOpen, setIsSearchOpen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      setWindowWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <HeaderStyle>
         <Link href={`/`}>
            <Image
               src={'/assets/logo.png'}
               quality={100}
               width={160}
               height={50}
               alt='games By Logo'
               className='logo'
               priority
            />
         </Link>
         {windowWidth > 660 && <SearchBar isLoggedIn={isLoggedIn} />}
         {isSearchOpen && windowWidth < 660 && <SearchMobile onclick={() => setIsSearchOpen(false)} />}
         {windowWidth < 660 && (
            <div className='icon-box' onClick={() => setIsSearchOpen(true)}>
               {!isSearchOpen && (
                  <MagnifyingGlassIcon className={'icon-box'} />
               )}
            </div>
         )}
         <ProfileThumb isLoggedIn={isLoggedIn} />
         {windowWidth > 850 && (
            <Language
               onMouseEnter={() => setTranslateActive(true)}
               onMouseLeave={() => setTranslateActive(false)}
            >
               <Image
                  src={'/assets/icons/translate.svg'}
                  alt='translate icon'
                  width={25}
                  height={25}
                  quality={100}
                  className='translate-icon'
               />
               {translateActive && <LanguageSwitcher />}
            </Language>
         )}
      </HeaderStyle>
   );
};

export default Header;
