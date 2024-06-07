'use client';
import Image from 'next/image';
import { HeaderStyle, Language } from './HeaderStyles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import { useEffect, useRef, useState } from 'react';
import { Link } from '../../../navigation';
import { usePathname } from 'next/navigation';
import { locales } from '../Languages/LanguageSwitcher';
import ProfileThumb from '../Languages/ProfileThumb/ProfileThumb';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const pathname = usePathname();
   const [translateActive, setTranslateActive] = useState(false);

   const locale =
      locales.find((locale) => pathname.includes(locale.code))?.code || 'en';

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         setIsLoggedIn(true);
      }
   }, []);

   return (
      <HeaderStyle>
         <Link href={`/`}>
            <Image
               src={'/assets/logo.png'}
               quality={100}
               width={160}
               height={50}
               alt='games By Logo'
               className='logo'
               priority
            />
         </Link>
         <SearchBar isLoggedIn={isLoggedIn} />
         <ProfileThumb isLoggedIn={isLoggedIn} />
         <Language
            onMouseEnter={() => setTranslateActive(true)}
            onMouseLeave={() => setTranslateActive(false)}
         >
            <Image
               src={'/assets/icons/translate.svg'}
               alt='translate icon'
               width={25}
               height={25}
               quality={100}
               className='translate-icon'
            />
            {translateActive && <LanguageSwitcher />}
         </Language>
      </HeaderStyle>
   );
};

export default Header;
