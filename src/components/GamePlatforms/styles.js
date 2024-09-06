import styled from 'styled-components';

export const Platforms = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 2rem;
margin: 2rem auto;
   .icon {
      font-size: 3rem;

      @media screen {
         @media (max-width: 1440px) {
            font-size: 2rem;
         }
         @media (max-width: 1300px) {
            font-size: 1.7rem;
         }
      }
   }

   .playstation {
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      gap: 0.5rem;
      .ps {
         font-size: 2rem;
      }

      .icon {
         font-size: 5rem;
      }
   }

   .xbox-one {
      height: 4rem;
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      @media screen {
         @media (max-width: 1440px) {
            height: 3rem;
            width: 8rem;
         }
         @media (max-width: 1300px) {
            height: 2.5rem;
            width: 7rem;
         }
      }
   }

   li {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   @media screen {
      @media (max-width: 1440px) {
         gap: 1.5rem;
      }
      @media (max-width: 1300px) {
         gap: 1rem;
         flex-wrap: wrap;
      }
   }
`;
