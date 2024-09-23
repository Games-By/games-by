import styled from "styled-components";

export const Container = styled.div`
   padding-top: 8rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   width: calc(100vw - 30rem);

      @media screen {
         @media (max-width: 1440px) {
            width: calc(100vw - 25rem);
         }
         @media (max-width: 1024px) {
            width: 100vw;
         }
      }
`
