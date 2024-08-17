import styled from 'styled-components';

export const VarticalCardStyles = styled.div`
   height: 100%;
   width: 25rem;
   min-width: 20rem;
   max-width: 35rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;

   .cover {
      width: 100%;
      border-radius: 1rem 1rem 0 0;
      height: 30rem;
      background-color: rgba(var(--light), 0.1);
      img {
         object-position: top;
         object-fit: cover;
      }

      @media screen {
         @media (max-width: 1440px) {
            height: 25rem;
         }
         @media (max-width: 768px) {
            height: 20rem;
         }
      }
   }

   .infos {
      width: calc(100% - 2rem);
      padding: 5px 1rem 1rem;
      background: linear-gradient(
            30deg,
            transparent 25%,
            rgba(var(--primary), 0.1) 100%
         ),
         linear-gradient(
            200deg,
            transparent 25%,
            rgba(var(--primary), 0.1) 100%
         );
      display: grid;
      grid-template-columns: 20% 80%;
      grid-template-rows: auto 15% auto auto 3rem;
      justify-items: end;
      justify-content: center;
      grid-template-areas:
         'name name name'
         'genre genre genre'
         'discount discount discount'
         'amount amount amount'
         'wish buy buy';
      border-radius: 0 0 1rem 1rem;
      gap: 3px;
      transition: 0.5s;

      .name {
         grid-area: name;
         width: 100%;
         cursor: pointer;
         margin: 0;
         font-size: 2rem;
         font-weight: 500;
         letter-spacing: 1px;
         display: flex;
         align-items: flex-end;
         justify-content: flex-start;

         @media screen {
            @media (max-width: 1440px) {
               font-size: 1.7rem;
            }
            @media (max-width: 768px) {
               font-size: 1.5rem;
            }
         }
      }

      .genre {
         grid-area: genre;
         width: 100%;
         font-size: 1.3rem;
         font-weight: 300;
         letter-spacing: 2px;
         color: rgba(var(--secondary), 0.5);
         @media screen {
            @media (max-width: 1440px) {
               font-size: 1.1rem;
            }
            @media (max-width: 768px) {
               font-size: 1rem;
            }
         }
      }

      .discount {
         grid-area: discount;
         font-size: 1.25rem;
         margin: 0;
         letter-spacing: 1px;
      }

      .amount {
         grid-area: amount;
         color: rgba(var(--light));
         .code {
            color: rgba(var(--secondary));
            margin-right: 0.5rem;
            font-size: 1.4rem;
            font-weight: 300;
            letter-spacing: 1px;
         }
         .value {
            font-size: 2.5rem;
            letter-spacing: 1px;
         }
         @media screen {
            @media (max-width: 1440px) {
               .code {
                  font-size: 1.25rem;
                  margin-right: 3px;
               }
               .value {
                  font-size: 2.2rem;
               }
            }
            @media (max-width: 768px) {
               .code {
                  font-size: 1.1rem;
                  margin-right: 2px;
               }
               .value {
                  font-size: 2rem;
               }
            }
         }
      }

      .wishlist-button {
         font-size: 2rem;
         padding: 0.5rem;
         margin: 0;
         position: absolute;
         left: 0.5rem;
         bottom: 1rem;
         color: rgba(var(--secondary));
         border: 1px solid rgba(var(--secondary));
         background-color: rgba(var(--secondary), 0.1);

         .icon {
            fill: rgba(var(--secondary));
            padding: 0;
            margin: 0;
            transition: 0.5s;
            margin: 0 auto;
         }

         &:hover {
            color: rgba(var(--primary));
            border: 1px solid rgba(var(--primary));
            background-color: rgba(var(--primary), 0.1);
            svg {
               fill: rgba(var(--primary));
            }
         }

         @media screen {
            @media (max-width: 768px) {
               font-size: 1.5rem;
               bottom: 0.5rem;
            }
         }
      }

      .buy-button {
         grid-area: buy;
         align-self: flex-end;
         justify-self: flex-end;
         min-height: calc(3rem - 2px);
         font-size: 1.1rem;
         font-weight: 500;
         margin: 0;
         white-space: nowrap;
         padding: 0 1.5rem;
         color: rgba(var(--primary));
         border: 1px solid rgba(var(--primary));
         transition: 0.5s;
         &:hover {
            scale: 1.01;
            background-color: rgba(var(--primary), 0.1);
         }
         @media screen {
            @media (max-width: 768px) {
               min-height: calc(2.5rem - 2px);
               font-size: 1rem;
            }
            @media (max-width: 390px) {
               min-height: calc(2.5rem - 2px);
               font-size: 0.9rem;
               padding: 0 1rem;
            }
         }
      }

      @media screen {
         @media (max-width: 1440px) {
            grid-template-rows: auto 12% auto auto 3rem;
         }
         @media (max-width: 768px) {
            grid-template-rows: auto 12% auto auto 2.5rem;
            gap: 1px;
            padding: 5px 0.7rem 0.7rem;
            width: calc(100% - 1.4rem);
         }
      }
   }

   .percentage {
      z-index: 1;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.5rem;
   }

   @media screen {
      @media (max-width: 450px) {
         min-width: 16rem;
      }
   }
`;
