import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Arrow, Option, Options, SelectContainer, Selector } from './styles';
import { AnimatePresence } from 'framer-motion';

const CustomSelect = ({
   name,
   value,
   onChange,
   options,
   placeholder,
   error,
   className,
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedValue, setSelectedValue] = useState(value || '');
   const selectRef = useRef(null);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleOptionClick = (optionValue) => {
      setSelectedValue(optionValue);
      setIsOpen(false);
      onChange({ target: { name, value: optionValue } });
   };

   const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <SelectContainer ref={selectRef} className={className}>
         <Selector
            className={error ? 'error' : ''}
            onClick={toggleDropdown}
            isOpen={isOpen}
         >
            {selectedValue
               ? options.find((option) => option.value === selectedValue).label
               : placeholder}
            <Arrow isOpen={isOpen} className={`arrow`}>
               <FaAngleDown
                  style={{ fill: error ? 'rgba(var(--red), 0.6)' : '' }}
               />
            </Arrow>
         </Selector>
         <AnimatePresence>
            {isOpen && (
               <Options
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  {options.map((option) => (
                     <Option
                        key={option.value}
                        onClick={() => handleOptionClick(option.value)}
                     >
                        {option.label}
                     </Option>
                  ))}
               </Options>
            )}
         </AnimatePresence>
      </SelectContainer>
   );
};

export default CustomSelect;
