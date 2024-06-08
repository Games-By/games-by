'use-client';
import Image from 'next/image';
import { ProfileThumbStyles } from './ProfileThumbStyles';
import { Link } from '../../../../navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProfileThumb = ({ isLoggedIn }) => {
   const [profileImage, setProfileImage] = useState(null);

   const getUser = async (isLoggedIn) => {
      const authToken = localStorage.getItem('authToken');
      const userEmail = localStorage.getItem('userEmail');
      if (!authToken || !isLoggedIn) {
         return;
      }
      try {
         const response = await axios.get('http://localhost:3001/user', {
            params: { email: userEmail },
         });
         if (response.status === 200) {
            await handleImageUser(response.data.user.image);
         }
      } catch (error) {
         console.error('Erro ao obter perfil:', error);
      }
   };

   const handleImageUser = async (imageName) => {
      try {
         const response = await axios.get(
            'http://localhost:3001/download/image',
            {
               params: {
                  imageName: imageName,
               },
            }
         );
         setProfileImage(response.data.image);
      } catch (error) {
         console.error('Erro ao obter foto de perfil:', error);
      }
   };
   useEffect(() => {
      getUser(isLoggedIn);
   }, [isLoggedIn]);

   return (
      <Link href={isLoggedIn ? `/profile` : `/login`}>
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
