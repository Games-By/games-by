'use client';
import Image from 'next/image';
import { ProfileThumbLink, ProfileContainer } from './styles';
import { Link } from '../../../navigation';
import { useEffect, useState, useCallback } from 'react';
import { debounce } from '@/utils/debounce';

const ProfileThumb = ({ windowWidth, handle }) => {
   const [profileImage, setProfileImage] = useState(null);
   const [tokenValid, setTokenValid] = useState(
      () => !!localStorage.getItem('authToken')
   );

   const handleImageUser = useCallback(async () => {
      try {
         const image = JSON.parse(localStorage.getItem('imageProfile'));
         if (image && image.data && image.data.image) {
            setProfileImage(image.data.image);
         }
      } catch (error) {
         console.error('Error getting profile photo:', error);
      }
   }, []);

   const debouncedhandleImageUser = useCallback(
      debounce(handleImageUser, 1000),
      [handleImageUser]
   );

   useEffect(() => {
      if (!profileImage) {
         const user = JSON.parse(localStorage.getItem('user'));
         if (user?.image) {
            debouncedhandleImageUser(user.image);
         }
      }
   }, [profileImage, debouncedhandleImageUser]);

   return (
      <ProfileContainer>
         {profileImage ? (
            <Link
               onMouseEnter={() => windowWidth > 768 && handle(true)}
               onMouseLeave={() => windowWidth > 768 && handle(false)}
               href={tokenValid ? `/profile` : '/'}
            >
               <ProfileThumbLink>
                  <Image
                     src={`data:image/jpeg;base64,${profileImage}`}
                     alt='profile'
                     width={50}
                     height={50}
                     quality={100}
                     className='profile-image'
                  />
               </ProfileThumbLink>
            </Link>
         ) : (
            <Link href={`/login`}>
               <ProfileThumbLink>
                  <Image
                     src={'/assets/icons/profile.svg'}
                     alt='profile'
                     width={25}
                     height={25}
                     quality={100}
                     className='profile-icon profile-svg'
                  />
               </ProfileThumbLink>
            </Link>
         )}
      </ProfileContainer>
   );
};

export default ProfileThumb;
