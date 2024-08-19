import React from 'react';
import styled from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   padding: 0 0 1.5rem;
   margin: 3rem 0 0;
   display: flex;
   align-items: flex-start;
   justify-content: flex-end;
   position: relative;

   &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: rgba(var(--light), 0.5);
      position: absolute;
      bottom: 0;
      left: 0;
   }
   &:nth-child(1) {
      padding-top: 0;
   }
   &:nth-last-child(1) {
      padding-bottom: 0;

      &::after {
         display: none;
      }
   }
   .image {
      position: absolute;
      left: 0;
      display: flex;

      @media screen {
         @media (max-width: 1440px) {
            width: 17rem;
            height: 10.2rem;
         }
         @media (max-width: 1100px) {
            width: 15.3rem;
            height: 9.18rem;
         }
         @media (max-width: 510px) {
            width: 10rem;
            height: 6rem;
         }
      }
   }
`;
const SkeletonDetails = styled.div`
   width: calc(100% - 21rem);
   height: 12rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   position: relative;

   .play-button {
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 2rem;
   }
   .wishlist-button {
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 2rem;
   }
   .price {
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 5px;
   }

   @media screen {
      @media (max-width: 1440px) {
         height: 10.2rem;
         width: calc(100% - 18rem);
         .name {
            height: 2.5rem;
         }
         .wishlist-button {
            width: 18.6rem;
            height: 2.5rem;
         }
      }
      @media (max-width: 1100px) {
         height: 9.18rem;
         width: calc(100% - 16.3rem);

         .wishlist-button {
            width: 3rem;
            height: 3rem;
         }
      }
      @media (max-width: 1440px) {
         .wishlist-button {
            width: 17rem;
            height: 2.5rem;
         }
      }
      @media (max-width: 590px) {
         .play-button {
            width: 6.6rem;
            height: 2.7rem;
         }
         .price {
            width: 3.5rem;
            height: 1.7rem;
         }
         .wishlist-button {
            width: 2.4rem;
            height: 2.4rem;
         }
      }
      @media (max-width: 510px) {
         height: 6rem;
         width: calc(100% - 11rem);
      }
   }
`;
const HorizontalCardSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect
            width={'20rem'}
            height={'12rem'}
            className='image'
            theme={'dark'}
         />
         <SkeletonDetails>
            <SkeletonEffect
               width={'50%'}
               height={'3rem'}
               theme={'dark'}
               className={'name'}
            />
            <SkeletonEffect
               width={'8rem'}
               height={'3rem'}
               theme={'dark'}
               className={'play-button'}
            />
            <SkeletonEffect
               width={'20rem'}
               height={'3rem'}
               theme={'dark'}
               className={'wishlist-button'}
            />
            <SkeletonEffect
               width={'4.5rem'}
               height={'2.6rem'}
               theme={'dark'}
               className={'price'}
            />
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default HorizontalCardSkeleton;
