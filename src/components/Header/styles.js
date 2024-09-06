import styled from 'styled-components';

export const HeaderStyle = styled.header`
   width: calc(100% - (30rem + 8rem));
   height: 8rem;
   background-color: rgba(var(--dark-gray));
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   padding: 0 4rem;
   transition: 0.5s;
   z-index: 20;

   .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(0.85);
      cursor: pointer;
      width: 2.6rem;
      height: 2.6rem;
      z-index: 21;

      svg {
         stroke: rgba(var(--secondary));
         transition: 0.5s;
      }

      &::after {
         transition: 0.5s;
         content: '';
         position: absolute;
         border: 1px solid rgba(var(--secondary));
         height: 100%;
         width: 100%;
         padding: 0.5rem;
         border-radius: 50%;
      }

      &:hover {
         svg {
            stroke: rgba(var(--primary));
         }
         &::after {
            background-color: rgba(var(--primary), 0.1);
            border: 1px solid rgba(var(--primary));
         }
      }
   }

   .invisible-bar {
      width: 6rem;
      height: 6rem;
      position: absolute;
      top: 4rem;
      right: 4rem;
   }

   .background {
      position: absolute;
      background-color: transparent;
      backdrop-filter: blur(1px);
      width: 100vw;
      height: 100vh;
      top: 0;
      transition: 0.4s;
   }
   @media screen {
      @media (max-width: 1440px) {
         width: calc(100% - (25rem + 8rem));
      }
      @media (max-width: 1024px) {
         height: 6rem;
         padding: 0 1.5rem;
         width: calc(100% - 3rem);

         .invisible-bar {
            right: 0.5rem;
         }
      }
      @media (max-width: 768px) {
         padding: 0 0.5rem;
         width: calc(100% - 1rem);
      }
   }
`;

export const MainNavigation = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;

   .hamburguer-box {
      height: 6rem;
      display: flex;
      align-items: center;
   }
   @media screen {
      @media (max-width: 1024px) {
         gap: 0.8rem;
      }
   }
`;

export const ProfileButtons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   @media screen {
      @media (max-width: 768px) {
         gap: 5px;
      }
   }
`;

export const Language = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 21;

   .globe {
      font-size: 3rem;
      cursor: pointer;
      fill: rgba(var(--secondary), 0.8);
   }
`;
