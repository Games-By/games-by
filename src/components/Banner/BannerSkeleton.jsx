import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   position: relative;
   width: 90%;
   max-width: 144rem;
   height: calc(42rem - 2px);
   border-radius: 2rem;
   margin: 0 auto;
   border: 1px solid rgba(250, 250, 250, 0.1);

   @media screen {
      @media (max-width: 1024px) {
         width: 95%;
      }
      @media (max-width: 620px) {
         width: 98%;
      }
   }
`;
const SkeletonDetails = styled.div`
   position: absolute;
   width: 100%;
   height: 11.5rem;
   background-color: rgba(var(--dark));
   bottom: 0;
   left: 0;
   border-radius: 0 0 2rem 2rem;

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
         @media (max-width: 768px) {
            &:nth-child(2) {
               margin-top: 2.5rem;
            }
         }
         @media (max-width: 620px) {
            margin: 0.5rem auto 0;
            width: 85%;
            &:nth-child(1) {
               margin-top: 2.6rem;
            }
            &:nth-child(2) {
               margin-top: 5px;
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
            .one {
               width: 20.2rem;
               height: 2.7rem;
            }
            .two {
               width: 9.5rem;
               height: 2.7rem;
            }
         }
         @media (max-width: 1440px) {
            .one {
               width: 21.7rem;
            }
         }
         @media (max-width: 620px) {
            height: auto;
            width: 21.7rem;
            left: calc(50% - 11rem);
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            bottom: 1rem;

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
      @media (max-width: 1024px) {
         .line-2 {
            width: 45%;
         }
      }
      @media (max-width: 768px) {
         height: 16rem;
      }
      @media (max-width: 620px) {
         height: 18.6rem;

         .content {
            width: 90%;
         }
         .line-2 {
            width: 65%;
         }
      }
   }
`;

const BannerSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonDetails>
            <SkeletonEffect
               width={'40%'}
               height={'3rem'}
               className='content title'
               theme={'dark'}
            />
            <SkeletonEffect
               width={'55%'}
               height={'1.2rem'}
               className='content'
               theme={'dark'}
            />
            <SkeletonEffect
               width={'50%'}
               height={'1.2rem'}
               className='content line-2'
               theme={'dark'}
            />
            <div className='buttons'>
               <SkeletonEffect
                  width={'24.2rem'}
                  height={'3.2rem'}
                  className={'button one'}
                  theme={'dark'}
               />
               <SkeletonEffect
                  width={'12rem'}
                  height={'3.2rem'}
                  className={'button two'}
                  theme={'dark'}
               />
            </div>
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default BannerSkeleton;
