import styled from 'styled-components';

export const OfferStyles = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 5rem 0 2rem;
   align-items: center;
   max-width: 170rem;
   background-color: rgba(var(--dark-gray));
   margin: 0 auto;

   .deals {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2rem;
      width: 96%;
   }
`;
