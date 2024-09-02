import styled from 'styled-components';

export const ArrowsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   .arrow {
      margin: 0;
      padding: 0;
      font-size: 2rem;
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   @media screen {
      @media (max-width: 768px) {
         .arrow {
            width: 3rem;
            height: 3rem;
         }
      }
   }
`;
