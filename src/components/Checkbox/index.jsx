import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { CheckboxStyles } from './styles';

const Checkbox = ({ checked, onChange, label }) => {
   return (
      <CheckboxStyles>
         <AnimatePresence>
            {checked && (
               <motion.div
                  className='check'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <FaCheck />
               </motion.div>
            )}
         </AnimatePresence>
         <input
            type='checkbox'
            className='checkbox'
            checked={checked}
            onChange={onChange}
         />
         {label && (
            <span
               className='text'
               style={{
                  color: checked ? 'rgba(var(--primary), .9)' : 'inherit',
               }}
            >
               {label}
            </span>
         )}
      </CheckboxStyles>
   );
};

export default Checkbox;
