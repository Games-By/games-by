import styled from 'styled-components';

export const HeaderStyle = styled.header`
   width: 100vw;
   height: 8rem;
   background-color: rgba(var(--dark));
   display: flex;
   align-items: center;
   justify-content: space-between;

   .logo {
      object-fit: contain;
      width: 16rem;
      margin-left: 2rem;

      @media screen {
         @media (max-width: 850px) {
            margin-left: 0;
            width: 6rem;
            height: 4rem;
            margin: 0 2rem;
         }
         @media (max-width: 660px) {
            margin-left: 0;
            width: 6rem;
            height: 4rem;
            margin: 0 0.5rem 0 1rem;
         }
      }
   }
   .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      transform: scale(0.85);
      position: relative;
      z-index: 1;
      cursor: pointer;

      &::after {
         content: '';
         position: absolute;
         background-color: rgba(var(--light));
         height: 100%;
         width: 100%;
         border-radius: 50%;
      }
   }

   @media screen {
      @media (max-width: 660px) {
         justify-content: flex-start;
         height: 6rem;
      }
   }
`;

export const Language = styled.div`
   margin-right: 2rem;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;

   .globe {
      font-size: 3rem;
      cursor: pointer;
      fill: rgba(var(--secondary));
      object-fit: contain;
      z-index: 5;
      @media screen {
         @media (max-width: 660px) {
            font-size: 2.3rem;
         }
      }
   }

   @media screen {
      @media (max-width: 660px) {
         position: absolute;
         right: 1rem;
         margin: 0;
      }
   }
`;

export const MenuBar = styled.div`
   position: absolute;
   right: 1rem;
   font-size: 3.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   z-index: 5;

   @media screen {
      @media (max-width: 660px) {
         font-size: 2.5rem;
      }
   }
`;

export const Cart = styled.div`
   margin: 0 1rem;
   position: relative;
   z-index: 5;
   cursor: pointer;
   .number {
      position: absolute;
      color: rgba(var(--dark));
      background-color: rgba(var(--primary), 0.7);
      font-weight: 700;
      font-size: 1rem;
      padding: 0.3rem;
      border-radius: 50%;
      right: -0.5rem;
      top: -0.5rem;
      min-width: 1.3rem;
      min-height: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen {
         @media (max-width: 660px) {
            font-size: 0.8rem;
            min-width: 1.1rem;
            min-height: 1.1rem;
         }
      }
   }
   .cart {
      font-size: 3rem;
      stroke: rgba(var(--secondary));

      @media screen {
         @media (max-width: 660px) {
            font-size: 2.5rem;
            margin: 0;
         }
      }
   }
   @media screen {
      @media (max-width: 660px) {
         position: absolute;
         right: 4rem;
      }
   }
`;
