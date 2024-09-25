import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectContainer = styled.div`
   position: relative;
   width: 100%;
   font-size: 1.6rem;
`;

export const Selector = styled.div`
   height: 4.4rem;
   background-color: rgba(var(--light), 0.05);
   border: 1px solid rgba(var(--secondary), 1);
   color: rgba(var(--secondary), 0.8);
   letter-spacing: 1px;
   border-radius: 0.6rem;
   padding: 0 1rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-between;
   user-select: none;
   position: relative;
   transition: 0.3s;
   ${({ isOpen }) =>
      isOpen &&
      `
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  `}

   &.error {
      border-width: 1px;
      border-color: rgba(var(--red));
   }
`;

export const Arrow = styled.span`
   font-size: 1.6rem;
   transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
   transition: transform 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   svg {
      fill: rgba(var(--secondary), 0.6);
   }
`;

export const Options = styled(motion.div)`
   position: absolute;
   width: 100%;
   background-color: rgba(var(--dark), 0.8);
   border: 1px solid rgba(var(--secondary), 1);
   border-radius: 0.6rem;
   margin-top: 0.5rem;
   z-index: 1000;
   max-height: 200px;
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 0rem;
   }
   &::-webkit-scrollbar-track {
      background-color: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background: linear-gradient(rgba(var(--primary-blue), .5), rgba(var(--primary-pink), .5));
      animation: gradient 5s ease alternate;
      border-radius: 2px;
      outline: 1px solid rgba(var(--primary-pink));

         @keyframes gradient {
         to {
            background: linear-gradient(rgba(var(--primary-pink), .5), rgba(var(--primary-blue), .5));
         }
      }
   }
`;

export const Option = styled.div`
   padding: 1rem;
   font-size: 1.5rem;
   background-color: rgba(var(--dark), 0.9);
   color: rgba(var(--light), 1);
   cursor: pointer;

   &:hover {
      background-color: rgba(var(--secondary), 0.7);
   }
`;
