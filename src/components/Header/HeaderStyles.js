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
            width: 10rem;
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
      }
   }
`;

export const Language = styled.div`
   cursor: pointer;
   margin: 0 3rem 0 1.5rem;
   position: relative;
   height: 5rem;
   width: 5rem;
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen {
      @media (max-width: 850px) {
         margin: 0 5rem 0 0 ;
         width: 4rem;
         height: 4rem;
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
   z-index: 2;
`;
