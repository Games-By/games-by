import { SearchBarStyles, SearchBox } from './SearchBarStyles';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SearchedItem from '../SearchedItem/SearchedItem';
import { useRouter } from '../../../navigation';

const SearchBar = ({isLoggedIn }) => {
   const router = useRouter();
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

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         event.preventDefault();
         navigateToCatalog();
      }
   };

   const navigateToCatalog = () => {
      if (searched) {
         router.push(
            `/catalog?searched=${encodeURIComponent(searched)}`
         );
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <>
         <SearchBarStyles>
            <input
               ref={searchInputRef}
               className='search'
               type='text'
               placeholder='What do you want to play today?'
               onChange={handleSearch}
               onKeyDown={handleKeyDown}
               value={searched}
            />
            <div className='glass' onClick={navigateToCatalog}>
               <Image
                  src={'/assets/icons/magnifying-glass.svg'}
                  quality={100}
                  width={20}
                  height={20}
                  alt='magnifying glass icon'
               />
            </div>
            {searched.length > 1 && isSearched && (
               <SearchBox ref={searchInputRef}>
                  {findGames.length > 0 ? (
                     findGames.map(({ name, image, date }, index) => (
                        <SearchedItem
                           key={index + 1}
                           name={name}
                           image={image}
                           release={date}
                           url={`/games/${encodeURIComponent(
                              name.toLowerCase()
                           )}`}
                        />
                     ))
                  ) : (
                     <div className='searched-item'>No games found</div>
                  )}
               </SearchBox>
            )}
         </SearchBarStyles>
      </>
   );
};

export default SearchBar;
