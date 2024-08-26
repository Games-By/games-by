'use client';
import Image from 'next/image';
import { Cart, HeaderStyle, Language, MenuBar } from './styles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Link, useRouter } from '../../../navigation';
import ProfileThumb from '../ProfileThumb';
import SearchBar from '../SearchBar';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';
import SearchMobile from '../SearchMobile';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import { IoCartOutline } from 'react-icons/io5';
import { VscGlobe } from 'react-icons/vsc';
import Dropdown from '../Dropdown';
import { useCartContext } from '../../contexts/CartContext';
import useWindowSize from '@/hooks/useWindowSize';
import useScrollPosition from '@/hooks/useScrollPosition';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(null);
   const route = useRouter();
   const { width } = useWindowSize();
   const scrollPosition = useScrollPosition();
   const [translateActive, setTranslateActive] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [menuVisible, setMenuVisible] = useState(width >= 768);
   const { cartCount, fetchCart } = useCartContext();

   useEffect(() => {
      const logged = localStorage.getItem('authToken');
      if (logged) {
         setIsLoggedIn(logged);
      }
      if (isLoggedIn) {
         fetchCart();
      }
   }, [isLoggedIn, fetchCart]);

   return (
      <HeaderStyle blur={scrollPosition > 80}>
         <Link href={`/`}>
            <Image
               src={
                  width >= 768 ? '/assets/logo.png' : '/assets/logo reduced.svg'
               }
               quality={100}
               width={160}
               height={50}
               alt='games By Logo'
               className='logo'
               priority
            />
         </Link>
         {width >= 768 && <SearchBar />}
         <AnimatePresence>
            {isSearchOpen && width < 768 && (
               <SearchMobile
                  onClick={() => setIsSearchOpen(false)}
                  isSearchOpen={isSearchOpen}
               />
            )}
         </AnimatePresence>
         {width < 768 && (
            <div className='icon-box' onClick={() => setIsSearchOpen(true)}>
               <MagnifyingGlassIcon />
            </div>
         )}
         {width >= 768 || !isLoggedIn ? (
            <ProfileThumb
               isLoggedIn={isLoggedIn}
               windowWidth={width}
               handle={setMenuVisible}
            />
         ) : null}
         <Cart
            style={{ right: isLoggedIn && width <= 768 && '3.5rem' }}
            onClick={() => {
               route.push('/cart');
            }}
         >
            <span className='number'>{cartCount || 0}</span>
            <IoCartOutline className='cart' />
         </Cart>
         {width < 768 && isLoggedIn && (
            <MenuBar onClick={() => setMenuVisible(!menuVisible)}>
               {!menuVisible ? <CgMenuRight /> : <CgMenuRightAlt />}
            </MenuBar>
         )}
         {(width >= 768 || translateActive || (width < 768 && !isLoggedIn)) && (
            <>
               {translateActive && (
                  <div
                     className='invisible-bar-2'
                     onMouseEnter={() => setTranslateActive(true)}
                     onMouseLeave={() => setTranslateActive(false)}
                  ></div>
               )}
               <Language
                  onMouseEnter={() => setTranslateActive(true)}
                  onMouseLeave={() => setTranslateActive(false)}
                  onClick={() => {
                     width >= 768 && setTranslateActive(!translateActive);
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
            {(menuVisible || width < 768) && (
               <>
                  {menuVisible && (
                     <div
                        className='invisible-bar-1'
                        onMouseEnter={() => setMenuVisible(true)}
                        onMouseLeave={() => setMenuVisible(false)}
                     ></div>
                  )}
                  <Dropdown
                     windowWidth={width}
                     isVisible={menuVisible}
                     onMouseEnter={() => setMenuVisible(true)}
                     onMouseLeave={() => setMenuVisible(false)}
                     onClick={() => setMenuVisible(!menuVisible)}
                  />
               </>
            )}
         </AnimatePresence>
      </HeaderStyle>
   );
};

export default Header;
