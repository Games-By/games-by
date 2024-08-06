import styled from 'styled-components';

export const ReleaseStyles = styled.section`
   max-width: 190rem;
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
         @media (max-width: 1250px) {
            padding: 0 2rem;
         }
         @media (max-width: 915px) {
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
            padding: 0 2rem;
            gap: 2rem;
         }
      }
   }
`;
