import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import {
   DropdownContainer,
   DropdownButton,
   DropdownIcon,
   DropdownOptions,
   DropdownOption,
} from './styles';
import Checkbox from '../Checkbox';

const PlatformsDropdown = ({
   platformsData,
   platforms,
   handlePlatformChange,
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef(null);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
         ) {
            setIsOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [dropdownRef]);

   return (
      <DropdownContainer ref={dropdownRef}>
         <DropdownButton onClick={toggleDropdown}>
            Plataformas
            <DropdownIcon isOpen={isOpen}>
               <FaAngleDown />
            </DropdownIcon>
         </DropdownButton>
         <AnimatePresence>
            {isOpen && (
               <DropdownOptions
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  {platformsData.map((platform, index) => (
                     <DropdownOption key={index} onClick={() => handlePlatformChange(platform)}>
                        <Checkbox
                           checked={platforms.includes(platform)}
                           onChange={() => {
                              handlePlatformChange(platform);
                           }}
                           label={platform}
                           className={'check-box'}
                        />
                     </DropdownOption>
                  ))}
               </DropdownOptions>
            )}
         </AnimatePresence>
      </DropdownContainer>
   );
};

export default PlatformsDropdown;
