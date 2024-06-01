'user client';
import Image from 'next/image';
import { SearchedItemStyles } from './SearchedItemStyles';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SearchedItem = ({ name, image, url, release }) => {
   const pathname = usePathname();
   const router = useRouter();

   return (
      <>
         <Link href={`${url}`} locale={pathname}>
            <SearchedItemStyles>
               <h3 className='title'>{name}</h3>
               <Image
                  src={image}
                  alt={`${name} wallpaper`}
                  width={150}
                  height={150}
                  quality={100}
                  className='cover'
               />
               <p className='date'>{release}</p>
            </SearchedItemStyles>
         </Link>
         ;
      </>
   );
};

export default SearchedItem;
