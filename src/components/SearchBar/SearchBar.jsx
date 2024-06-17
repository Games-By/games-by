import { SearchBarStyles, SearchBox } from './SearchBarStyles';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import SearchedItem from '../SearchedItem/SearchedItem';
import { useRouter } from '../../../navigation';
import { getGamesByName } from '@/Services/games-service/getGames';
import { debounce } from '@/utils/debounce';
import SearchedItemSkeleton from '../SearchedItem/SearchedItemSkeleton';

const SearchBar = ({ isLoggedIn }) => {
   const router = useRouter();
   const [isSearched, setIsSearched] = useState(false);
   const [searched, setSearched] = useState('');
   const [findGames, setFindGames] = useState([]);
   const searchInputRef = useRef(null);

   const handleSearch = async (searchValue) => {
      if (!searchValue) {
         setFindGames([]);
         return;
      }
      const games = await getGamesByName(searchValue);
      console.log('retornou:? ', games);
      setFindGames(games);
   };

   const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

   const handleChange = (event) => {
      const searchValue = event.target.value;
      setSearched(searchValue);
      setIsSearched(true);
      debouncedHandleSearch(searchValue);
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
         router.push(`/catalog?searched=${encodeURIComponent(searched)}`);
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
               onChange={handleChange}
               onKeyUp={handleChange}
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
            {searched.length > 0 && isSearched && (
               <SearchBox ref={searchInputRef}>
                  {findGames.length > 0 ? (
                     findGames.map((game,index) => (
                        <SearchedItem
                           key={index + game._id}
                           name={game.name}
                           image={game.images.coverImage}
                           release={game.releaseYear}
                           url={`/games/${encodeURIComponent(
                              game.name.toLowerCase()
                           )}`}
                           isLast={index === findGames.length - 1}
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
