import styled from 'styled-components';

export const OfferStyles = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 5rem 0 2rem;
   align-items: center;
   width: 90%;
   max-width: 190rem;
   margin: 0 auto;

   .title {
      width: 100%;
      text-align: center;
      font-size: 4rem;
      margin: 3rem 0;

      @media screen {
         @media (max-width: 768px) {
            font-size: 2.7rem;
         }
         @media (max-width: 500px) {
            font-size: 2rem;
         }
      }
   }

   .deals {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 4rem;
      margin-top: 2rem;
      width: 100%;

      @media screen {
         @media (max-width: 1260px) {
            gap: 3rem;
         }

         @media (max-width: 1024px) {
            flex-wrap: wrap;
            max-width: 75rem;
            width: 90%;
            gap: 2rem;
            justify-content: space-between;

            .card {
               max-width: none;
               &:nth-last-child(1) {
                  img {
                     object-fit: fill;
                  }
               }
            }

            & > * {
               flex: 1 1 calc(34% - 3rem);
            }
         }

         @media (max-width: 768px) {
            gap: 1rem;
            justify-content: space-between;
         }
         @media (max-width: 730px) {
            width: 80%;
            .card {
               &:nth-last-child(1) {
                  img {
                     object-fit: cover;
                  }
               }
            }
         }
         @media (max-width: 550px) {
            width: 90%;
         }
         @media (max-width: 490px) {
            width: 100%;
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         width: 94%;
      }
   }
`;
