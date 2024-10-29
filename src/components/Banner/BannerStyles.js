import styled from 'styled-components';

export const BannerContainerStyles = styled.div`
   height: 45rem;
   z-index: 1;
   margin: 0 auto;
   background-color: rgba(var(--dark-gray));
   padding-top: ${(props) => (props.width > 1024 ? '8rem' : '6rem')};

   .swiper {
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      margin: 0 auto;
      width: 90%;
      height: calc(100% - 3rem);
      transition: 0.5s;
      max-width: 144rem;
      cursor: pointer;
      padding-bottom: 3rem;

      .swiper-slide {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100%;
      }

      .swiper-pagination {
         height: 3rem;
         bottom: 0;
         left: 0;
         background-color: rgba(var(--dark-gray));
         display: flex;
         align-items: center;
         justify-content: center;

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
         @media screen {
            @media (max-width: 768px) {
               .swiper-pagination-bullet {
                  width: 1.5rem;
                  height: 1.5rem;
               }
               .swiper-pagination-bullet-active {
                  width: 2rem;
               }
            }
         }
      }

      .swiper-button-prev,
      .swiper-button-next {
         position: absolute;
         background-color: rgba(var(--light-gray), 0.8);
         width: 5rem;
         height: 5rem;
         top: 3rem;
         color: rgba(var(--light));
         border: 1px solid rgba(var(--light));
         border-radius: 50%;
         transition: 0.3s;

         &::after {
            font-size: 2.5rem;
            font-weight: 800;
         }

         @media screen {
            @media (max-width: 1024px) {
               width: 4.5rem;
               height: 4.5rem;
               &::after {
                  font-size: 2rem;
               }
            }
            @media (max-width: 768px) {
               width: 4rem;
               height: 4rem;
               top: 2.5rem;
               &::after {
                  font-size: 1.8rem;
               }
            }
         }
      }
      .swiper-button-prev {
         left: auto;
         right: 6.5rem;
         &:hover {
            color: rgba(var(--secondary));
         }
         &:active {
            transform: translateX(-1px);
            color: rgba(var(--primary));
         }

         @media screen {
            @media (max-width: 768px) {
               right: 5rem;
            }
         }
      }
      .swiper-button-next {
         right: 1rem;
         &:hover {
            color: rgba(var(--secondary));
         }
         &:active {
            transform: translateX(1px);
         }
         @media screen {
            @media (max-width: 768px) {
               right: 0.5rem;
            }
         }
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 95%;
         }
         @media (max-width: 620px) {
            width: 98%;
         }
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
   border-radius: 2rem;
`;

export const BannerInfo = styled.div`
   background-color: rgba(var(--dark), 1);
   width: 100%;
   height: 25%;
   position: absolute;
   bottom: -1px;
   right: 0;
   left: 0;
   padding-bottom: 1rem;
   border-radius: 0 0 2rem 2rem;
   cursor: auto;

   .title {
      margin: 1rem 0 0 1.5rem;
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: uppercase;
      color: rgba(var(--primary));
      background: linear-gradient(120deg, rgba(var(--secondary)), rgba(var(--primary)));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen {
         @media (max-width: 1440px) {
            font-size: 2.3rem;
         }
         @media (max-width: 1024px) {
            font-size: 2rem;
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
      font-weight: 300;
      max-width: 65rem;
      color: rgba(var(--light), 0.8);
      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.2rem;
         }
         @media (max-width: 620px) {
            width: 96%;
            margin: 0 auto;
            transform: translateY(-1rem);
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
      font-size: 1.5rem;
      color: rgba(var(--primary));
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: rgba(var(--primary), 0.1);
      padding: 0.5rem 1.5rem;
      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.6rem;
         }
         @media (max-width: 850px) {
            font-size: 1.5rem;
            padding: 0.3rem 0.6rem;
         }
         @media (max-width: 620px) {
            font-size: 1rem;
            width: 20rem;
            padding: 0.2rem 0;
            left: calc(50% - 10rem);
         }
      }
   }

   .star-icons {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 1rem;
      left: 1.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 3px;
      svg {
         fill: rgba(var(--yellow));
         margin-right: 5px;
      }

      @media screen {
         @media (max-width: 620px) {
            font-size: 1.11rem;
            width: 20rem;
            height: 2.3rem;
            left: calc(50% - 10.5rem);
            top: -2.2rem;
            justify-content: center;
            align-items: center;
            background-color: rgba(var(--dark), 0.95);
            padding: 0;
            left: calc(50% - 10rem);

            svg {
               margin-right: 3px;
            }
         }
      }
   }

   .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      align-self: flex-end;
      justify-self: flex-end;
      gap: 1rem;
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
      .wishlist-button {
         padding: 0.5rem 2rem;
         max-width: none;
         margin: 0;
         font-size: 1rem;
         letter-spacing: 1px;
         white-space: nowrap;
         display: flex;
         justify-content: center;
         align-items: center;
         border: 1px solid rgba(var(--secondary), 0.75);
         color: rgba(var(--secondary), 0.75);
         transition: 0.5s;
         max-height: 3.5rem;

         .icon {
            transition: 0.5s;
            fill: rgba(var(--secondary), 0.75);
            font-size: 2rem;
         }

         &:hover {
            scale: 1.01;
            border: 1px solid rgba(var(--secondary));
            color: rgba(var(--secondary));

            .icon {
               fill: rgba(var(--secondary));
            }
         }

         @media screen {
            @media (max-width: 1440px) {
               padding: 0.5rem 1rem;
               font-size: 0.9rem;
               .icon {
                  font-size: 1.5rem;
               }
            }
            @media (max-width: 1024px) {
               padding: 0.5rem 1.5rem;
               font-size: 0.9rem;

               .icon {
                  width: 2rem;
               }
            }
         }
      }
      .buy-button {
         padding: 0.65rem 2rem;
         font-size: 1.3rem;
         letter-spacing: 1px;
         transition: 0.5s;
         color: rgba(var(--primary));
         border: 1px solid rgba(var(--primary));

         &:hover {
            transform: scale(1.03);
            background-color: rgba(var(--primary), 0.4);
            color: rgba(var(--light));
         }

         @media screen {
            @media (max-width: 1440px) {
               padding: 0.5rem 1.5rem;
               font-size: 1.2rem;
            }
         }
      }

      @media screen {
         @media (max-width: 620px) {
            position: initial;
            justify-content: center;
            align-self: center;
            flex-direction: column;
            margin-bottom: 5px;
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
         height: 15rem;
         display: flex;
         flex-direction: column;
         justify-content: center;
      }
      @media (max-width: 620px) {
         justify-content: center;
         align-self: center;
         text-align: center;
         gap: 1rem;
         padding-top: 2.6rem;
      }
   }
`;
