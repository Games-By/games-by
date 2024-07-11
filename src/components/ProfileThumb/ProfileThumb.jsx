'use client';
import Image from 'next/image';
import { ProfileThumbLink, ProfileContainer } from './ProfileThumbStyles';
import { Link } from '../../../navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { useLocale } from 'next-intl';
require('dotenv').config();

const ProfileThumb = ({ isLoggedIn, windowWidth, handle }) => {
   const locale = useLocale();
   const [profileImage, setProfileImage] = useState(null);
   const [loading, setLoading] = useState(false);
   const [tokenValid, setTokenValid] = useState(false);

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         setTokenValid(true);
         isLoggedIn = true;
      }

      if (isLoggedIn && !profileImage && !loading) {
         const userString = localStorage.getItem('user');
         if (userString) {
            const user = JSON.parse(userString);
            if (user.image) {
               handleImageUser(user.image);
            }
         }
      }
   }, [isLoggedIn, profileImage, loading]);

   const handleImageUser = async (imageName) => {
      setLoading(true);
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
         setLoading(false);
      }
   };

   return (
      <>
         <ProfileContainer style={{ right: (isLoggedIn && windowWidth <= 660) && '11rem'}}>
            {profileImage ? (
               <ProfileThumbLink
                  onMouseEnter={() => {
                     windowWidth > 660 && handle(true);
                  }}
                  onMouseLeave={() => {
                     windowWidth > 660 && handle(false);
                  }}
                  href={isLoggedIn || tokenValid ? `${locale}/profile` : '/'}
               >
                  <Image
                     src={`data:image/jpeg;base64,${profileImage}`}
                     alt='profile'
                     width={50}
                     height={50}
                     quality={100}
                     className='profile-image'
                  />
               </ProfileThumbLink>
            ) : (
               <ProfileThumbLink href={`${locale}/login`}>
                  <Image
                     src={'/assets/icons/profile.svg'}
                     alt='profile'
                     width={25}
                     height={25}
                     quality={100}
                     className='profile-icon'
                  />
               </ProfileThumbLink>
            )}
         </ProfileContainer>
      </>
   );
};

export default ProfileThumb;
