import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   width: 25%;
   max-width: 33rem;
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
         @media (max-width: 520px) {
            height: 20rem;
         }
      }
   }
   @media screen {
      @media (max-width: 1024px) {
         width: 40%;
      }
      @media (max-width: 520px) {
         width: 45%;
      }
   }
`;
const SkeletonDetails = styled.div`
   width: calc(100% - 2rem);
   height: 19rem;
   padding: 1rem;
   background-color: rgba(var(--dark));
   border-radius: 0 0 1rem 1rem;

   .content {
      margin-top: 0.5rem;
   }

   .price {
      position: absolute;
      bottom: 5rem;
      right: 1rem;
   }

   .buttons {
      height: 3rem;
      width: 93%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: absolute;
      bottom: 1rem;

      .circle {
         border-radius: 50%;
      }
   }

   @media screen {
      @media (max-width: 1200px) {
         height: 15rem;
      }
      @media (max-width: 520px) {
         height: 13rem;
      }
   }
`;

const VerticalCardSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'100%'} height={'38rem'} className='image' />
         <SkeletonDetails>
            <SkeletonEffect width={'85%'} height={'3rem'} />
            <SkeletonEffect
               width={'50%'}
               height={'1.5rem'}
               className='content'
            />
            <SkeletonEffect width={'50%'} height={'3rem'} className='price' />
            <div className='buttons'>
               <SkeletonEffect
                  width={'3rem'}
                  height={'100%'}
                  className='circle'
               />
               <SkeletonEffect width={'10rem'} height={'100%'} />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default VerticalCardSkeleton;
