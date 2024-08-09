'use client';
import Image from 'next/image';
import { ProfileThumbLink, ProfileContainer } from './styles';
import { Link } from '../../../navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
require('dotenv').config();

const ProfileThumb = ({ windowWidth, handle }) => {
   const [profileImage, setProfileImage] = useState(null);
   const [tokenValid, setTokenValid] = useState(false);

   const handleImageUser = async (imageName) => {
      try {
         const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/download/image`,
            {
               params: { imageName },
            }
         );
         setProfileImage(response.data.image);
      } catch (error) {
         console.error('Error getting profile photo:', error);
      } finally {
      }
   };

   const debouncedhandleImageUser = debounce(handleImageUser, 5000);

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         setTokenValid(true);
      }

      if (!profileImage) {
         const user = JSON.parse(localStorage.getItem('user'));
         if (user && user.image) {
            debouncedhandleImageUser(user.image);
         }
      }
   }, []);

   return (
      <>
         <ProfileContainer>
            {profileImage ? (
               <Link
                  onMouseEnter={() => {
                     windowWidth > 768 && handle(true);
                  }}
                  onMouseLeave={() => {
                     windowWidth > 768 && handle(false);
                  }}
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
                        className='profile-icon'
                     />
                  </ProfileThumbLink>
               </Link>
            )}
         </ProfileContainer>
      </>
   );
};

export default ProfileThumb;
