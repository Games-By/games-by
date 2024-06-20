import Image from 'next/image';
import { SearchedItemStyles, Separator } from './SearchedItemStyles';
import { Link } from '../../../navigation';

const SearchedItem = ({ name, image, url, release, isLast, id }) => {
   return (
      <>
         <div
            onClick={() => {
               localStorage.setItem('GameId', id);
            }}
         >
            <Link href={url}>
               <SearchedItemStyles>
                  <h3 className='title'>{name}</h3>
                  <Image
                     src={image}
                     alt={`${name} wallpaper`}
                     width={100}
                     height={100}
                     quality={100}
                     className='cover'
                     style={{ width: 'auto', height: 'auto' }}
                  />
                  <p className='date'>{release}</p>
               </SearchedItemStyles>
            </Link>
            {!isLast && <Separator />}
         </div>
      </>
   );
};

export default SearchedItem;
