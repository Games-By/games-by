import { IoIosClose } from 'react-icons/io';
import SearchBar from '../SearchBar/SearchBar';
import { SearchMobileContainer } from './SearchMobileStyles';

const SearchMobile = ({ onclick }) => {
   const handleSearchBarClick = (e) => {
      e.stopPropagation();
   };
   return (
      <>
         <SearchMobileContainer onClick={onclick}>
            <SearchBar onclick={handleSearchBarClick} autoFocus={true} />
         </SearchMobileContainer>
      </>
   );
};

export default SearchMobile;
