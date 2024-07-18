import styled from 'styled-components';

export const VarticalCardStyles = styled.div`
   height: auto;
   max-width: 30rem;
   width: 25%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .cover {
      height: 60%;
      width: 100%;
      border-radius: 1rem 1rem 0 0;
      height: 38.2rem;

      img {
         object-position: top;
         object-fit: cover;
      }

      @media screen {
         @media (max-width: 915px) {
            height: 30rem;
         }
         @media (max-width: 480px) {
            min-height: 15rem;
            height: auto;
         }
      }
   }

   .infos {
      height: 40%;
      width: calc(100% - 2rem);
      min-height: 20rem;
      padding: 0 1rem 1rem 1rem;
      background: linear-gradient(
            30deg,
            transparent 25%,
            rgba(var(--cyan), 0.1) 100%
         ),
         linear-gradient(200deg, transparent 25%, rgba(var(--cyan), 0.1) 100%);
      display: grid;
      grid-template-columns: 20% 80%;
      grid-template-rows: auto 10% auto 10% 20% 25%;
      justify-items: end;
      grid-template-areas:
         'name name name'
         'genre genre genre'
         'publisher-year publisher-year publisher-year'
         'discount discount discount'
         'amount amount amount'
         'wish buy buy';
      border-radius: 0 0 1rem 1rem;
      .name {
         grid-area: name;
         width: 100%;
         cursor: pointer;
         margin: 0;
         font-size: 2rem;
         font-weight: 500;
         letter-spacing: 1px;
         display: flex;
         align-items: center;
         justify-content: flex-start;

         @media screen {
            @media (max-width: 1150px) {
               font-size: 2.3rem;
            }
            @media (max-width: 1024px) {
               font-size: 2rem;
            }
            @media (max-width: 915px) {
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

      .publisher-year {
         grid-area: publisher-year;
         width: 100%;
         font-size: 1.3rem;
         font-weight: 100;
         letter-spacing: 1px;
         color: rgba(var(--purple-2), 0.8);

         @media screen {
            @media (max-width: 1024px) {
               font-size: 1.2rem;
            }
            @media (max-width: 915px) {
               font-size: 1.6rem;
            }
            @media (max-width: 675px) {
               font-size: 1.3rem;
            }
            @media (max-width: 520px) {
               font-size: 1.2rem;
               letter-spacing: 0;
            }
            @media (max-width: 480px) {
               font-size: 1.1rem;
            }
         }
      }

      .genre {
         grid-area: genre;
         width: 100%;
         font-size: 1.7rem;
         font-weight: 300;
         letter-spacing: 2px;
         color: rgba(var(--cyan), 0.5);

         @media screen {
            @media (max-width: 1024px) {
               font-size: 1.5rem;
            }
            @media (max-width: 915px) {
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
            @media (max-width: 1024px) {
               font-size: 1.4rem;
            }
            @media (max-width: 915px) {
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
         color: rgba(var(--cyan));
         .code {
            margin-right: 0.3rem;
            font-size: 1.6rem;
            @media screen {
               @media (max-width: 1024px) {
                  font-size: 1.5rem;
               }
               @media (max-width: 520px) {
                  font-size: 1.4rem;
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
               @media (max-width: 1024px) {
                  font-size: 3.2rem;
               }
               @media (max-width: 915px) {
                  font-size: 3.5rem;
               }
               @media (max-width: 675px) {
                  font-size: 3.2rem;
               }
               @media (max-width: 520px) {
                  font-size: 2.5rem;
               }
               @media (max-width: 480px) {
                  font-size: 2rem;
               }
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
            @media (max-width: 1024px) {
               width: 3.5rem;
               height: 3.5rem;
            }
            @media (max-width: 915px) {
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
               @media (max-width: 1024px) {
                  min-height: calc(3.5rem - 2px);
                  font-size: 1.3rem;
                  padding: 0 1rem;
               }
               @media (max-width: 915px) {
                  min-height: calc(4rem - 2px);
                  font-size: 1.4rem;
                  padding: 0 1.5rem;
               }
               @media (max-width: 520px) {
                  font-size: 0.8rem;
                  min-height: calc(3rem - 2px);
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
         @media (max-width: 1130px) {
            min-height: 23rem;
         }
         @media (max-width: 520px) {
            min-height: 18rem;
            height: 30%;
         }
         @media (max-width: 480px) {
            width: calc(100% - 1.4rem);
            min-height: 15rem;
            padding: 0 0.7rem 0.7rem 0.7rem;
            height: auto;
         }
         @media (max-width: 390px) {
            min-height: 16rem;
         }
      }
   }
   @media screen {
      @media (max-width: 915px) {
         max-width: 30rem;
         height: 55rem;
      }
      @media (max-width: 480px) {
         min-width: 15rem;
         height: 35rem;
         width: 49%;
      }
   }
`;
