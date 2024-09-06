import styled from 'styled-components';

export const GameContainer = styled.div`
   margin: 8rem 0 2rem;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   gap: 3rem;
   padding: 0 3rem;
   .technical-information {
      height: 100vh;
      min-width: 30rem;
      background-color: rgba(var(--light-gray), 0.3);
      border-radius: 2rem;

      @media screen {
         @media (max-width: 1600px) {
            min-width: 25rem;
         }
         @media (max-width: 1400px) {
            width: 100%;
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         gap: 1.5rem;
      }
      @media (max-width: 1400px) {
         flex-direction: column;
      }
      @media (max-width: 1024px) {
         padding: 0 1rem;
      }
      @media (max-width: 768px) {
         margin: 6rem 0 2rem;
      }
   }
`;

export const GameBox = styled.div`
   background-image: linear-gradient(
         to bottom,
         rgba(var(--dark), 0) 0%,
         rgba(var(--dark), 0.5) 20%,
         rgba(var(--dark), 1) 40%
      ),
      url(${(props) => props.image});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   padding: 4rem;
   border-radius: 2rem;
   display: flex;
   flex-direction: column;
   align-items: flex-end;

   .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      .community-button {
         width: 18rem;
         border-radius: 0.5rem;
         font-size: 1.3rem;
         padding: 0.5rem 0;
         transition: 0.5s;
         border: 1px solid rgba(var(--light), 0.1);
         background-color: rgba(0, 0, 0, 0.8);
         margin-bottom: 2rem;

         &:hover {
            color: rgba(var(--secondary), 1);
            border: 1px solid rgba(var(--secondary), 1);
            background-color: rgba(0, 0, 0, 1);
         }
         @media screen {
            @media (max-width: 1600px) {
               margin-bottom: 1.6rem;
               width: 16rem;
            }
            @media (max-width: 600px) {
               margin-bottom: 1.2rem;
               width: 12rem;
               font-size: 1rem;
            }
         }
      }
   }

   .infos {
      width: 100%;
      display: grid;
      position: relative;
      grid-template-areas:
         'cover name name'
         'cover description description'
         'cover genres genres'
         'cover price price';
      gap: 1rem;
      justify-content: start;
      justify-items: stretch;

      .cover {
         grid-area: cover;
         width: 25rem;
         height: 33rem;
         object-fit: cover;
         border-radius: 1rem;

         @media screen {
            @media (max-width: 1440px) {
               width: 22rem;
               height: 30rem;
            }
            @media (max-width: 768px) {
               width: 100%;
               height: 30rem;
            }
            @media (max-width: 600px) {
               height: 25rem;
            }
            @media (max-width: 460px) {
               height: 20rem;
            }
         }
      }
      .name {
         grid-area: name;
      }
      .description {
         grid-area: description;
      }
      .price {
         grid-area: price;

         @media screen {
            @media (max-width: 768px) {
               justify-content: center;
               align-items: center;
               margin: 2rem 0;
            }
         }
      }
      .genres {
         grid-area: genres;
      }

      @media screen {
         @media (max-width: 768px) {
            grid-template-areas:
               'name'
               'cover '
               'description '
               'genres'
               'price '
               'buttons';
            text-align: center;
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         padding: 3rem;
      }
      @media (max-width: 1150px) {
         padding: 2rem;
      }
      @media (max-width: 1150px) {
         padding: 2rem 1rem;
      }
   }
`;

export const GameTitle = styled.h3`
   font-size: 3rem;
   letter-spacing: 1px;
   margin: 0;
   white-space: pre-wrap;
   width: calc(100% - 23rem);

   @media screen {
      @media (max-width: 1600px) {
         font-size: 2.5rem;
         width: calc(100% - 16rem);
      }
      @media (max-width: 1150px) {
         font-size: 2.2rem;
      }
      @media (max-width: 768px) {
         width: 100%;
         text-align: left;
      }
      @media (max-width: 460px) {
         font-size: 1.8rem;
      }
   }
`;

export const GameDescription = styled.p`
   font-size: 1.3rem;
   font-weight: 400;
   color: rgba(var(--light), 0.9);
   white-space: pre-wrap;
   line-height: 2rem;
   letter-spacing: 1px;
   margin: 0;
   width: calc(100% - 25rem);

   @media screen {
      @media (max-width: 1600px) {
         width: calc(100% - 17rem);
      }
      @media (max-width: 1150px) {
         font-size: 1.1rem;
         line-height: 1.5rem;
      }
      @media (max-width: 768px) {
         width: 100%;
         font-size: 1.3rem;
      }
      @media (max-width: 460px) {
         font-size: 1.1rem;
      }
   }
`;

export const Genres = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: 0 5px;

   .title {
      width: 100%;
      margin: 0;
      font-size: 1.3rem;
      letter-spacing: 1px;
      color: rgba(var(--light), 0.7);
   }
   .genre {
      font-size: 1.1rem;
      font-weight: 700;
      background-color: rgba(var(--primary), 0.2);
      color: rgba(var(--primary));
      border-radius: 15px;
      padding: 0.5rem 1.5rem;
   }

   @media screen {
      @media (max-width: 1600px) {
         .title {
            font-size: 1.2rem;
         }
         .genre {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
         }
      }
      @media (max-width: 768px) {
         text-align: center;
         justify-content: center;
         gap: 5px;
      }
      @media (max-width: 460px) {
         .title {
            font-size: 1rem;
         }
         .genre {
            font-size: 0.8rem;
            padding: 0.2rem 0.8rem;
         }
      }
   }
`;

export const Buttons = styled.div`
   grid-area: buttons;
   position: absolute;
   right: 0;
   top: 0rem;
   width: 22rem;
   display: flex;
   justify-content: flex-end;
   flex-wrap: wrap;
   gap: 1rem;
   border-radius: 1rem;

   .buy {
      width: 15.3rem;
      height: 3.8rem;
      font-size: 1.5rem;
      padding: 0;
      border-radius: 1rem;
      border: 1px solid rgba(var(--primary), 0.9);
      color: rgba(var(--primary), 0.9);
      background-color: rgba(0, 0, 0, 1);

      transition: 0.5s;

      &:hover {
         border: 1px solid rgba(var(--primary), 1);
         color: rgba(var(--primary), 1);
      }
      @media screen {
         @media (max-width: 1600px) {
            width: 9.8rem;
            height: 3.3rem;
            font-size: 1.7rem;
         }
      }
   }

   .cart {
      width: 5.5rem;
      height: 4rem;
      font-size: 2rem;
      border-radius: 1rem;
      background-color: transparent;
      transition: 0.5s;
      background-color: rgba(0, 0, 0, 1);
      @media screen {
         @media (max-width: 1600px) {
            width: 5rem;
            height: 3.5rem;
            font-size: 1.7rem;
         }
      }
   }
   .isInCart {
      border: 1px solid rgba(var(--red));
      .icon {
         fill: rgba(var(--red));
      }
   }
   .isNotInCart {
      border: 1px solid rgba(var(--primary));
      .icon {
         fill: rgba(var(--primary));
      }
   }

   .wish {
      width: inherit;
      max-width: none;
      padding: 0.6rem 0.5rem;
      font-size: 1.1rem;
      border-radius: 1rem;
      border: 1px solid rgba(var(--secondary));
      color: rgba(var(--secondary));
      svg {
         font-size: 1.5rem;
         fill: rgba(var(--secondary));
      }

      &:hover {
         border: 1px solid rgba(var(--primary));
         color: rgba(var(--primary));
         svg {
            transition: 0.5s;
            fill: rgba(var(--primary));
         }
      }

      @media screen {
         @media (max-width: 1600px) {
            padding: 5px 0;
            font-size: 0.85rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         width: 16rem;
      }
      @media (max-width: 768px) {
         position: initial;
         width: auto;
         flex-wrap: nowrap;
         flex-direction: column;
         width: 80%;
         max-width: 35rem;
         margin: 0 auto;

         .buy {
            width: 100%;
         }
         .cart {
            width: 100%;
            max-width: none;
         }

         .wish {
            width: 100%;
            padding: 0.6rem 1.5rem;
            white-space: nowrap;
         }
      }
   }
`;

export const Rating = styled.div`
   .star-icons {
      font-size: 1.5rem;
      display: flex;
      gap: 1px;
      letter-spacing: 3px;
   }

   @media screen {
      @media (max-width: 1600px) {
         .star-icons {
            font-size: 1.2rem;
         }
      }
      @media (max-width: 768px) {
         display: flex;
         align-items: flex-start;
         justify-content: flex-start;
         margin-bottom: 1rem;
      }
   }
`;
