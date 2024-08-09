import { IoIosClose } from 'react-icons/io';
import SearchBar from '../SearchBar';
import { SearchMobileContainer } from './SearchMobileStyles';

const SearchMobile = ({ onClick }) => {
   const handleSearchBarClick = (e) => {
      e.stopPropagation();
   };
   return (
      <>
         <SearchMobileContainer onClick={onClick}>
            <SearchBar onclick={handleSearchBarClick} autoFocus={true} />
         </SearchMobileContainer>
      </>
   );
};

export default SearchMobile;
