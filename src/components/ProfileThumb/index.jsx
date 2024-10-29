'use client';
import Image from 'next/image';
import { ProfileThumbLink, ProfileContainer } from './styles';
import { Link } from '../../../navigation';
import { useEffect, useState, useCallback } from 'react';
import { debounce } from '@/utils/debounce';
import { BsFillPersonFill } from 'react-icons/bs';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';
import ProfileThumbSkeleton from './ProfileThumbSkeleton';

const ProfileThumb = ({ windowWidth, onClick, isOpen, tokenValid }) => {
   const [profileImage, setProfileImage] = useState(null);
   const [username, setUsername] = useState(null);
   const handleImageUser = useCallback(async () => {
      try {
         const image = JSON.parse(localStorage.getItem('imageProfile'));
         if (image && image.data && image.data.image) {
            setProfileImage(image.data.image);
            const user = JSON.parse(localStorage.getItem('user'));
            setUsername(user.username);
         }
      } catch (error) {
         console.error('Error getting profile photo:', error);
      }
   }, []);

   const debouncedhandleImageUser = useCallback(debounce(handleImageUser, 1000), [handleImageUser]);

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
         {tokenValid ? (
            profileImage ? (
               <ProfileThumbLink onClick={onClick}>
                  <Image
                     src={`data:image/jpeg;base64,${profileImage}`}
                     alt='profile'
                     width={50}
                     height={50}
                     quality={100}
                     className='profile-image'
                  />
                  <span className='user-name'>{username}</span>
                  {isOpen ? (
                     <TbChevronUp className='arrow-icon' />
                  ) : (
                     <TbChevronDown className='arrow-icon' />
                  )}
               </ProfileThumbLink>
            ) : (
               <ProfileThumbSkeleton />
            )
         ) : (
            <Link href={`/login`}>
               <ProfileThumbLink>
                  <div className='profile-icon'>
                     <BsFillPersonFill />
                  </div>
                  <span className='user-name'>Login</span>
               </ProfileThumbLink>
            </Link>
         )}
      </ProfileContainer>
   );
};

export default ProfileThumb;
