import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   position: relative;
   width: 80%;
   height: calc(100% - 5rem);
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
   height: calc(25% + 1.5rem);
   background-color: rgba(var(--dark));
   bottom: 0;
   left: 0;

   .title {
      @media screen {
         @media (max-width: 1440px) {
            width: 40% !important;
         }
      }
   }

   .content {
      margin-top: 0.5rem;
      margin-left: 1.5rem;

      &:nth-child(1) {
         margin-top: 1rem;
      }
      @media screen {
         @media (max-width: 1440px) {
            width: 55%;
         }
         @media (max-width: 1024px) {
            width: 65%;
         }
         @media (max-width: 620px) {
            margin: 0.5rem auto 0;
            width: 85%;
            &:nth-child(1) {
               margin-top: 2.5rem;
            }
         }
      }
   }

   .buttons {
      position: absolute;
      right: 2rem;
      bottom: 0.5rem;
      height: 3.5rem;
      display: flex;
      gap: 1rem;

      .button {
         border-radius: 2rem;
      }
      @media screen {
         @media (max-width: 1440px) {
            height: 2.7rem;

            .one {
               width: 20rem;
            }
            .two {
               width: 9.5rem;
            }
         }
         @media (max-width: 620px) {
            height: auto;
            width: 22rem;
            left: calc(50% - 11rem);
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;

            .one {
               height: 2.7rem;
               width: 22rem;
            }
            .two {
               height: 2.7rem;
               width: 10rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
         height: 16rem;
      }
      @media (max-width: 620px) {
         height: 18rem;
      }
   }
`;

const BannerSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonDetails>
            <SkeletonEffect
               width={'50%'}
               height={'3rem'}
               className='content title'
            />
            <SkeletonEffect
               width={'70%'}
               height={'1.2rem'}
               className='content'
            />
            <SkeletonEffect
               width={'60%'}
               height={'1.2rem'}
               className='content'
            />
            <div className='buttons'>
               <SkeletonEffect
                  width={'17rem'}
                  height={'100%'}
                  className={'button one'}
               />
               <SkeletonEffect
                  width={'12rem'}
                  height={'100%'}
                  className={'button two'}
               />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default BannerSkeleton;
