'use client';
import Image from 'next/image';
import { ProfileThumbStyles } from './ProfileThumbStyles';
import { Link } from '../../../navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
require('dotenv').config();

const ProfileThumb = ({ isLoggedIn }) => {
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
      <Link href={isLoggedIn || tokenValid ? `/profile` : `/login`}>
         {profileImage ? (
            <ProfileThumbStyles>
               <Image
                  src={`data:image/jpeg;base64,${profileImage}`}
                  alt='profile'
                  width={50}
                  height={50}
                  quality={100}
                  className='profile-image'
               />
            </ProfileThumbStyles>
         ) : (
            <ProfileThumbStyles>
               <Image
                  src={'/assets/icons/profile.svg'}
                  alt='profile'
                  width={25}
                  height={25}
                  quality={100}
                  className='profile-icon'
               />
            </ProfileThumbStyles>
         )}
      </Link>
   );
};

export default ProfileThumb;
