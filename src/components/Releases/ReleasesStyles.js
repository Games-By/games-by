import styled from 'styled-components';

export const ReleaseStyles = styled.section`
   margin: 5rem auto 1rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   .releases {
      display: flex;
      width: 90%;
      max-width: 170rem;
      justify-content: space-evenly;
      align-items: flex-start;
      gap: 3rem;
      margin: 5rem auto 3rem;
      @media screen {
         @media (max-width: 1440px) {
            width: 92%;
            gap: 1rem;
            margin: 3rem auto 2rem;
         }
         @media (max-width: 1250px) {
            padding: 0;
         }
         @media (max-width: 1024px) {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 0;
            gap: 3rem;
            max-width: 70rem;

            & > * {
               flex: 1 1 calc(31% - 2rem);
            }
         }
         @media (max-width: 768px) {
            gap: 2rem;
            & > * {
               flex: 1 1 calc(45% - 2rem);
            }
         }
         @media (max-width: 600px) {
            padding: 0;
            gap: 1.5rem;
         }
      }
   }
`;
