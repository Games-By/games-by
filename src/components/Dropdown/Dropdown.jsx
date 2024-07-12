import { Link } from '../../../navigation';
import { DropdownStyles } from './DropdownStyles';
import { useRouter, usePathname } from '../../../navigation';
import { FaSignOutAlt } from 'react-icons/fa';

const Dropdown = ({
   list,
   onMouseEnter,
   onMouseLeave,
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

   return (
      <DropdownStyles
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         style={{
            width: isVisible && windowWidth < 660 && '70%',
            transition: '0.5s',
         }}
      >
         {list.map((item, index) => (
            <Link
               key={index}
               href={item.url}
               onClick={item.title === 'Sign Out' ? handleLogout : null}
               className='option'
            >
               {item.title}
               {item.title === 'Sign Out' && <FaSignOutAlt />}
            </Link>
         ))}
      </DropdownStyles>
   );
};

export default Dropdown;
