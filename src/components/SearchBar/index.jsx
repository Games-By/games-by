import { useEffect, useRef, useState, useCallback } from 'react';
import { SearchBarStyles, SearchBox } from './styles';
import { useRouter } from '../../../navigation';
import { getGamesByName } from '@/Services/games-service/getGames';
import { debounce } from '@/utils/debounce';
import SearchedItem from '../SearchedItem';
import SearchedItemSkeleton from '../SearchedItem/SearchedItemSkeleton';
import MagnifyingGlassIcon from '@/assets/MagnifyingGlass';

const SearchBar = ({ autoFocus, onclick, className }) => {
   const router = useRouter();
   const [isSearched, setIsSearched] = useState(false);
   const [searched, setSearched] = useState('');
   const [findGames, setFindGames] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const searchInputRef = useRef(null);

   const handleSearch = async (searchValue) => {
      if (!searchValue) {
         setFindGames([]);
         setIsSearched(false);
         return;
      }
      setIsLoading(true);
      try {
         const games = await getGamesByName(searchValue);
         const filteredGames = games.filter(
            (game) => !findGames.find((existingGame) => existingGame._id === game._id)
         );

         setFindGames([...filteredGames]);
         setIsSearched(true);
      } catch (error) {
         console.error('Error fetching games:', error);
      } finally {
         setIsLoading(false);
      }
   };

   const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

   const handleChange = (event) => {
      const searchValue = event.target.value;
      setSearched(searchValue);
      setIsSearched(true);
      debouncedHandleSearch(searchValue);
   };

   const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
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
         router.push(`/library?searched=${encodeURIComponent(searched)}`);
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
         <SearchBarStyles onClick={onclick} className={className}>
            <input
               ref={searchInputRef}
               className='search'
               type='text'
               placeholder='What do you want to play today?'
               onChange={handleChange}
               onKeyUp={handleChange}
               onKeyDown={handleKeyDown}
               value={searched}
               autoFocus={autoFocus ? autoFocus : false}
            />
            <div className='glass' onClick={navigateToCatalog}>
               <MagnifyingGlassIcon size={16} />
            </div>
            {searched.length > 0 && isSearched && (
               <SearchBox
                  ref={searchInputRef}
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: '750px' }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
               >
                  {isLoading ? (
                     findGames.length < 1 ? (
                        <SearchedItemSkeleton />
                     ) : (
                        findGames.map((_, index) => (
                           <SearchedItemSkeleton key={`skeleton-${index}`} />
                        ))
                     )
                  ) : findGames.length > 0 && !isLoading ? (
                     findGames.map(
                        (game, index) =>
                           index < 5 && (
                              <SearchedItem
                                 key={game._id}
                                 id={game._id}
                                 name={game.name}
                                 image={game.images.coverImage}
                                 release={game.releaseYear}
                                 url={`/games/${encodeURIComponent(game.name.toLowerCase())}`}
                              />
                           )
                     )
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
