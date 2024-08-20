import React from 'react';
import styled from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   width: 25rem;
   min-width: 20rem;
   position: relative;
   border: 1px solid rgba(250, 250, 250, 0.1);
   border-radius: 1rem;
   .image {
      margin: 0 auto;
      border-radius: 1rem 1rem 0 0;

      @media screen {
         @media (max-width: 1440px) {
            height: 30rem;
         }
         @media (max-width: 768px) {
            height: 25rem;
         }
      }
   }
   @media screen {
      @media (max-width: 450px) {
         min-width: 16rem;
      }
   }
`;

const SkeletonDetails = styled.div`
   height: auto;
   min-height: calc(
      13.2rem + ${(props) => (props.height ? props.height : '0px')}
   );
   width: 100%;
   background-color: rgba(var(--dark));
   border-radius: 0 0 1rem 1rem;
   position: relative;

   .name {
      transform: translate(1rem, 5px);
      border-radius: 5px;

      @media screen {
         @media (max-width: 768px) {
            height: 2rem;
            transform: translate(0, 0);
         }
      }
   }

   .genre {
      transform: translate(1rem, 1rem);
      @media screen {
         @media (max-width: 768px) {
            height: 1.2rem;
            transform: translate(0, 3px);
         }
      }
   }

   .discount {
      position: absolute;
      right: 5px;
      transform: translate(0, 1.5rem);
      border-radius: 5px;

      @media screen {
         @media (max-width: 1440px) {
            transform: translate(0, 1rem);
         }

         @media (max-width: 768px) {
            transform: translate(0, 0);
            width: 7rem;
         }
      }
   }

   .price {
      position: absolute;
      bottom: 4.5rem;
      right: 0.5rem;

      @media screen {
         @media (max-width: 1440px) {
            height: 2.5rem;
         }

         @media (max-width: 768px) {
            height: 2.5rem;
            width: 8.6rem;
            bottom: 3.3rem;
         }
      }
   }

   .circle {
      border-radius: 50%;
      position: absolute;
      left: 5px;
      bottom: 1rem;
      @media screen {
         @media (max-width: 768px) {
            height: 2.7rem;
            width: 2.7rem;
            bottom: 5px;
         }
      }
   }

   .buy-button {
      border-radius: 2rem;
      position: absolute;
      right: 5px;
      bottom: 1rem;

      @media screen {
         @media (max-width: 768px) {
            height: 2.5rem;
            width: 11.8rem;
            bottom: 5px;
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         min-height: calc(
            12.1rem + ${(props) => (props.height ? props.height : '0px')}
         );
      }
      @media (max-width: 768px) {
         padding: 5px 0.7rem 0.7rem;
         width: calc(100% - 1.4rem);
         min-height: calc(
            8.3rem + ${(props) => (props.height ? props.height : '4px')}
         );
      }
   }
`;

const VerticalCardSkeleton = ({ discount = false }) => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'100%'} height={'30rem'} className='image' />
         <SkeletonDetails height={discount ? '1.7rem' : undefined}>
            <SkeletonEffect width={'85%'} height={'2.2rem'} className='name' />
            <SkeletonEffect width={'50%'} height={'1.5rem'} className='genre' />
            {discount && (
               <SkeletonEffect
                  width={'8rem'}
                  height={'1.7rem'}
                  className={'discount'}
               />
            )}
            <SkeletonEffect width={'10rem'} height={'3rem'} className='price' />
            <SkeletonEffect
               width={'3.2rem'}
               height={'3.2rem'}
               className='circle'
            />
            <SkeletonEffect
               width={'12.5rem'}
               height={'3rem'}
               className={'buy-button'}
            />
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default VerticalCardSkeleton;
