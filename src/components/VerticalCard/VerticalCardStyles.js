import styled from 'styled-components';

export const VarticalCardStyles = styled.div`
   height: auto;
   max-width: 33rem;
   width: 25%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .cover {
      width: 100%;
      border-radius: 1rem 1rem 0 0;
      height: 38.2rem;
      background-color: rgba(var(--light), 0.1);
      img {
         object-position: top;
         object-fit: cover;
      }

      @media screen {
         @media (max-width: 1440px) {
            height: 30rem;
         }
         @media (max-width: 1024px) {
            height: 30rem;
         }
         @media (max-width: 520px) {
            height: 20rem;
         }
      }
   }

   .infos {
      width: calc(100% - 2rem);
      min-height: 20rem;
      padding: 0 1rem 1rem 1rem;
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
      grid-template-rows: auto auto auto auto 20%;
      justify-items: end;
      grid-template-areas:
         'name name name'
         'genre genre genre'
         'discount discount discount'
         'amount amount amount'
         'wish buy buy';
      border-radius: 0 0 1rem 1rem;
      .name {
         grid-area: name;
         width: 100%;
         cursor: pointer;
         margin: 0;
         font-size: 2.8rem;
         font-weight: 500;
         letter-spacing: 1px;
         display: flex;
         align-items: flex-end;
         justify-content: flex-start;

         @media screen {
            @media (max-width: 1200px) {
               font-size: 2.5rem;
            }
            @media (max-width: 1024px) {
               font-size: 2.8rem;
            }
            @media (max-width: 675px) {
               font-size: 2.5rem;
            }
            @media (max-width: 520px) {
               font-size: 1.5rem;
            }
            @media (max-width: 480px) {
               margin-top: 0.3rem;
            }
         }
      }

      .genre {
         grid-area: genre;
         width: 100%;
         font-size: 1.7rem;
         font-weight: 300;
         letter-spacing: 2px;
         color: rgba(var(--secondary), 0.5);

         @media screen {
            @media (max-width: 1200px) {
               font-size: 1.5rem;
            }
            @media (max-width: 1024px) {
               font-size: 1.8rem;
            }
            @media (max-width: 675px) {
               font-size: 1.5rem;
            }
            @media (max-width: 520px) {
               font-size: 1.2rem;
            }
            @media (max-width: 480px) {
               font-size: 1.1rem;
            }
         }
      }

      .discount {
         grid-area: discount;
         font-size: 1.5rem;
         margin: 0;
         letter-spacing: 1px;
         transform: translateY(0.8rem);

         @media screen {
            @media (max-width: 1200px) {
               font-size: 1.4rem;
            }
            @media (max-width: 1024px) {
               font-size: 1.65rem;
            }
            @media (max-width: 675px) {
               font-size: 1.4rem;
               transform: translateY(0.5rem);
            }
            @media (max-width: 520px) {
               font-size: 1.3rem;
            }
            @media (max-width: 480px) {
               font-size: 0.9rem;
               transform: translateY(0.3rem);
            }
         }
      }

      .amount {
         grid-area: amount;
         color: rgba(var(--light));
         .code {
            color: rgba(var(--secondary));
            margin-right: 0.5rem;
            font-size: 1.6rem;
            font-weight: 300;
            letter-spacing: 1px;
            @media screen {
               @media (max-width: 1200px) {
                  font-size: 1.5rem;
               }
               @media (max-width: 520px) {
                  font-size: 1.2rem;
               }
               @media (max-width: 480px) {
                  font-size: 1.2rem;
               }
            }
         }
         .value {
            font-size: 3.5rem;
            letter-spacing: 1px;
            @media screen {
               @media (max-width: 1200px) {
                  font-size: 3.2rem;
               }
               @media (max-width: 1024px) {
                  font-size: 3.5rem;
               }
               @media (max-width: 675px) {
                  font-size: 3.2rem;
               }
               @media (max-width: 520px) {
                  font-size: 1.8rem;
               }
               @media (max-width: 480px) {
                  font-size: 2rem;
               }
            }
         }

         @media screen {
            @media (max-width: 520px) {
               align-self: flex-end;
            }
         }
      }

      .wish-button {
         grid-area: wish;
         padding: 0.8rem;
         border-radius: 50%;
         margin: 0;
         width: 4rem;
         height: 4rem;
         align-self: flex-end;
         justify-self: flex-start;
         svg {
            width: 100%;
            height: 100%;
         }

         @media screen {
            @media (max-width: 1200px) {
               width: 3.5rem;
               height: 3.5rem;
            }
            @media (max-width: 1024px) {
               width: 4rem;
               height: 4rem;
            }
            @media (max-width: 520px) {
               width: 3rem;
               height: 3rem;
            }
            @media (max-width: 390px) {
               align-self: center;
            }
         }
      }

      .button {
         grid-area: buy;
         align-self: flex-end;
         justify-self: flex-end;
         .buy-button {
            min-height: calc(4rem - 2px);
            font-size: 1.4rem;
            font-weight: 500;
            margin: 0;
            white-space: nowrap;
            padding: 0 1.5rem;

            @media screen {
               @media (max-width: 1200px) {
                  min-height: calc(3.5rem - 2px);
                  font-size: 1.3rem;
                  padding: 0 1rem;
               }
               @media (max-width: 1024px) {
                  min-height: calc(4rem - 2px);
                  font-size: 1.4rem;
                  padding: 0 1.5rem;
               }
               @media (max-width: 520px) {
                  font-size: 0.8rem;
                  min-height: calc(2rem - 2px);
               }
               @media (max-width: 390px) {
                  padding: 0 1rem;
               }
            }
         }

         @media screen {
            @media (max-width: 390px) {
               align-self: center;
            }
         }
      }

      @media screen {
         @media (max-width: 1200px) {
            height: 16rem;
            min-height: 0;
         }
         @media (max-width: 520px) {
            height: 13rem;
            max-height: none;
            min-height: 0;
         }
         @media (max-width: 480px) {
            min-height: 13rem;
         }
      }
   }
   @media screen {
      @media (max-width: 1024px) {
         width: 40%;
      }
      @media (max-width: 520px) {
         width: 45%;
      }
   }
`;
