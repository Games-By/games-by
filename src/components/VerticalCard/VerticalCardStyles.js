import styled from 'styled-components';

export const VarticalCardStyles = styled.div`
   border-radius: 1rem;
   max-width: 29rem;
   background-color: rgba(var(--dark));
   margin: 2rem auto;
   height: 100%;
   cursor: pointer;
   .cover {
      border-radius: 1rem 1rem 0 0;
   }
   .infos {
      border-radius: 0 0 1rem 1rem;
      padding: 1rem;
      background: linear-gradient(
         300deg,
         rgb(var(--dark)) 12.5%,
         rgba(var(--cyan), 0.05) 100%
      );
      transform: translateY(-0.3rem);
      .name {
         margin: 0;
         font-size: 2.5rem;
         font-weight: 400;
         letter-spacing: 1px;
      }
      .publisher-year {
         font-size: 1.2rem;
         font-weight: 100;
         letter-spacing: 1px;
         color: rgba(var(--purple-2), 0.8);
         margin-left: 0.3rem;
      }
      .gender {
         font-size: 1.5rem;
         letter-spacing: 2px;
         color: rgba(var(--cyan), 0.5);
         margin-left: 0.3rem;
      }
      .price {
         color: rgba(var(--cyan));
         margin: 1rem 0;
         text-align: center;
         font-size: 2.3rem;
         font-weight: 600;
         height: 4.8rem;

         .discount {
            margin: 0 auto;
         }
         .code {
            margin-right: 0.5rem;
            font-size: 1.6rem;
         }
         .value {
            letter-spacing: 1px;
         }
      }
   }

   .buttons {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .wish-button {
         font-size: 1rem;
         font-weight: 500;
         padding: 0.5rem 1rem;
         margin: 0;
         white-space: nowrap;
         justify-content: space-between;
         width: auto;
         gap: 0.5rem;
      }
      .buy-button {
         font-size: 1.5rem;
         font-weight: 500;
         padding: 0.8rem 1rem;
         margin: 0;
         white-space: nowrap;
      }
   }
`;
