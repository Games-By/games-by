import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DropdownStyles = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: rgba(var(--dark), 0.9);
   backdrop-filter: blur(10px);
   position: absolute;
   top: 8rem;
   right: 5rem;
   min-width: 25rem;
   width: 25%;
   border-radius: 0 0 2rem 2rem;
   border: 1px solid rgba(var(--primary));
   border-top: none;
   color: rgba(var(--light));
   z-index: 21;
   overflow: hidden;

   .option {
      text-align: center;
      width: 100%;
      margin-bottom: 1rem;
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
         min-width: 0;
         width: 0;
         max-width: 31rem;
         border-radius: 0 0 0 2rem;
         right: -1px;
         border-right: none;
         top: 6rem;

         .option {
            width: auto;
         }
      }
   }
`;
