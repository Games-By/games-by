import React from 'react';
import styled from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   padding: 0 0 1.5rem;
   margin: 1.5rem 0 0;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   gap: 1rem;
   position: relative;
   height: 12rem;

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

      .buttons {
         bottom: 0;
      }

      &::after {
         display: none;
      }
   }
   .image {
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
            width: 12rem;
            height: 7.5rem;
         }
         @media (max-width: 380px) {
            width: 11rem;
            height: 7rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         height: 10.2rem;
      }
      @media (max-width: 1100px) {
         height: 9.18rem;
      }
      @media (max-width: 510px) {
         height: 7.5rem;
      }
      @media (max-width: 380px) {
         height: 7rem;
      }
   }
`;
const SkeletonDetails = styled.div`
   width: max-content;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;

   .buttons {
      position: absolute;
      right: 0;
      bottom: 1.5rem;
      display: flex;
      gap: 1rem;
      .play-button {
         border-radius: 2rem;
      }
      .wishlist-button {
         border-radius: 2rem;
      }

      @media screen {
         @media (max-width: 590px) {
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 5px;

            .play-button {
               height: 2.7rem;
               width: 6.575rem;
            }

            .wishlist-button {
               width: 2.7rem;
               height: 2.7rem;
            }
         }
         @media (max-width: 430px) {
            .play-button {
               height: 2.1rem;
               width: 5.518rem;
            }

            .wishlist-button {
               width: 2.1rem;
               height: 2.1rem;
            }
         }
      }
   }
   .price {
      border-radius: 5px;

      @media screen {
         @media (max-width: 590px) {
            height: 2rem;
         }
         @media (max-width: 430px) {
            width: 5rem;
            height: 1.8rem;
         }
      }
   }

   .name {
      @media screen {
         @media (max-width: 590px) {
            height: 2.5rem;
         }
         @media (max-width: 430px) {
            width: 12rem;
            height: 2.2rem;
         }
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
               width={'15rem'}
               height={'3rem'}
               theme={'dark'}
               className={'name'}
            />
            <SkeletonEffect
               width={'8rem'}
               height={'2.6rem'}
               theme={'dark'}
               className={'price'}
            />
            <div className='buttons'>
               <SkeletonEffect
                  width={'2.9rem'}
                  height={'2.9rem'}
                  theme={'dark'}
                  className={'wishlist-button'}
               />
               <SkeletonEffect
                  width={'8rem'}
                  height={'2.9rem'}
                  theme={'dark'}
                  className={'play-button'}
               />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default HorizontalCardSkeleton;
