import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Switcher = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 0 2rem;
   background-color: rgba(var(--dark), 0.9);
   backdrop-filter: blur(10px);
   position: absolute;
   right: -1rem;
   top: 5.5rem;
   z-index: 1;
   width: 20rem;
   border-radius: 0 0 2rem 2rem;
   border: 1px solid rgba(var(--cyan));
   border-top: none;
   color: rgba(var(--light));
   z-index: 2;

   .language {
      text-align: center;
      width: 100%;
      margin: 0 auto;
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

      &:hover {
         color: rgba(var(--cyan), 0.8);
      }

      &::after {
         content: '';
         height: 1px;
         width: 80%;
         background-color: rgba(var(--light));
         margin: 0 auto;
         position: absolute;
         bottom: 0;
      }

      &:nth-last-child(1) {
         padding-bottom: 0;
         &::after {
            display: none;
         }
      }
   }
   .active {
      color: rgba(var(--cyan));
      text-decoration: underline;
      font-weight: 500;
   }
   &::before {
      content: '';
      height: 7rem;
      width: 6rem;
      position: absolute;
      top: -6.5rem;
      right: -0.5px;
      z-index: 2;
   }

   @media screen {
      @media (max-width: 660px) {
         top: 4.1rem;
         right: -3rem;

         &::before {
            top: 2rem;
            width: 15rem;
         }
      }
   }
`;
