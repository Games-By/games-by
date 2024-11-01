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
