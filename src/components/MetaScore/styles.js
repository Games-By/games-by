import styled from 'styled-components';

export const MetaScore = styled.div`
   margin-top: 3rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: flex-start;
   width: 13rem;
   gap: 5px;

   .title {
      margin: 0;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 1.5rem;
   }
   .score {
      width: 5rem;
      height: 5rem;
      font-size: 2.5rem;
      font-weight: 800;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
   }
`;
