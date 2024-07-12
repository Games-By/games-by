import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DropdownStyles = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   padding: 1rem 0 2rem;
   background-color: rgba(var(--dark), .9);
   position: absolute;
   top: 8rem;
   right: 5rem;
   z-index: 1;
   min-width: 25rem;
   width: 25%;
   border-radius: 0 0 2rem 2rem;
   border: 1px solid rgba(var(--cyan));
   border-top: none;
   color: rgba(var(--light));
   z-index: 2;

   &::before {
      content: '';
      height: 4rem;
      width: 20rem;
      background-color: transparent;
      position: fixed;
      top: 5rem;
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
         margin-left: .5rem;
         padding-left: .5rem;
         width: 1.8rem;
         border-left: 1px solid rgba(var(--light));
      }

      &:hover {
         color: rgba(var(--cyan), 0.8);
         svg {
            fill: rgba(var(--cyan));
         }
      }
   }

   @media screen {
      @media (max-width: 660px) {
         width: 0;
         max-width: 40rem;
         border-radius: 0 0 0 2rem;
         right: 0;
         border-right: none;
         top: 6rem;

         &::before {
            display: none;
            background-color: red;
         }
      }
   }
`;
