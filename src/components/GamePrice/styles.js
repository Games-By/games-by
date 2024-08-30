import styled from 'styled-components';

export const GamePriceContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: flex-end;

   .price {
      font-size: 2rem;
      max-width: 9rem;
   }

   .percentage {
      font-size: 1.5rem;
   }

   .amount {
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .code {
         font-size: 2.5rem;
         color: rgba(var(--primary));
      }

      .value {
         font-size: 4rem;
      }
   }
`;
