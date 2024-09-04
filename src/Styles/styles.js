import styled from 'styled-components';

export const Main = styled.main`
   display: flex;
   justify-content: flex-end;
   .main-content {
      width: calc(100vw - 40rem);

      @media screen {
         @media (max-width: 1520px) {
            width: calc(100vw - 30rem);
         }
         @media (max-width: 1024px) {
            width: 100vw;
         }
      }
   }
`;
