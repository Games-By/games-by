import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Switcher = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: rgba(var(--dark), 0.9);
   backdrop-filter: blur(10px);
   position: fixed;
   right: 1rem;
   top: 8rem;
   width: 20rem;
   border-radius: 0 0 2rem 2rem;
   border: 1px solid rgba(var(--primary));
   border-top: none;
   color: rgba(var(--light));
   z-index: 21;
   overflow: hidden;


   .language {
      text-align: center;
      width: 100%;
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
      justify-content: center;
      padding-bottom: 0.6rem;
      letter-spacing: 1px;

      &:nth-child(1) {
         padding-top: 1rem;
      }
      &:nth-last-child(1) {
         padding-bottom: 1rem;
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
