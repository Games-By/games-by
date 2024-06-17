import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
   100% {
      transform: translateX(100%);
   }
`;

const SkeletonContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
   gap: 10px;
   align-items: flex-start;
`;

const SkeletonImage = styled.div`
   width: 7rem;
   height: 10rem;
   background-color: rgba(var(--dark), 0.5);
   border-radius: 8px;
   position: relative;
   overflow: hidden;

   &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
         90deg,
         rgba(255, 255, 255, 0) 0,
         rgba(255, 255, 255, 0.2) 20%,
         rgba(255, 255, 255, 0.5) 60%,
         rgba(255, 255, 255, 0)
      );
      animation: ${shimmerAnimation} 2s 1s infinite;
      content: '';
   }
`;

const SkeletonDetails = styled.div`
   flex: 1;
   gap: 0.5rem;
   display: flex;
   flex-direction: column;
   .title,
   .year {
      width: 90%;
      height: 3rem;
      background-color: rgba(var(--dark), 0.5);
      border-radius: 8px;
      position: relative;
      overflow: hidden;

      &::after {
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
         transform: translateX(-100%);
         background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
         );
         animation: ${shimmerAnimation} 2s infinite;
         content: '';
      }
   }
   .year {
      width: 20%;
      height: 2rem;
   }
`;

const SearchedItemSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonImage />
         <SkeletonDetails>
            <div className='title' />
            <div className='year' />
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default SearchedItemSkeleton;
