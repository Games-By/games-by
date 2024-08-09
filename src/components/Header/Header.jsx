'use client';
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
import useWindowSize from '@/hooks/useWindowSize';
import useScrollPosition from '@/hooks/useScrollPosition';

const { dropdownOptions } = data;

const Header = ({ isLoggedIn }) => {
   const route = useRouter();
   const { width } = useWindowSize();
   const scrollPosition = useScrollPosition();
   const [translateActive, setTranslateActive] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [menuVisible, setMenuVisible] = useState(width > 660);
   const { cartCount, fetchCart } = useCartContext();

   useEffect(() => {
      if (isLoggedIn) {
         fetchCart();
      }
   }, [isLoggedIn, fetchCart]);

   return (
      <HeaderStyle
         style={{ backgroundColor: scrollPosition > 80 && 'rgba(var(--dark), .0)', backdropFilter: scrollPosition > 80 && 'blur(10px)'}}
      >
         <Link href={`/`}>
            <Image
               src={
                  width > 850 ? '/assets/logo.png' : '/assets/logo reduced.svg'
               }
               quality={100}
               width={160}
               height={50}
               alt='games By Logo'
               className='logo'
               priority
            />
         </Link>
         {width > 660 && <SearchBar isLoggedIn={isLoggedIn} />}
         {isSearchOpen && width < 660 && (
            <SearchMobile onClick={() => setIsSearchOpen(false)} />
         )}
         {width < 660 && (
            <div className='icon-box' onClick={() => setIsSearchOpen(true)}>
               <MagnifyingGlassIcon className={'icon-box'} />
            </div>
         )}
         {width > 660 || !isLoggedIn ? (
            <ProfileThumb
               isLoggedIn={isLoggedIn}
               windowWidth={width}
               handle={setMenuVisible}
            />
         ) : null}
         <Cart
            style={{ right: isLoggedIn && width <= 660 && '6.5rem' }}
            onClick={() => {
               route.push('/cart');
            }}
         >
            <span className='number'>{cartCount || 0}</span>
            <IoCartOutline className='cart' />
         </Cart>
         {width < 660 && isLoggedIn && (
            <MenuBar onClick={() => setMenuVisible(!menuVisible)}>
               {!menuVisible ? <CgMenuRight /> : <CgMenuRightAlt />}
            </MenuBar>
         )}
         <Language
            onMouseEnter={() => setTranslateActive(true)}
            onMouseLeave={() => setTranslateActive(false)}
            onClick={() => {
               width > 660 && setTranslateActive(!translateActive);
            }}
            style={{ right: isLoggedIn && width <= 660 && '4.5rem' }}
         >
            <VscGlobe className='globe' />
            {translateActive && <LanguageSwitcher />}
         </Language>
         {(menuVisible || width < 660) && (
            <Dropdown
               windowWidth={width}
               isVisible={menuVisible}
               list={dropdownOptions}
               onMouseEnter={() => setMenuVisible(true)}
               onMouseLeave={() => setMenuVisible(false)}
               onClick={() => setMenuVisible(!menuVisible)}
            />
         )}
      </HeaderStyle>
   );
};

export default Header;
