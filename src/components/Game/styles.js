import styled from 'styled-components';

export const GameBox = styled.div`
   position: relative;
   background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(var(--dark)) 50%
   );
   width: 70%;
   max-width: 140rem;
   height: auto;
   margin: 0 auto;
   border-radius: 2rem;
   padding: 4rem;

   .infos {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-left: 32rem;
      height: 42rem;
      .prices {
         position: absolute;
         right: 0;
         bottom: 2rem;
      }
      .platforms {
         position: absolute;
         bottom: 2rem;
      }
   }

   .cover {
      width: 30rem;
      height: 40rem;
      object-fit: cover;
      border-radius: 1rem;
      position: absolute;
   }
`;

export const Wallpaper = styled.div`
   border-radius: inherit;
   background-image: linear-gradient(
         to bottom,
         rgba(var(--dark), 0) 0%,
         rgba(var(--dark), 0.2) 20%,
         rgba(var(--dark), 0.4) 40%,
         rgba(var(--dark), 0.6) 60%,
         rgba(var(--dark), 1) 100%
      ),
      url(${(props) => props.image});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: top;
   height: 50%;
   max-height: 58rem;
   left: 0;
   width: 100%;
   position: absolute;
   top: 0;
   z-index: -1;
`;

export const GameTitle = styled.h3`
   font-size: 4.5rem;
   margin: 0;
   max-width: 80rem;
   white-space: pre-wrap;
`;

export const GameDescription = styled.p`
   font-size: 1.5rem;
   font-weight: 400;
   color: rgba(var(--light), 0.9);
   max-width: 55rem;
   white-space: pre-wrap;
   line-height: 2.1rem;
   letter-spacing: 1px;
   margin: 0;
   margin-top: 5rem;
`;

export const Genres = styled.div`
   margin-bottom: 3rem;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: 1rem;

   .title {
      width: 100%;
      margin: 0;
      font-size: 1.3rem;
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
`;

export const Buttons = styled.div`
   position: absolute;
   right: 4rem;
   top: 4rem;
   width: 25rem;
   display: flex;
   justify-content: flex-end;
   flex-wrap: wrap;
   gap: 1rem;
   border-radius: 1rem;
   .community {
      width: 18rem;
      margin-bottom: 2rem;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      padding: 0.8rem 0.5rem;
      transition: 0.5s;
      border: 1px solid rgba(var(--light), 0.1);
      color: rgba(var(--secondary), 1);
      background-color: rgba(0, 0, 0, 0.8);

      &:hover {
         background-color: rgba(0, 0, 0, 1);
         border: 1px solid rgba(var(--light), 1);
      }
   }

   .buy {
      width: calc(65% - 1rem);
      font-size: 1.7rem;
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(var(--primary), 0.9);
      color: rgba(var(--primary), 0.9);
      background-color: rgba(0, 0, 0, 1);

      transition: 0.5s;

      &:hover {
         border: 1px solid rgba(var(--primary), 1);
         color: rgba(var(--primary), 1);
      }
   }

   .cart {
      width: 26%;
      font-size: 2.3rem;
      border-radius: 1rem;
      background-color: transparent;
      transition: 0.5s;
      background-color: rgba(0, 0, 0, 1);
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
   }
`;

export const Rating = styled.div`
   .star-icons {
      font-size: 1.7rem;
      display: flex;
      gap: 1px;
   }
`;
