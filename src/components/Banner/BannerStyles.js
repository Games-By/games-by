import styled from 'styled-components';

export const BannerContainerStyles = styled.div`
   height: 45rem;
   max-width: 190rem;
   z-index: 1;
   margin: 0 auto;

   .swiper {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      margin: 0 auto;
      height: 30rem;
      width: 80%;
      height: 100%;
      transition: 0.5s;
      cursor: pointer;
      .swiper-slide {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100%;
      }

      .swiper-pagination {
         bottom: 0rem;
         left: 0;
         padding: 1rem 0;
         background-color: rgba(0, 0, 0);

         .swiper-pagination-bullet {
            width: 2rem;
            height: 2rem;
            border: 1px solid rgba(var(--secondary));
            background-color: transparent;
            transition: 0.5s;
            opacity: 1;

            &:hover {
               border-color: rgba(var(--primary));
            }
         }
         .swiper-pagination-bullet-active {
            width: 3rem;
            border-radius: 1rem;
            border: 1px solid rgba(var(--primary));
            background-color: rgba(var(--primary));
            transition: 0.5s;
         }
      }
      .swiper-button-next {
         position: absolute;
         background-color: rgba(var(--dark), 0.4);
         width: 8rem;
         height: 67.9%;
         top: 0;
         right: -2rem;
         color: rgba(var(--light));
         transition: 0.3s;
         &::after {
            font-size: 5rem;
         }
         &:hover {
            color: rgba(var(--secondary));
            right: 0;
         }
      }
      .swiper-button-prev {
         position: absolute;
         background-color: rgba(var(--dark), 0.4);
         width: 8rem;
         height: 67.9%;
         top: 0;
         left: -2rem;
         color: rgba(var(--light));
         transition: 0.3s;
         &::after {
            font-size: 5rem;
         }
         &:hover {
            color: rgba(var(--secondary));
            left: 0;
         }
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 95%;
         }
         @media (max-width: 768px) {
            width: 100%;
         }
         @media (max-width: 620px) {
            .swiper-button-prev, .swiper-button-next {
               height: 63.5%;
            }
         }
      }
   }
   @media screen {
      @media (max-width: 768px) {
         height: 60vh;
      }
   }
`;

export const BannerStyle = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   background-image: url(${(props) => props.image});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
`;

export const BannerInfo = styled.div`
   background-color: rgba(var(--dark), 0.95);
   width: 100%;
   height: 25%;
   position: absolute;
   bottom: 4.4rem;
   padding-bottom: 1rem;
   cursor: auto;

   .title {
      margin: 1rem 0 0 1.5rem;
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: uppercase;
      color: rgba(var(--primary));
      background: linear-gradient(
         120deg,
         rgba(var(--secondary)),
         rgba(var(--primary))
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen {
         @media (max-width: 1024px) {
            font-size: 2.2rem;
         }
         @media (max-width: 768px) {
            position: absolute;
            top: 0;
         }
         @media (max-width: 620px) {
            position: initial;
            margin: 0;
         }
         @media (max-width: 400px) {
            font-size: 1.85rem;
         }
      }
   }

   .description {
      margin: 0 0 0 1.7rem;
      font-size: 1.2rem;
      max-width: 65rem;
      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.2rem;
         }
         @media (max-width: 620px) {
            margin: 0;
         }
         @media (max-width: 400px) {
            font-size: 1.1rem;
            width: 95%;
            margin: 0 auto;
         }
      }
   }

   .avaiable {
      position: absolute;
      right: 0rem;
      top: 0;
      margin: 0;
      font-size: 2rem;
      color: rgba(var(--primary));
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: rgba(var(--primary), 0.1);
      padding: 0.5rem;
      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.7rem;
         }
         @media (max-width: 620px) {
            width: 20rem;
            left: calc(50% - 10.5rem);
         }
      }
   }

   .star-icons {
      display: flex;
      align-items: center;
      gap: 3px;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      font-size: 1.5rem;
      letter-spacing: 3px;
      svg {
         fill: rgba(var(--yellow));
         height: 2rem;
         width: 1rem;
      }

      @media screen {
         @media (max-width: 620px) {
            width: 20rem;
            height: 2.5rem;
            left: calc(50% - 10.5rem);
            top: -2.5rem;
            justify-content: center;
            background-color: rgba(var(--dark), 0.95);
            padding: 0 0.5rem;
         }
      }
   }

   .buttons {
      display: flex;
      align-items: center;
      height: 3.5rem;
      justify-content: flex-end;
      align-self: flex-end;
      justify-self: flex-end;
      position: absolute;
      bottom: 1rem;
      right: 0;
      .button-wishlist {
         padding-left: 2rem;
         padding-right: 2rem;
         max-width: none;
         height: 100%;
         margin: 0;
         font-size: 1rem;
         letter-spacing: 1px;
         white-space: nowrap;
         display: flex;
         justify-content: center;
         align-items: center;

         .icon {
            width: 2.5rem;
            min-width: 2rem;
            height: 2.3rem;
            margin-right: 0.5rem;
         }

         @media screen {
            @media (max-width: 1024px) {
               padding: 0 1rem;
               font-size: 0.9rem;

               .icon {
                  width: 2rem;
               }
            }
         }
      }
      .button {
         height: 100%;
         padding: 0 2rem;
         font-size: 1rem;
         letter-spacing: 1px;
         white-space: nowrap;
         transition: 0.5s;

         &:hover {
            transform: scale(1.05);
         }

         @media screen {
            @media (max-width: 1024px) {
               padding: 0 1rem;
               font-size: 0.9rem;
            }
         }
      }

      @media screen {
         @media (max-width: 620px) {
            position: initial;
            justify-content: center;
            align-self: center;
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
         height: 26.5%;
         display: flex;
         flex-direction: column;
         justify-content: center;
      }
      @media (max-width: 620px) {
         justify-content: center;
         align-self: center;
         text-align: center;
         gap: 1rem;
         padding-top: 2.5rem;
      }
   }
`;
