'use client';
import { HeaderStyle, Language, MainNavigation, ProfileButtons } from './styles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useState, useCallback } from 'react';
import ProfileThumb from '../ProfileThumb';
import SearchBar from '../SearchBar';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';
import SearchMobile from '../SearchMobile';
import useWindowSize from '@/hooks/useWindowSize';
import { AnimatePresence } from 'framer-motion';
import Arrows from '@/components/Arrows';
import { Turn as Hamburger } from 'hamburger-react';
import SideBar from '../SideBar';
import { useAuth } from '@/contexts/AuthContext';
import { useToggleSidebar } from '@/functions/useToggleSidebar';
import UserHeaderControls from '../UserHeaderControls';

const Header = () => {
   const { width } = useWindowSize();
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const { isSidebarOpen, toggleSidebar } = useToggleSidebar();

   return (
      <HeaderStyle>
         {width <= 1024 && (
            <>
               <SideBar isOpen={isSidebarOpen} />
               {isSidebarOpen && <div className='background' onClick={toggleSidebar}></div>}
            </>
         )}
         <MainNavigation>
            {width <= 1024 && (
               <div
                  style={{
                     zIndex: 22,
                     transform: isSidebarOpen ? 'translateX(23rem)' : 'translateX(0)',
                     transition: '0.4s',
                     backgroundColor: isSidebarOpen ? 'rgba(var(--dark))' : 'transparent',
                  }}
                  className='hamburguer-box'
               >
                  <Hamburger
                     duration={0.4}
                     rounded
                     direction='right'
                     color={isSidebarOpen ? 'rgba(var(--primary))' : 'rgba(var(--light))'}
                     onToggle={toggleSidebar}
                     toggled={isSidebarOpen}
                  />
               </div>
            )}
            {width > 1024 && <Arrows />}
            {width > 768 && <SearchBar />}
            {width <= 768 && (
               <div className='icon-box' onClick={() => setIsSearchOpen(true)}>
                  <MagnifyingGlassIcon size={16} />
               </div>
            )}
            <AnimatePresence>
               {isSearchOpen && width <= 768 && (
                  <SearchMobile
                     onClick={() => setIsSearchOpen(false)}
                     isSearchOpen={isSearchOpen}
                  />
               )}
            </AnimatePresence>
         </MainNavigation>
         <UserHeaderControls />
      </HeaderStyle>
   );
};

export default Header;
