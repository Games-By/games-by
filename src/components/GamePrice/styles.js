import styled from 'styled-components';

export const GamePriceContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: flex-end;
   gap: 5px;

   .old-price {
      font-size: 1.6rem;
      max-width: 9rem;
   }

   .percentage {
      font-size: 1.2rem;
   }

   .amount {
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .code {
         font-size: 2rem;
         color: rgba(var(--primary));
      }

      .value {
         font-size: 3.5rem;
      }
      @media screen {
         @media (max-width: 1600px) {
            .code {
               font-size: 1.6rem;
            }
            .value {
               font-size: 3rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         .old-price {
            font-size: 1.4rem;
         }
         .percentage {
            font-size: 1.1rem;
         }

         @media (max-width: 768px) {
            gap: 0;
            .percentage {
               font-size: 1.1rem;
            }
         }
      }
   }
`;
