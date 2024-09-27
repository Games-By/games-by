import styled from 'styled-components';

export const ReleaseStyles = styled.section`
   padding: 5rem 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color: rgba(var(--dark-gray));
   .releases {
      width: 96%;
      max-width: 160rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      margin: 2rem auto 0;

      .card {
      }

      @media screen {
         @media (max-width: 1400px) {
            flex-wrap: wrap;
            justify-content: flex-start;
         }
         @media (max-width: 768px) {
            width: 98%;
         }
      }
   }
`;
