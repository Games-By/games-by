import React from 'react';
import styled from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   padding: 5px;
   margin: 1.5rem 0 0;
   max-width: 53rem;
   height: 8rem;
   display: flex;
   position: relative;

   @media screen {
      @media (max-width: 1120px) {
         height: 7rem;
         .image {
            width: 12rem;
            height: 7rem;
         }
      }
   }
`;
const SkeletonDetails = styled.div`
   margin-left: 5px;
   width: max-content;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;

   .buttons {
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      display: flex;
      gap: 1rem;
      .play-button {
         border-radius: 2rem;
      }
      .wishlist-button {
         border-radius: 50%;
      }

      @media screen {
         @media (max-width: 1024px) {
            gap: 5px;
            .play-button {
               height: 2rem;
               width: 4.4rem;
            }
            .wishlist-button {
               height: 2rem;
               width: 2rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         .name {
            height: 1.5rem;
         }
         .price {
            height: 2.1rem;
         }
      }
   }
`;
const HorizontalCardSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'15rem'} height={'8rem'} className='image' theme={'dark'} />
         <SkeletonDetails>
            <SkeletonEffect width={'13rem'} height={'1.8rem'} theme={'dark'} className={'name'} />
            <SkeletonEffect width={'7.8rem'} height={'2.5rem'} theme={'dark'} className={'price'} />
            <div className='buttons'>
               <SkeletonEffect
                  width={'2.5rem'}
                  height={'2.5rem'}
                  theme={'dark'}
                  className={'wishlist-button'}
               />
               <SkeletonEffect
                  width={'6.1rem'}
                  height={'2.5rem'}
                  theme={'dark'}
                  className={'play-button'}
               />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default HorizontalCardSkeleton;
