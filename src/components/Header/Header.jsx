'use client'
import Image from 'next/image';
import { Cart, HeaderStyle, Language, MenuBar } from './HeaderStyles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Link, useRouter } from '../../../navigation';
import ProfileThumb from '../ProfileThumb/ProfileThumb';
import SearchBar from '../SearchBar/SearchBar';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';
import SearchMobile from '../SearchMobile';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import { IoCartOutline } from 'react-icons/io5';
import { VscGlobe } from 'react-icons/vsc';
import Dropdown from '../Dropdown/Dropdown';
import data from '@/data/menu.json';
import { useCartContext } from '../../contexts/CartContext';

const { dropdownOptions } = data;

const Header = ({ isLoggedIn }) => {
   const route = useRouter();
   const [translateActive, setTranslateActive] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [menuVisible, setMenuVisible] = useState(windowWidth > 660);
   const { cartCount, fetchCart } = useCartContext();

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

   useEffect(() => {
      if (isLoggedIn) {
         fetchCart();
      }
   }, [isLoggedIn, fetchCart]);

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
            <SearchMobile onClick={() => setIsSearchOpen(false)} />
         )}
         {windowWidth < 660 && (
            <div className='icon-box' onClick={() => setIsSearchOpen(true)}>
               <MagnifyingGlassIcon className={'icon-box'} />
            </div>
         )}
         {windowWidth > 660 || !isLoggedIn ? (
            <ProfileThumb
               isLoggedIn={isLoggedIn}
               windowWidth={windowWidth}
               handle={setMenuVisible}
            />
         ) : null}
         <Cart
            style={{ right: isLoggedIn && windowWidth <= 660 && '6.5rem' }}
            onClick={() => {
               route.push('/cart');
            }}
         >
            <span className='number'>{cartCount || 0}</span>
            <IoCartOutline className='cart' />
         </Cart>
         {windowWidth < 660 && isLoggedIn && (
            <MenuBar onClick={() => setMenuVisible(!menuVisible)}>
               {!menuVisible ? <CgMenuRight /> : <CgMenuRightAlt />}
            </MenuBar>
         )}
         <Language
            onMouseEnter={() => setTranslateActive(true)}
            onMouseLeave={() => setTranslateActive(false)}
            onClick={() => {
               windowWidth > 660 && setTranslateActive(!translateActive);
            }}
            style={{ right: isLoggedIn && windowWidth <= 660 && '4.5rem' }}
         >
            <VscGlobe className='globe' />
            {translateActive && <LanguageSwitcher />}
         </Language>
         {(menuVisible || windowWidth < 660) && (
            <Dropdown
               windowWidth={windowWidth}
               isVisible={menuVisible}
               list={dropdownOptions}
               onMouseEnter={() => setMenuVisible(true)}
               onMouseLeave={() => setMenuVisible(false)}
            />
         )}
      </HeaderStyle>
   );
};

export default Header;
