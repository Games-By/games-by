import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   position: relative;
   width: 80%;
   height: calc(100% - 4rem);
   margin: 0 auto;
   border: 1px solid rgba(250, 250, 250, 0.1);

   @media screen {
      @media (max-width: 1024px) {
         width: 95%;
      }
      @media (max-width: 768px) {
         width: 100%;
      }
   }
`;
const SkeletonDetails = styled.div`
   position: absolute;
   width: 100%;
   height: calc(25% + 2rem);
   background-color: rgba(var(--dark));
   bottom: 0;
   left: 0;

   .content {
      margin-top: 1rem;
      margin-left: 2rem;
      @media (max-width: 620px) {
         margin: 1rem auto 0;
      }
   }

   .buttons {
      position: absolute;
      right: 2rem;
      bottom: 0.5rem;
      height: 3.5rem;
      display: flex;
      gap: 1rem;
      @media (max-width: 620px) {
         width: 20rem;
         left: calc(50% - (20rem / 2));
      }
   }

   @media screen {
      @media (max-width: 768px) {
         height: calc(26.5% + 3rem);
      }
   }
`;

const BannerSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonDetails>
            <SkeletonEffect width={'40%'} height={'3rem'} className='content' />
            <SkeletonEffect width={'70%'} height={'1rem'} className='content' />
            <SkeletonEffect width={'60%'} height={'1rem'} className='content' />
            <div className='buttons'>
               <SkeletonEffect width={'15rem'} height={'100%'} />
               <SkeletonEffect width={'10rem'} height={'100%'} />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default BannerSkeleton;
