import Image from 'next/image';
import { SearchedItemStyles } from './styles';
import { Link } from '../../../navigation';

const SearchedItem = ({ name, image, url, release, id }) => {
   return (
      <>
         <div
            onClick={() => {
               localStorage.setItem('GameId', id);
            }}
            className='item-box'
         >
            <Link href={url}>
               <SearchedItemStyles>
                  <Image
                     src={image}
                     alt={`${name} wallpaper`}
                     width={250}
                     height={250}
                     quality={100}
                     className='cover'
                  />
                  <h3 className='title'>{name}</h3>
               </SearchedItemStyles>
            </Link>
         </div>
      </>
   );
};

export default SearchedItem;
