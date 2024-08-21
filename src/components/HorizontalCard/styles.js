import styled from 'styled-components';

export const HorizontalCardStyles = styled.div`
   padding: 0 0 1.5rem;
   margin: 1.5rem 0 0;
   position: relative;
   display: flex;

   .image {
      width: 20rem;
      height: 12rem;
      object-fit: cover;
      object-position: left top;
      border-radius: 1rem;

      @media screen {
         @media (max-width: 1440px) {
            width: 17rem;
            height: 10.2rem;
         }
         @media (max-width: 1100px) {
            width: 15.3rem;
            height: 9.18rem;
         }
         @media (max-width: 510px) {
            width: 12rem;
            height: 7.5rem;
         }
         @media (max-width: 380px) {
            width: 11rem;
            height: 7rem;
         }
      }
   }

   .game-discount-percentage {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;

      @media screen {
         @media (max-width: 510px) {
            font-size: 0.8rem;
         }
      }
   }

   .game-data {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .game-name {
         font-size: 2rem;
         font-weight: 400;
         letter-spacing: 1px;
         max-width: 26rem;
         margin: 0;

         @media screen {
            @media (max-width: 1440px) {
               font-size: 1.6rem;
               max-width: 24rem;
            }
            @media (max-width: 1100px) {
               font-size: 1.5rem;
               max-width: 20rem;
            }
            @media (max-width: 1024px) {
               font-size: 1.7rem;
               max-width: max-content;
            }
            @media (max-width: 580px) {
               font-size: 1.4rem;
            }
         }
      }

      .prices {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: flex-end;
         height: 100%;
         .game-discount {
            margin: 0;

            @media screen {
               @media (max-width: 510px) {
                  font-size: 1rem;
               }
            }
         }

         .game-price {
            font-size: 2.5rem;

            .code {
               font-size: 1.6rem;
               margin-right: 3px;
               color: rgba(var(--primary));
            }
            .free {
               font-size: 2rem;
               color: rgba(var(--primary));
               letter-spacing: 1px;
            }

            @media screen {
               @media (max-width: 510px) {
                  font-size: 1.7rem;
                  bottom: 1.5rem;

                  .code {
                     font-size: 1.1rem;
                     margin-right: 1px;
                  }
                  .free {
                     font-size: 1.25rem;
                     letter-spacing: 1px;
                  }
               }
            }
         }
      }

      .buttons {
         position: absolute;
         bottom: 1.5rem;
         right: 0;
         display: flex;
         gap: 1rem;
         .play-button {
            font-size: 1.6rem;
            padding: 0.3rem 2rem;
            color: rgba(var(--primary));
            border: 1px solid rgba(var(--primary));
            transition: 0.5s;

            &:hover {
               background-color: rgba(var(--primary), 0.2);
            }

            @media screen {
               @media (max-width: 580px) {
                  font-size: 1.3rem;
                  padding: 0.4rem 1.7rem;
               }
               @media (max-width: 430px) {
                  font-size: 1.1rem;
                  padding: 0.25rem 1.4rem;
               }
            }
         }

         .wishlist-button {
            font-size: 1.1rem;
            color: rgba(var(--secondary));
            border: 1px solid rgba(var(--secondary));
            transition: 0.5s;
            border-radius: 50%;
            padding: 5px;
            width: min-content;
            svg {
               fill: rgba(var(--secondary));
               font-size: 1.7rem;
               transition: 0.5s;
            }

            &:hover {
               color: rgba(var(--primary));
               border: 1px solid rgba(var(--primary));
               svg {
                  fill: rgba(var(--primary));
               }
            }

            @media screen {
               @media (max-width: 590px) {
                  svg {
                     font-size: 1.5rem;
                  }
               }
               @media (max-width: 430px) {
                  padding: 0.3rem;
                  svg {
                     font-size: 1.3rem;
                  }
               }
            }
         }
         @media screen {
            @media (max-width: 590px) {
               gap: 5px;
            }
            @media (max-width: 590px) {
               flex-direction: column;
               align-items: flex-end;
            }
         }
      }
      @media screen {
         @media (max-width: 1440px) {
            height: 10.2rem;
         }
         @media (max-width: 1100px) {
            height: 9.18rem;
         }
         @media (max-width: 510px) {
            height: 7.5rem;
         }
         @media (max-width: 380px) {
            height: 7rem;
         }
      }
   }

   &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: rgba(var(--light), 0.5);
      position: absolute;
      bottom: 0;
      left: 0;
   }

   &:nth-child(1) {
      padding-top: 0;
   }
   &:nth-last-child(1) {
      padding-bottom: 0;

      .buttons {
         bottom: 0;
      }
      &::after {
         display: none;
      }
   }
`;
