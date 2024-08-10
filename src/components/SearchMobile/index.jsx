import SearchBar from '../SearchBar';
import { SearchMobileContainer } from './styles';

const SearchMobile = ({ onClick }) => {
   const handleSearchBarClick = (e) => {
      e.stopPropagation();
   };
   return (
      <>
         <SearchMobileContainer
            onClick={onClick}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{
               duration: 0.5,
               ease: [0.42, 0, 0.58, 1],
            }}
         >
            <SearchBar
               onclick={handleSearchBarClick}
               autoFocus={true}
               className='search-bar'
            />
         </SearchMobileContainer>
      </>
   );
};

export default SearchMobile;
