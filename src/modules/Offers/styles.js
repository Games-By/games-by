import styled from 'styled-components';

export const OfferStyles = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 5rem 0 2rem;
   align-items: center;
   width: 100%;
   max-width: 190rem;
   margin: 0 auto;

   .deals {
      display: flex;
      gap: 5rem;
      margin-top: 2rem;
      width: 90%;
      @media screen {
         @media (max-width: 1024px) {
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: space-evenly;
         }
      }
   }

   .card {
      width: 100%;
      .infos {
         height: 20rem;
         @media (max-width: 520px) {
            height: fit-content;
         }
      }
      @media screen {
         @media (max-width: 1024px) {
            width: 47%;
         }
         @media (max-width: 380px) {
            width: 46%;
         }
      }
   }
`;
