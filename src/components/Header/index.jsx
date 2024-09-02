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
import useScrollPosition from '@/hooks/useScrollPosition';
import { AnimatePresence } from 'framer-motion';
import Arrows from '@/components/Arrows';
import { Turn as Hamburger } from 'hamburger-react';
import CartIcon from '../CartIcon';

const Header = () => {
   const isLoggedIn = localStorage.getItem('authToken');
   const { width } = useWindowSize();
   const scrollPosition = useScrollPosition();
   const [translateActive, setTranslateActive] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [menuVisible, setMenuVisible] = useState(width > 768);
   const { cartCount, fetchCart } = useCartContext();

   useEffect(() => {
      if (isLoggedIn) {
         fetchCart();
      }
   }, [isLoggedIn, fetchCart]);

   return (
      <HeaderStyle blur={scrollPosition > 80}>
         <MainNavigation>
            {width > 768 && <Arrows />}
            {width > 768 && <SearchBar />}
            {width <= 768 && (
               <Hamburger
                  duration={0.4}
                  rounded
                  direction='right'
                  color='rgba(var(--light))'
                  onToggle={(toggled) => {
                     if (toggled) {
                        // open a menu
                     } else {
                        // close a menu
                     }
                  }}
               />
            )}
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
