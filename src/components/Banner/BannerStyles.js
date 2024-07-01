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
   background-position: top -5rem center;
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
`;

export const BannerInfo = styled.div`
   background-color: rgba(var(--dark), 0.95);
   width: 100%;
   height: 25%;
   position: absolute;
   bottom: 4.5rem;
   padding-bottom: 1rem;
   cursor: auto;

   .title {
      margin: 1rem 0 0 1.5rem;
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: uppercase;
   }

   .description {
      margin: 0 0 0 1.7rem;
      font-size: 1.2rem;
      max-width: 80rem;
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
   }

   .buttons {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;
      right: 3rem;
      .button-wishlist {
         padding: 0.5rem 1.5rem;
         min-height: 2.5rem;
         font-size: 1rem;
         letter-spacing: 1px;
         white-space: nowrap;
         max-width: none;
         gap: 0.3rem;

         .icon {
            width: 2.5rem;
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
   }
`;
