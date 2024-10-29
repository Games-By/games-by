import { Link } from '../../../navigation';
import { DropdownStyles } from './styles';
import { useRouter, usePathname } from '../../../navigation';
import { FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';
import data from '@/data/menu.json';
import { useLocale } from 'next-intl';
import { locales } from '@/components/Languages/LanguageSwitcher';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const { dropdownOptions } = data;

const Dropdown = ({ onMouseEnter, onMouseLeave, onClick, isVisible, windowWidth }) => {
   const router = useRouter();
   const pathname = usePathname();
   const { width } = useWindowSize();
   const locale = useLocale();
   const [user, setUser] = useState(null);

   const handleLogout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
      localStorage.removeItem('imageProfile');

      if (pathname.includes('/profile')) {
         router.replace('/').then(() => {
            window.location.reload();
         });
      } else {
         window.location.reload();
      }
   };

   const dropdownVariants = {
      initial: { height: 0 },
      animate: { opacity: 1, height: 'auto' },
      exit: { height: 0 },
   };

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
         setUser(user);
      }
   }, [onMouseEnter]);

   const MotionLink = motion(Link);
   return (
      <DropdownStyles
         initial={dropdownVariants.initial}
         animate={dropdownVariants.animate}
         exit={dropdownVariants.exit}
         transition={{ duration: 0.4 }}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         onClick={onClick}
      >
         {dropdownOptions.map((item, index) => (
            <MotionLink
               initial={{ y: 0, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 0, opacity: 0 }}
               transition={{ duration: 0.1 }}
               key={index}
               href={
                  user && (item.title['en-US'] === 'Library' || item.title['en-US'] === 'WishList')
                     ? `${encodeURIComponent(user.username)}${item.url}`
                     : item.url
               }
               onClick={item.title['en-US'] === 'Sign Out' ? handleLogout : null}
               className='option'
            >
               {item.title[locale]}
               {item.title['en-US'] === 'Sign Out' && <FaSignOutAlt />}
            </MotionLink>
         ))}
         {width < 768 && (
            <div className='locales'>
               {locales.map((loc) => (
                  <Link href={loc.code} className='flag' key={loc.code}>
                     <Image width={35} height={25} alt='flag' src={loc.flag} />
                  </Link>
               ))}
            </div>
         )}
      </DropdownStyles>
   );
};

export default Dropdown;
