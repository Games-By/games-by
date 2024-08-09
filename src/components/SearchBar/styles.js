import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchBarStyles = styled(motion.div)`
   border-radius: 3rem;
   background-color: rgba(var(--light), 0.7);
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   padding: 0 1rem 0 2rem;
   align-items: center;
   position: relative;
   z-index: 10;
   .search {
      font-family: var(--reddit-sans), sans-serif;
      background-color: transparent;
      border: 0;
      width: 100%;
      height: 90%;
      width: 21.5rem;
      height: 4rem;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 1.2rem;
      transition: 0.5s;

      &::placeholder {
         color: rgba(var(--dark));
         opacity: 0.5;
      }

      &:focus {
         width: 45rem;
         z-index: 11;
         outline: none;
         caret-color: rgba(var(--secondary));
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 15rem;
            font-size: 1rem;

            &:focus {
               width: 30rem;
            }
         }
      }
   }
   .glass {
      min-width: 3.5rem;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid rgba(var(--secondary));
      transition: 0.5s;

      svg {
         stroke: rgba(var(--secondary));
      }

      &:hover {
         border-left: 1px solid rgba(var(--primary));
         svg {
            stroke: rgba(var(--primary));
         }
      }
   }

   &:focus {
      width: 40rem;
   }
`;

export const SearchBox = styled(motion.ul)`
   width: 45rem;
   height: auto;
   position: absolute;
   right: 0;
   left: 1rem;
   top: 90%;
   padding: 1rem 0.5rem;
   border-radius: 1rem;
   background-color: rgba(var(--dark), 0.9);
   backdrop-filter: blur(10px);
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   color: rgba(var(--light));
   max-height: 50rem;
   transition: max-height 0.3s ease;
   overflow-y: auto;

   .searched-item {
      width: 95%;
      margin: 0 auto;
      padding: 1rem 0.5rem;
      font-size: 1.9rem;
      font-weight: 300;
      text-decoration: underline;
   }
   .item-box {
      margin-bottom: 1rem;

      &:nth-last-child(1) {
         margin-bottom: 0;
      }
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

   @media screen {
      @media (max-width: 1024px) {
         width: 30rem;
      }
      @media (max-width: 768px) {
         width: 90%;
      }
   }
`;
