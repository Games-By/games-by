import styled from 'styled-components';
import { Link } from '../../../navigation';

export const VarticalCardStyles = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   padding: 5px;
   border-radius: 1rem;
   transition: 0.5s;
   min-width: 15.5rem;
   max-width: 20rem;
   flex: 1 1 calc(20% - 2rem);
   .cover {
      width: 100%;
      height: 25rem;
      background-color: rgba(var(--light), 0.1);
      border-radius: 1rem;
      position: relative;

      img {
         height: 100%;
         width: 100%;
         border-radius: inherit;
         object-position: center;
         object-fit: cover;
      }
      .loading {
         z-index: 5;
         transition: 0.2s;
         position: absolute;
         top: 0;
         background-color: rgba(var(--light), 0.2);
         border-radius: 1rem;
         width: 100%;
         height: 25rem;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 1rem;
         text-transform: uppercase;
         color: rgba(var(--yellow));
         @media screen {
            @media (max-width: 768px) {
               height: 20rem;
            }
         }
      }
      .percentage {
         z-index: 1;
         position: absolute;
         top: 1rem;
         right: 0.5rem;
         font-size: 1.2rem;

         @media screen {
            @media (max-width: 768px) {
               font-size: 1.1rem;
            }
            @media (max-width: 500px) {
               font-size: 1rem;
            }
         }
      }

      @media screen {
         @media (max-width: 768px) {
            height: 20rem;
         }
      }
   }

   .infos {
      width: 100%;
      padding: 5px 0 0;
      transition: 0.5s;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;

      .name {
         width: 100%;
         font-size: 1.3rem;
         font-weight: 500;
         letter-spacing: 1px;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         @media screen {
            @media (max-width: 768px) {
               font-size: 1.25rem;
            }
         }
      }

      .amount {
         color: rgba(var(--light));
         text-align: right;
         position: relative;
         padding-top: ${(props) => props.discount && '1.8rem'};
         .discount {
            font-size: 1.25rem;
            margin: 0;
            letter-spacing: 1px;
            position: absolute;
            right: 0;
            top: 0;
            @media screen {
               @media (max-width: 768px) {
                  font-size: 1rem;
               }
            }
         }
         .code {
            color: rgba(var(--secondary));
            margin-right: 0.2rem;
            font-size: 1.3rem;
            font-weight: 300;
            letter-spacing: 1px;
            @media screen {
               @media (max-width: 768px) {
                  font-size: 1.1rem;
               }
            }
         }
         .value {
            font-size: 2rem;
            letter-spacing: 1px;
            @media screen {
               @media (max-width: 768px) {
                  font-size: 1.5rem;
               }
            }
         }

         @media screen {
            @media (max-width: 768px) {
               padding-top: ${(props) => props.discount && '1.4rem'};
            }
         }
      }

      .wishlist-button {
         font-size: 1.7rem;
         padding: 0.5rem;
         margin: 0;
         position: absolute;
         left: 0;
         bottom: 0;
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
            }
         }
      }

      .buy-button {
         width: 70%;
         font-size: 1rem;
         font-weight: 500;
         margin: 5px 0 0;
         padding: 0.6rem 0;
         white-space: nowrap;
         color: rgba(var(--primary));
         border: 1px solid rgba(var(--primary));
         transition: 0.5s;
         &:hover {
            scale: 1.01;
            background-color: rgba(var(--primary), 0.1);
         }

         @media screen {
            @media (max-width: 768px) {
               padding: 0.55rem 0;
               font-size: 0.9rem;
            }
         }
      }
   }

   &:hover {
      background-color: rgba(var(--light-gray), 0.8);
   }

   @media screen {
      @media (max-width: 768px) {
         width: 16rem;
         margin-bottom: 1rem;
      }
      @media (max-width: 600px) {
         min-width: 13rem;
      }
   }
`;
