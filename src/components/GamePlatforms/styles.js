import styled from 'styled-components';

export const Platforms = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 2rem;

   .playstation {
      font-size: 7rem;
      font-weight: 600;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      gap: 0.5rem;
   }

   .xbox-one {
      height: 4rem;
      width: 13rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
   }

   li {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;
