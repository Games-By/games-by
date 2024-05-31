'use client';

import Image from 'next/image';
import {
   HeaderStyle,
   SearchBar,
   Profile,
   Language,
   SearchBox,
} from './HeaderStyles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useRef, useState } from 'react';
import SearchedItem from '../SearchedItem/SearchedItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
   const pathname = usePathname()
   const [translateActive, setTranslateActive] = useState(false);
   const [isSearched, setIsSearched] = useState(false);
   const [searched, setSearched] = useState('');
   const [findGames, setFindGames] = useState([]);
   const searchInputRef = useRef(null);

   const games = [
      {
         name: 'Cyberpunk 2077',
         image: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/6bAF2VVEamgKclalI0oBnoAe.jpg',
         date: 2020,
      },
      {
         name: 'Cyber',
         image: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/6bAF2VVEamgKclalI0oBnoAe.jpg',
         date: 2020,
      },
   ];

   const handleSearch = (event) => {
      const searchValue = event.target.value;
      setSearched(searchValue);
      setIsSearched(true);

      if (searchValue.length > 1) {
         const filteredGames = games.filter((game) =>
            game.name.toLowerCase().includes(searchValue.toLowerCase())
         );
         const sortedGames = filteredGames.sort((a, b) => {
            if (
               a.name.toLowerCase().startsWith(searchValue.toLowerCase()) &&
               !b.name.toLowerCase().startsWith(searchValue.toLowerCase())
            ) {
               return -1;
            }
            if (
               !a.name.toLowerCase().startsWith(searchValue.toLowerCase()) &&
               b.name.toLowerCase().startsWith(searchValue.toLowerCase())
            ) {
               return 1;
            }
            return a.name.localeCompare(b.name);
         });
         setFindGames(sortedGames);
      } else {
         setFindGames([]);
      }
   };

   const handleClickOutside = (event) => {
      if (
         searchInputRef.current &&
         !searchInputRef.current.contains(event.target)
      ) {
         setIsSearched(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <HeaderStyle>
         <Image
            src={'/assets/logo.png'}
            quality={100}
            width={160}
            height={50}
            alt='games By Logo'
            className='logo'
         />
         <SearchBar>
            <input
               ref={searchInputRef}
               className='search'
               type='text'
               placeholder='What do you want to play today?'
               onChange={handleSearch}
               onKeyUp={handleSearch}
               value={searched}
            />
            <div className='glass'>
               <Image
                  src={'/assets/icons/magnifying-glass.svg'}
                  quality={100}
                  width={20}
                  height={20}
                  alt='magnifying glass icon'
               />
            </div>
            {searched.length > 1 && isSearched ? (
               <SearchBox>
                  {findGames.length > 0 ? (
                     findGames.map((game, index) => (
                        <SearchedItem
                           key={index + 1}
                           name={game.name}
                           image={game.image}
                           release={game.date}
                           url={'/'}
                        />
                     ))
                  ) : (
                     <div className='searched-item'>No games found</div>
                  )}
               </SearchBox>
            ) : null}
         </SearchBar>
         <Link href={`${pathname}/login`}>
            <Profile>
               <Image
                  src={'/assets/icons/profile.svg'}
                  alt='profile'
                  width={25}
                  height={25}
                  quality={100}
                  className='profile-icon'
               />
            </Profile>
         </Link>
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
      </HeaderStyle>
   );
};

export default Header;
