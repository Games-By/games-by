'use client';
import Image from 'next/image';
import { HeaderStyle, Language, MenuBar } from './HeaderStyles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Link } from '../../../navigation';
import ProfileThumb from '../ProfileThumb/ProfileThumb';
import SearchBar from '../SearchBar/SearchBar';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';
import SearchMobile from '../SearchMobile';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';

const Header = ({ isLoggedIn }) => {
   const [translateActive, setTranslateActive] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [sideBarVisible, setSideBarVisible] = useState(
      windowWidth > 850 ? true : false
   );

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
               src={
                  windowWidth > 850
                     ? '/assets/logo.png'
                     : '/assets/logo reduced.svg'
               }
               quality={100}
               width={160}
               height={50}
               alt='games By Logo'
               className='logo'
               priority
            />
         </Link>
         {windowWidth > 660 && <SearchBar isLoggedIn={isLoggedIn} />}
         {isSearchOpen && windowWidth < 660 && (
            <SearchMobile onclick={() => setIsSearchOpen(false)} />
         )}
         {windowWidth < 660 && (
            <div className='icon-box' onClick={() => setIsSearchOpen(true)}>
               <MagnifyingGlassIcon className={'icon-box'} />
            </div>
         )}
         <ProfileThumb
            isLoggedIn={isLoggedIn}
            sideBarVisible={sideBarVisible}
            windowWidth={windowWidth}
         />
         {windowWidth < 850 && (
            <MenuBar onClick={() => setSideBarVisible(!sideBarVisible)}>
               {!sideBarVisible ? <CgMenuRight /> : <CgMenuRightAlt />}
            </MenuBar>
         )}
         <Language
            onMouseEnter={() => setTranslateActive(true)}
            onMouseLeave={() => setTranslateActive(false)}
            onClick={() => {
               windowWidth > 850 && setTranslateActive(!translateActive);
            }}
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
      </HeaderStyle>
   );
};

export default Header;
