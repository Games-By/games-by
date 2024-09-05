import styled from 'styled-components';

export const GameContainer = styled.main`
   padding-top: 9rem;
   transition: .5s;
   width: 100vw;

   @media screen {
      @media (max-width: 768px) {
         padding-top: 6.5rem;
      }
   }
`;
