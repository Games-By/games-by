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
         }
      }
   }
   .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 50%;
      background-color: rgba(var(--light));
      fill: rgba(var(--dark));
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
`;
