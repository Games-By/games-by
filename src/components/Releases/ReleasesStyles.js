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
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(21rem, 21rem));
      align-items: center;
      justify-content: center;
      align-items: center;
      justify-items: flex-start;
      gap: 1rem;
      margin: 2rem auto 0;

      .card {
      }

      @media screen {
         @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(17rem, 17rem));
            gap: 5px;
            width: 98%;
         }
      }
   }
`;
