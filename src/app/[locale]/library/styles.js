import styled from 'styled-components';

export const Container = styled.div`
   padding-top: 8rem;
   width: calc(100vw - 30rem);
   overflow: visible;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   margin-bottom: 5rem;

   .games-box {
      display: flex;
      width: calc(100% - 6rem);
      max-width: 140rem;
      min-height: 100vh;
      gap: 1rem;

      .not-found {
         width: calc(100% - 26rem);

         .title {
            font-size: 3rem;
            letter-spacing: 1px;
            font-weight: 400;
         }

         @media screen {
            @media (max-width: 1130px) {
               width: calc(100% - 18rem);
            }
            @media (max-width: 1024px) {
               width: calc(100% - 2rem);
            }
         }
      }

      @media (max-width: 1130px) {
         width: calc(100% - 4rem);
      }

      @media (max-width: 1024px) {
         width: 100%;
         flex-direction: column-reverse;
         align-items: flex-end;
         justify-content: flex-end;
      }
   }

   .filter-box {
      height: inherit;
      position: relative;
      display: flex;

      @media (max-width: 1024px) {
         height: auto;
         position: static;
         width: calc(100% - 2rem);
         padding: 0 1rem;
      }
   }

   @media (max-width: 1440px) {
      width: calc(100vw - 25rem);
   }

   @media (max-width: 1024px) {
      width: 100vw;
      padding-top: 6rem;
   }
`;
