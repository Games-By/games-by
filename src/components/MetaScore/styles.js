import styled from 'styled-components';

export const MetaScore = styled.div`
   margin-top: 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: flex-start;
   width: 11rem;
   gap: 5px;

   .title {
      margin: 0;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 1.2rem;
   }
   .score {
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
      font-weight: 800;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
   }

   @media screen {
      @media (max-width: 1600px) {
         margin-top: 1rem;

         .title {
            font-size: 1.1rem;
         }
         .score {
            width: 3rem;
            height: 3rem;
            font-size: 1.5rem;
         }
      }
      @media (max-width: 768px) {
         margin-top: 0;
      }
   }
`;
