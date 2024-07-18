import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DropdownStyles = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   padding: 1rem 0 2rem;
   background-color: rgba(var(--dark), 0.9);
   backdrop-filter: blur(10px);
   position: absolute;
   top: 11.3rem;
   right: 5rem;
   z-index: 1;
   min-width: 25rem;
   width: 25%;
   border-radius: 0 0 2rem 2rem;
   border: 1px solid rgba(var(--primary));
   border-top: none;
   color: rgba(var(--light));
   z-index: 2;

   &::before {
      content: '';
      height: 4rem;
      width: 90%;
      left: 0;
      background-color: transparent;
      position: fixed;
      top: -4rem;

      @media screen {
         @media (max-width: 660px) {
            left: auto;
            right: 0;
            top: -5rem;
            height: 5rem;
            width: 5rem;
         }
      }
   }

   .option {
      text-align: center;
      width: 100%;
      margin: 0 auto;
      color: rgba(var(--light));
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      white-space: nowrap;
      letter-spacing: 1px;

      svg {
         fill: rgba(var(--light));
         margin-left: 0.5rem;
         padding-left: 0.5rem;
         width: 1.8rem;
         border-left: 1px solid rgba(var(--light));
      }

      &:hover {
         color: rgba(var(--primary), 0.8);
         svg {
            fill: rgba(var(--primary));
         }
      }
   }

   @media screen {
      @media (max-width: 660px) {
         min-width: 0;
         width: 0;
         max-width: 40rem;
         border-radius: 0 0 0 2rem;
         right: 0;
         border-right: none;
         top: 9.3rem;

         .option {
            width: auto;
         }
      }
   }
`;
