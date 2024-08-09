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

const { dropdownOptions } = data;

const Dropdown = ({
   onMouseEnter,
   onMouseLeave,
   onClick,
   isVisible,
   windowWidth,
}) => {
   const router = useRouter();
   const pathname = usePathname();
   const { width } = useWindowSize();
   const locale = useLocale();
   const user = JSON.parse(localStorage.getItem('user'));

   const handleLogout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');

      if (pathname.includes('/profile')) {
         router.replace('/').then(() => {
            window.location.reload();
         });
      } else {
         window.location.reload();
      }
   };

   const dropdownVariants = {
      initial: windowWidth < 768 && isVisible ? { width: 0 } : { height: 0 },
      animate:
         windowWidth < 768 && isVisible
            ? { opacity: 1, width: '70%' }
            : { opacity: 1, height: 'auto' },
      exit: windowWidth < 768 && isVisible ? { width: 0 } : { height: 0 },
   };

   const MotionLink = motion(Link);
   return (
      <DropdownStyles
         initial={dropdownVariants.initial}
         animate={dropdownVariants.animate}
         exit={dropdownVariants.exit}
         transition={{ duration: 0.3 }}
         onMouseEnter={windowWidth > 768 ? onMouseEnter : null}
         onMouseLeave={windowWidth > 768 ? onMouseLeave : null}
         onClick={windowWidth <= 768 ? onClick : null}
      >
         {dropdownOptions.map((item, index) => (
            <MotionLink
               initial={{ y: 0, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 0, opacity: 0 }}
               transition={{ duration: 0.1, delay: 0.2 }}
               key={index}
               href={
                  item.title['en-US'] === 'Library' ||
                  item.title['en-US'] === 'WishList'
                     ? `${
                          user.username
                             ? encodeURIComponent(user.username)
                             : user.name
                       }${item.url}`
                     : item.url
               }
               onClick={
                  item.title['en-US'] === 'Sign Out' ? handleLogout : null
               }
               className='option'
            >
               {item.title[locale]}
               {item.title['en-US'] === 'Sign Out' && <FaSignOutAlt />}
            </MotionLink>
         ))}
         {width < 768 && (
            <div className='locales'>
               {locales.map((loc) => (
                  <Link href={loc.code} className='flag'>
                     <Image width={35} height={25} alt='flag' src={loc.flag} />
                  </Link>
               ))}
            </div>
         )}
      </DropdownStyles>
   );
};

export default Dropdown;
