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

   .title {
      width: 100%;
      text-align: center;
      font-size: 5rem;
      margin: 3rem 0;
   }

   .deals {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 5rem;
      margin-top: 2rem;
      width: 92%;

      @media (max-width: 1204px) {
         flex-wrap: wrap;
         max-width: 55rem;
         gap: 2rem;
         justify-content: space-between;

         & > * {
            flex: 1 1 calc(31% - 2rem);
         }
      }

      @media (max-width: 768px) {
         gap: 1.5rem;
         justify-content: space-between;
      }
   }
`;
