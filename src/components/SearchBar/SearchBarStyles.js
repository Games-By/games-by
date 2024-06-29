import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchBarStyles = styled(motion.div)`
   width: 30%;
   min-width: 40rem;
   height: 50%;
   border-radius: 3rem;
   background-color: rgba(var(--light));
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   padding: 0 1rem 0 2rem;
   align-items: center;
   position: relative;
   .search {
      font-family: var(--reddit-sans), sans-serif;
      background-color: transparent;
      border: 0;
      width: 92%;
      height: 70%;
      border-right: 1px solid var(--purple-2);
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 1.4rem;

      &::placeholder {
         color: rgba(var(--dark));
         opacity: 0.5;
      }

      &:focus {
         outline: none;
         caret-color: rgba(var(--purple-2));
      }
   }
   .glass {
      width: 8%;
      height: 80%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid rgba(var(--purple-2));
   }
`;

export const SearchBox = styled(motion.ul)`
   width: 85%;
   position: absolute;
   right: 0;
   left: 2rem;
   top: 90%;
   padding: 1rem 0.5rem;
   border-radius: 1rem;
   background-color: rgba(var(--light));
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   color: rgba(var(--dark));
   max-height: 50rem;
   transition: max-height 0.3s ease;
   overflow-y: auto;
   z-index: 2;

   .searched-item {
      width: 95%;
      margin: 0 auto;
      padding: 1rem 0.5rem;
      font-size: 1.9rem;
      font-weight: 300;
      text-decoration: underline;
   }
   &::-webkit-scrollbar {
      width: 3px;
   }

   &::-webkit-scrollbar-button:end:increment {
      display: none;
   }
   &::-webkit-scrollbar-button:start:decrement {
      display: none;
   }

   &::-webkit-scrollbar-thumb:vertical {
      background-color: rgba(var(--dark));
      -webkit-border-radius: 10px;
   }
`;
