import styled from 'styled-components';

export const BannerContainerStyles = styled.div`
   height: 38rem;
   max-width: 200rem;

   .swiper {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      margin: 0 auto;
      height: 30rem;
      width: 80%;
      height: 100%;
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
            border: 1px solid rgba(var(--purple-2));
            background-color: transparent;
            transition: 0.5s;
            opacity: 1;

            &:hover {
               border-color: rgba(var(--cyan));
            }
         }
         .swiper-pagination-bullet-active {
            width: 3rem;
            border-radius: 1rem;
            border: 1px solid rgba(var(--cyan));
            background-color: rgba(var(--cyan));
            transition: 0.5s;
         }
      }
      .swiper-button-next {
         position: absolute;
         background-color: rgba(var(--dark), 0.4);
         width: 8rem;
         height: 66.5%;
         top: 0;
         right: -2rem;
         color: rgba(var(--light));
         transition: 0.3s;
         &::after {
            font-size: 5rem;
         }
         &:hover {
            color: rgba(var(--purple-2));
            right: 0;
         }
      }
      .swiper-button-prev {
         position: absolute;
         background-color: rgba(var(--dark), 0.4);
         width: 8rem;
         height: 66.5%;
         top: 0;
         left: -2rem;
         color: rgba(var(--light));
         transition: 0.3s;
         &::after {
            font-size: 5rem;
         }
         &:hover {
            color: rgba(var(--purple-2));
            left: 0;
         }
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 90%;
         }
         @media (max-width: 825px) {
            width: 95%;
         }
         @media (max-width: 780px) {
            width: 100%;
         }
         @media (max-width: 720px) {
            .swiper-button-next,
            .swiper-button-prev {
               height: 51.5%;
            }
         }
         @media (max-width: 550px) {
            .swiper-button-next,
            .swiper-button-prev {
               height: 54.1%;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 550px) {
         height: 55rem;
      }
      @media (min-height: 1000px) {
         height: 56rem;
      }
      @media (max-height: 700px) {
         height: 60rem;
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
      @media screen {
         @media (max-width: 720px) {
            font-size: 2.8rem;
         }
         @media (max-width: 670px) {
            font-size: 2.3rem;
         }
         @media (max-width: 550px) {
            text-align: center;
            margin: 3rem 0 0;
         }
      }
   }

   .description {
      margin: 0 0 0 1.7rem;
      font-size: 1.2rem;
      max-width: 65rem;

      @media screen {
         @media (max-width: 1200px) {
            max-width: 60rem;
         }
         @media (max-width: 1130px) {
            max-width: 55rem;
         }
         @media (max-width: 1080px) {
            max-width: 50rem;
         }
         @media (max-width: 900px) {
            max-width: 45rem;
         }
         @media (max-width: 780px) {
            max-width: 42rem;
            font-size: 1.15rem;
         }
         @media (max-width: 720px) {
            max-width: 40rem;
            font-size: 1.2rem;
            line-height: 1.8rem;
            margin-top: 0.5rem;
         }
         @media (max-width: 600px) {
            width: 70%;
            max-width: 35rem;
         }
         @media (max-width: 550px) {
            width: 90%;
            max-width: none;
            min-width: 29rem;
            text-align: center;
            margin: 0 auto;
            line-height: 1.6rem;
         }
      }
   }

   .avaiable {
      position: absolute;
      right: 0rem;
      top: -0.4rem;
      margin: 0.4rem 0 0 1.7rem;
      font-size: 2rem;
      color: rgba(var(--cyan));
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: rgba(var(--cyan), 0.1);
      padding: 0.5rem;

      @media screen {
         @media (max-width: 600px) {
            font-size: 1.5rem;
         }
         @media (max-width: 550px) {
            left: calc(50% - 10rem);
            margin: 0;
            width: 20rem;
            display: flex;
            justify-content: center;
            align-items: center;
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
         @media (max-width: 550px) {
            bottom: 9.5rem;
            width: 20rem;
            left: calc(50% - 10rem);
            justify-content: center;
         }
      }
   }

   .buttons {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;
      right: 2rem;
      bottom: 1rem;
      .button-wishlist {
         padding: 0.5rem 2.5rem;
         min-height: 2.5rem;
         font-size: 1rem;
         letter-spacing: 1px;
         white-space: nowrap;
         max-width: none;
         min-height: 3.5rem;
         margin: 0;
         display: flex;
         justify-content: center;
         align-items: center;

         .icon {
            width: 2.5rem;
            min-width: 2rem;
            height: 2.3rem;
            margin-right: 0.5rem;
         }
      }
      .button {
         padding: 0.5rem 2rem;
         min-height: 2.5rem;
         font-size: 1rem;
         letter-spacing: 1px;
         white-space: nowrap;
         transition: 0.5s;

         &:hover {
            transform: scale(1.05);
         }
      }

      @media screen {
         @media (max-width: 720px) {
            flex-direction: column;
            width: auto;
            right: 1rem;
            align-items: flex-end;

            .button-wishlist,
            .button {
               width: 100%;
            }
         }
         @media (max-width: 550px) {
            flex-direction: column;
            align-items: center;
            width: 25rem;
            left: calc(50% - 12.5rem);
            gap: 0.8rem;
         }
      }
   }

   @media screen {
      @media (max-width: 720px) {
         height: 40%;
      }
   }
`;
