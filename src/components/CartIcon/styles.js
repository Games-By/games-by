import styled from 'styled-components';

export const Cart = styled.div`
   margin: 0 1rem;
   position: relative;
   z-index: 21;
   display: flex;
   justify-content: center;
   align-items: center;

   .number {
      position: absolute;
      color: rgba(var(--light));
      background-color: rgba(var(--primary), 0.7);
      font-weight: 400;
      font-size: 1.2rem;
      border-radius: 50%;
      width: 1.8rem;
      height: 1.8rem;
      right: -0.8rem;
      top: -0.7rem;
      min-width: 1.3rem;
      min-height: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen {
         @media (max-width: 768px) {
            font-size: 0.8rem;
            width: 1.5rem;
            height: 1.5rem;
         }
      }
   }

   .cart {
      cursor: pointer;
      font-size: 3rem;
      stroke: rgba(var(--secondary));

      @media screen {
         @media (max-width: 768px) {
            font-size: 2.5rem;
            margin: 0;
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
      }
   }
`;
