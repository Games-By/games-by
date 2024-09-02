import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Switcher = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   background-color: rgba(var(--light-gray), 0.9);
   backdrop-filter: blur(10px);
   position: fixed;
   right: 1rem;
   top: 8.5rem;
   width: 20rem;
   border-radius: 2rem;
   border-top: none;
   color: rgba(var(--light));
   z-index: 21;
   overflow: hidden;
   padding-left: 1.5rem;


   .language {
      text-align: center;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      color: rgba(var(--light));
      font-size: 1.5rem;
      font-weight: 300;
      white-space: nowrap;
      position: relative;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 0.6rem;
      letter-spacing: 1px;

      &:nth-child(1) {
         padding-top: 2rem;
      }
      &:nth-last-child(1) {
         padding-bottom: 2rem;
         margin-bottom: 0;
         &::after {
            display: none;
         }
      }

      &:hover {
         color: rgba(var(--primary), 0.8);
      }
   }
   .active {
      color: rgba(var(--primary));
      text-decoration: underline;
      font-weight: 500;
   }
   &::before {
      content: '';
      height: 7rem;
      width: 7.5rem;
      position: absolute;
      top: -6.5rem;
      right: -0.5px;
      z-index: 2;
   }

   @media screen {
      @media (max-width: 768px) {
         top: 6rem;
         right: 0rem;

         &::before {
            top: -4rem;
            height: 4.5rem;
            right: 1rem;
         }
      }
   }
`;
