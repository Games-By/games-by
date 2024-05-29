'use client';

import Image from 'next/image';
import logo from '@/../../public/assets/logo.png';
import { HeaderStyle, SearchBar, Profile, Language } from './HeaderStyles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useState } from 'react';

const Header = () => {
   const [translateActive, setTranslateActive] = useState(false);
   return (
      <HeaderStyle>
         <Image
            src={'/assets/logo.png'}
            quality={100}
            width={160}
            height={50}
            alt='games By Logo'
            className='logo'
         />
         <SearchBar>
            <input
               className='search'
               type='text'
               placeholder='What do you want to play today?'
            />
            <div className='glass'>
               <Image
                  src={'/assets/icons/magnifying-glass.svg'}
                  quality={100}
                  width={20}
                  height={20}
                  alt='games By Logo'
               />
            </div>
         </SearchBar>
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
         <Language>
            <Image
               src={'/assets/icons/translate.svg'}
               alt='translate icon'
               width={25}
               height={25}
               quality={100}
               className='translate-icon'
               onClick={() => setTranslateActive(!translateActive)}
            />
            {translateActive && <LanguageSwitcher />}
         </Language>
      </HeaderStyle>
   );
};

export default Header;
