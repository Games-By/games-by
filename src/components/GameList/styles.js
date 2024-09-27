import styled from 'styled-components';

export const GamesList = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   gap: 1rem;
   width: calc(100% - 26rem);

   @media screen {
      @media (max-width: 1130px) {
         width: calc(100% - 18rem);
      }
      @media (max-width: 1024px) {
         width: calc(100% - 2rem);
         padding: 0 1rem;
         margin-top: 5rem;
      }
   }
`;
