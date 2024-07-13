import { Link } from '../../../navigation';
import { DropdownStyles } from './DropdownStyles';
import { useRouter, usePathname } from '../../../navigation';
import { FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Dropdown = ({
   list,
   onMouseEnter,
   onMouseLeave,
   onClick,
   isVisible,
   windowWidth,
}) => {
   const router = useRouter();
   const pathname = usePathname();

   const handleLogout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('user');

      if (pathname.includes('/profile')) {
         router.replace('/').then(() => {
            window.location.reload();
         });
      } else {
         window.location.reload();
      }
   };

   const dropdownVariants = {
      initial:
         windowWidth < 660 && isVisible
            ? { opacity: 0, width: 0 }
            : { opacity: 0, height: 0 },
      animate:
         windowWidth < 660 && isVisible
            ? { opacity: 1, width: '50%' }
            : { opacity: 1, height: 'auto' },
      exit:
         windowWidth < 660 && isVisible
            ? { opacity: 0, width: 0 }
            : { opacity: 0, height: 0 },
   };
   const MotionLink = motion(Link);
   return (
      isVisible && (
         <DropdownStyles
            initial={dropdownVariants.initial}
            animate={dropdownVariants.animate}
            exit={dropdownVariants.exit}
            transition={{ duration: 0.3 }}
            onMouseEnter={windowWidth > 660 && onMouseEnter}
            onMouseLeave={windowWidth > 660 && onMouseLeave}
            onClick={windowWidth <= 660 && onClick}
         >
            {list.map((item, index) => (
               <MotionLink
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                  key={index}
                  href={item.url}
                  onClick={item.title === 'Sign Out' ? handleLogout : null}
                  className='option'
               >
                  {item.title}
                  {item.title === 'Sign Out' && <FaSignOutAlt />}
               </MotionLink>
            ))}
         </DropdownStyles>
      )
   );
};

export default Dropdown;
