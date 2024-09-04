import styled from 'styled-components';

export const OfferStyles = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 5rem 0 2rem;
   align-items: center;
   margin: 0 auto;
   background-color: rgba(var(--dark-gray));

   .deals {
      max-width: 160rem;
      margin-top: 2rem;
      width: 96%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(21rem, 21rem));
      align-items: center;
      justify-content: center;
      align-items: center;
      justify-items: flex-start;
      gap: 1rem;

      @media screen {
         @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(17rem, 17rem));
            gap: 5px;
            width: 98%;
         }
      }
   }
`;
