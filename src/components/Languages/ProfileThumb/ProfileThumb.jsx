import Image from 'next/image';
import {
   Profile,
} from './ProfileThumbStyles';
import { Link } from '../../../../navigation';

const ProfileThumb = ({isLoggedIn}) => {
   return (
      <>
         <Link href={isLoggedIn ? `/profile` : `/login`}>
            <Profile>
               <Image
                  src={'/assets/icons/profile.svg'}
                  alt='profile'
                  width={25}
                  height={25}
                  quality={100}
                  className='profile-icon'
               />
            </Profile>
         </Link>
      </>
   );
};

export default ProfileThumb;
