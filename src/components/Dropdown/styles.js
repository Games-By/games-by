import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DropdownStyles = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   background-color: rgba(var(--light-gray));
   position: absolute;
   top: 7rem;
   right: 5rem;
   border-radius: 2rem;
   color: rgba(var(--light));
   padding: 0 3rem;
   z-index: 21;
   overflow: hidden;

   .option {
      text-align: left;
      margin-bottom: 2rem;
      color: rgba(var(--light));
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      font-weight: 200;
      text-transform: capitalize;
      white-space: nowrap;
      letter-spacing: 2px;

      &:nth-child(1) {
         padding-top: 2rem;
      }
      &:nth-last-child(1) {
         padding-bottom: 2rem;
         margin-bottom: 0;
      }

      svg {
         fill: rgba(var(--light));
         margin-left: 0.5rem;
         padding-left: 0.5rem;
         width: 1.8rem;
         border-left: 1px solid rgba(var(--light));
      }

      &:hover {
         color: rgba(var(--primary), 0.8);
         font-weight: 400;
         svg {
            fill: rgba(var(--primary));
         }
      }
   }

   .locales {
      display: flex;
      overflow: hidden;
      .flag {
         transition: 0.5s;
         &:hover {
            scale: 1.1;
         }
      }
   }
   @media screen {
      @media (max-width: 768px) {
         top: 6.5rem;
         right: 0.5rem;
      }
   }
`;
