import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   width: 25rem;
   position: relative;
   border: 1px solid rgba(250, 250, 250, 0.1);
   border-radius: 1rem;
   .image {
      margin: 0 auto;
      border-radius: 1rem 1rem 0 0;

      @media screen {
         @media (max-width: 1440px) {
            height: 25rem;
         }
         @media (max-width: 768px) {
            height: 20rem;
         }
      }
   }
`;
const SkeletonDetails = styled.div`
   width: calc(100% - 2rem);
   height: calc(13rem - 2rem);
   padding: 5px 1rem 1rem;
   background-color: rgba(var(--dark));
   border-radius: 0 0 1rem 1rem;

   .content {
      margin-top: 0.5rem;
   }

   .price {
      position: absolute;
      bottom: 4rem;
      right: 0.8rem;

      @media screen {
         @media (max-width: 768px) {
            width: 35%;
            height: 2.1rem;
            bottom: 3.5rem;
         }
      }
   }

   .buttons {
      height: 2.5rem;
      width: 93%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: absolute;
      bottom: 1rem;

      .circle {
         border-radius: 50%;
      }
      @media screen {
         @media (max-width: 768px) {
            height: 2.1rem;
            width: 95%;
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         height: calc(12.1rem - 2rem);
      }
      @media (max-width: 768px) {
         padding: 5px 0.7rem 0.7rem;
         width: calc(100% - 1.4rem);
         height: calc(9.99rem - 2rem);
      }
   }
`;

const VerticalCardSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'100%'} height={'30rem'} className='image' />
         <SkeletonDetails>
            <SkeletonEffect width={'85%'} height={'2rem'} />
            <SkeletonEffect
               width={'50%'}
               height={'1.5rem'}
               className='content'
            />
            <SkeletonEffect width={'50%'} height={'2rem'} className='price' />
            <div className='buttons'>
               <SkeletonEffect
                  width={'2.5rem'}
                  height={'2.5rem'}
                  className='circle'
               />
               <SkeletonEffect width={'10rem'} height={'100%'} />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default VerticalCardSkeleton;
