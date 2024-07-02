import { IoIosClose } from 'react-icons/io';
import SearchBar from '../SearchBar/SearchBar';
import { SearchMobileContainer } from './SearchMobileStyles';

const SearchMobile = ({ onclick }) => {
   return (
      <>
         <SearchMobileContainer>
            <SearchBar autoFocus={true} />
            <IoIosClose onClick={onclick} className='close' />
         </SearchMobileContainer>
      </>
   );
};

export default SearchMobile;
