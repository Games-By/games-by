import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchBarStyles = styled(motion.div)`
   height: 3.3rem;
   border-radius: 2rem;
   background-color: rgba(var(--dark), 0.7);
   border: 1px solid rgba(var(--secondary), 0.6);
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   padding: 0 0.5rem 0 1.5rem;
   align-items: center;
   position: relative;
   z-index: 10;
   .search {
      font-family: var(--reddit-sans), sans-serif;
      background-color: transparent;
      border: 0;
      width: 100%;
      height: 100%;
      width: 21.5rem;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 1.2rem;
      transition: 0.5s;
      color: rgba(var(--primary));

      &::placeholder {
         color: rgba(var(--light), 0.6);
         opacity: 0.5;
      }

      &:focus {
         z-index: 11;
         outline: none;
         caret-color: rgba(var(--secondary));

         ~ {
            .glass {
               svg {
                  stroke: rgba(var(--secondary), 1);
               }
            }
         }
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 20rem;
            font-size: 1.1rem;

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

      svg {
         stroke: rgba(var(--secondary), 0.6);
         transition: 0.5s;
      }

      &:hover {
         svg {
            stroke: rgba(var(--primary));
         }
      }
   }
`;

export const SearchBox = styled(motion.ul)`
   width: 45rem;
   height: auto;
   position: absolute;
   right: 0;
   left: 1rem;
   top: 100%;
   padding: 1rem 0.5rem;
   border-radius: 1rem;
   background-color: rgba(var(--light-gray));
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
