import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { VscGlobe } from 'react-icons/vsc';

import { UserControls, Language } from './styles';
import LanguageSwitcher from '../Languages/LanguageSwitcher';
import Dropdown from '../Dropdown';
import ProfileThumb from '../ProfileThumb';
import CartIcon from '../CartIcon';

import { useAuth } from '@/contexts/AuthContext';
import useWindowSize from '@/hooks/useWindowSize';

const UserHeaderControls = () => {
   const { width } = useWindowSize();
   const { isLoggedIn } = useAuth();

   const [translateActive, setTranslateActive] = useState(false);
   const [menuVisible, setMenuVisible] = useState(false);

   const toggleTranslateActive = useCallback(() => {
      setTranslateActive((prev) => !prev);
   }, []);

   const handleMenuToggle = useCallback(() => {
      setMenuVisible((prev) => !prev);
   }, []);

   return (
      <UserControls>
         <CartIcon />
         <ProfileThumb
            isOpen={menuVisible}
            onClick={handleMenuToggle}
         />
         {(width > 768 || translateActive || (width <= 768 && !isLoggedIn)) && (
            <>
               {translateActive && (
                  <div
                     className='invisible-bar'
                     onMouseEnter={() => setTranslateActive(true)}
                     onMouseLeave={() => setTranslateActive(false)}
                  ></div>
               )}
               <Language
                  onMouseEnter={() => setTranslateActive(true)}
                  onMouseLeave={() => setTranslateActive(false)}
                  onClick={() => width > 768 && toggleTranslateActive()}
                  style={{ right: isLoggedIn && width <= 768 ? '4.5rem' : undefined }}
               >
                  <VscGlobe className='globe' />
                  <AnimatePresence>{translateActive && <LanguageSwitcher />}</AnimatePresence>
               </Language>
            </>
         )}
         <AnimatePresence>
            {menuVisible && (
               <Dropdown
                  windowWidth={width}
                  isVisible={menuVisible}
                  onMouseLeave={() => setMenuVisible(false)}
               />
            )}
         </AnimatePresence>
      </UserControls>
   );
};

export default UserHeaderControls;
