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
      display: flex;
      justify-content: center;
      gap: 1rem;

      @media screen {
         @media (max-width: 1400px) {
            flex-wrap: wrap;
            justify-content: flex-start;
         }
         @media (max-width: 768px) {
            gap: 5px;
            width: 98%;
         }
      }
   }
`;
