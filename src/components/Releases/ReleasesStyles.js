import styled from 'styled-components';

export const ReleaseStyles = styled.section`
   margin: 5rem auto 1rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   .releases {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      margin: 5rem auto 3rem;
      @media screen {
         @media (max-width: 1440px) {
            width: 90%;
            gap: 2rem;
         }
         @media (max-width: 1250px) {
            padding: 0;
         }
         @media (max-width: 1024px) {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            gap: 4rem;

            & > * {
               flex: 1 1 calc(50% - 2rem);
            }
         }
         @media (max-width: 600px) {
            padding: 0;
            gap: 2rem;
            width: 95%;
         }
      }
   }
`;
