'use client';
import {
   HeaderStyle,
   Language,
   MainNavigation,
   ProfileButtons,
} from './styles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useState } from 'react';
import ProfileThumb from '../ProfileThumb';
import SearchBar from '../SearchBar';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';
import SearchMobile from '../SearchMobile';
import { VscGlobe } from 'react-icons/vsc';
import Dropdown from '../Dropdown';
import { useCartContext } from '../../contexts/CartContext';
import useWindowSize from '@/hooks/useWindowSize';
import { AnimatePresence } from 'framer-motion';
import Arrows from '@/components/Arrows';
import { Turn as Hamburger } from 'hamburger-react';
import CartIcon from '../CartIcon';
import SideBar from '../SideBar';

const Header = () => {
   const isLoggedIn = localStorage.getItem('authToken');
   const { width } = useWindowSize();
   const [translateActive, setTranslateActive] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [menuVisible, setMenuVisible] = useState(width > 768);
   const { cartCount, fetchCart } = useCartContext();
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   useEffect(() => {
      if (isLoggedIn) {
         fetchCart();
      }
   }, [isLoggedIn, fetchCart]);

   return (
      <HeaderStyle>
         <SideBar isOpen={isSidebarOpen} />
         {isSidebarOpen && (
            <div
               className='background'
               onClick={() => setIsSidebarOpen(false)}
            ></div>
         )}
         <MainNavigation>
            {width <= 1024 && (
               <div
                  style={{
                     zIndex: 22,
                     transform: isSidebarOpen
                        ? 'translateX(27.5rem)'
                        : 'translateX(0)',
                     transition: '0.4s',
                  }}
               >
                  <Hamburger
                     duration={0.4}
                     rounded
                     direction='right'
                     color={
                        isSidebarOpen
                           ? 'rgba(var(--primary))'
                           : 'rgba(var(--light))'
                     }
                     onToggle={(toggled) => {
                        if (toggled) {
                           setIsSidebarOpen(true);
                        } else {
                           setIsSidebarOpen(false);
                        }
                     }}
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
         <ProfileButtons>
            <CartIcon
               cartCount={cartCount}
               tokenValid={isLoggedIn}
               windowWidth={width}
            />
            <ProfileThumb
               isLoggedIn={isLoggedIn}
               windowWidth={width}
               isOpen={menuVisible}
               tokenValid={isLoggedIn}
               onClick={() => setMenuVisible(!menuVisible)}
            />
            {(width > 768 ||
               translateActive ||
               (width <= 768 && !isLoggedIn)) && (
               <>
                  {translateActive && (
                     <div
                        className='invisible-bar'
                        onMouseEnter={() => setTranslateActive(true)}
                        onMouseLeave={() => setTranslateActive(false)}
                     ></div>
                  )}
                  <Language
                     onMouseEnter={() => setTranslateActive(true)}
                     onMouseLeave={() => setTranslateActive(false)}
                     onClick={() => {
                        width > 768 && setTranslateActive(!translateActive);
                     }}
                     style={{ right: isLoggedIn && width <= 768 && '4.5rem' }}
                  >
                     <VscGlobe className='globe' />
                     <AnimatePresence>
                        {translateActive && <LanguageSwitcher />}
                     </AnimatePresence>
                  </Language>
               </>
            )}
            <AnimatePresence>
               {menuVisible && (
                  <Dropdown
                     windowWidth={width}
                     isVisible={menuVisible}
                     onMouseLeave={() => setMenuVisible(false)}
                  />
               )}
            </AnimatePresence>
         </ProfileButtons>
      </HeaderStyle>
   );
};

export default Header;
