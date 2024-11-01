import styled from 'styled-components';
import { Link } from '../../../navigation';

export const HorizontalCardStyles = styled(Link)`
   padding: 5px;
   margin: 1.5rem 0 0;
   border-radius: 1rem;
   transition: 0.5s;
   position: relative;
   display: flex;
   cursor: pointer;

   .image {
      width: 15rem;
      height: 8rem;
      object-fit: cover;
      object-position: left top;
      border-radius: 1rem;

      @media screen {
         @media (max-width: 1120px) {
            width: 12rem;
            height: 7rem;
         }
         @media (max-width: 1024px) {
            width: 12rem;
            height: 7rem;
         }
      }
   }

   .game-discount-percentage {
      position: absolute;
      top: 1rem;
      left: 1rem;
      @media screen {
         @media (max-width: 1024px) {
            font-size: 0.8rem;
            top: 0.8rem;
            left: 0.8rem;
         }
      }
   }

   .game-data {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .game-name {
         font-size: 1.4rem;
         font-weight: 400;
         letter-spacing: 1px;
         max-width: 26rem;
         margin: 0;
         @media screen {
            @media (max-width: 1024px) {
               font-size: 1.2rem;
            }
         }
      }

      .prices {
         display: flex;
         flex-direction: column;
         align-items: flex-end;
         justify-content: flex-end;
         .game-discount {
            margin: 0;
            font-size: 1rem;

            @media screen {
               @media (max-width: 1024px) {
                  font-size: 0.9rem;
               }
            }
         }

         .game-price {
            font-size: 2rem;

            .code {
               font-size: 1.2rem;
               margin-right: 3px;
               color: rgba(var(--secondary));
            }
            .free {
               font-size: 2rem;
               color: rgba(var(--primary));
               letter-spacing: 1px;
            }

            @media screen {
               @media (max-width: 1024px) {
                  font-size: 1.6rem;
                  .code {
                     font-size: 1rem;
                  }
                  .free {
                     font-size: 1.6rem;
                  }
               }
            }
         }
      }

      .buttons {
         position: absolute;
         bottom: 5px;
         right: 5px;
         display: flex;
         align-items: flex-end;
         justify-content: flex-end;
         gap: 1rem;

         .play-button {
            font-size: 1.3rem;
            height: 2.5rem;
            padding: 0 1.5rem;
            color: rgba(var(--primary));
            border: 1px solid rgba(var(--primary));
            transition: 0.5s;

            &:hover {
               background-color: rgba(var(--primary), 0.2);
            }

            @media screen {
               @media (max-width: 1024px) {
                  max-height: 2rem;
                  padding: 0 1rem;
                  font-size: 1rem;
               }
            }
         }

         .wishlist-button {
            color: rgba(var(--secondary));
            border: 1px solid rgba(var(--secondary));
            transition: 0.5s;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            padding: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
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
               @media (max-width: 1024px) {
                  width: 2rem;
                  height: 2rem;
                  padding: 4px;
               }
            }
         }

         @media screen {
            @media (max-width: 1024px) {
               gap: 5px;
            }
         }
      }
   }

   &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: rgba(var(--light), 0.5);
      position: absolute;
      bottom: -5px;
      left: 0;
   }
   &:nth-last-child(1) {
      &::after {
         display: none;
      }
   }
   &:hover {
      background-color: rgba(var(--light-gray), 0.8);
   }
`;
