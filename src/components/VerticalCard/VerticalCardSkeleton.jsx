import React from 'react';
import styled from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   height: fit-content;
   position: relative;
   border-radius: 1rem;
   flex: 1 1 calc(20% - 2rem);
   min-width: 15.5rem;
   max-width: 20rem;
   padding: 5px;
   .image {
      margin: 0 auto;
      border-radius: 2rem;

      @media screen {
         @media (max-width: 768px) {
            height: 20rem;
         }
      }
   }
   @media screen {
      @media (max-width: 768px) {
         width: 16rem;
         margin-bottom: 1rem;
      }
      @media (max-width: 600px) {
         min-width: 13rem;
      }
   }
`;

const SkeletonDetails = styled.div`
   height: ${(props) => (props.discount ? '10.1rem' : '8.3rem')};
   width: 100%;
   border-radius: 0 0 1rem 1rem;
   position: relative;

   .name {
      transform: translate(0, 5px);
      border-radius: 5px;

      @media screen {
         @media (max-width: 768px) {
            height: 1.4rem;
         }
      }
   }

   .discount {
      position: absolute;
      right: 0;
      top: 2.8rem;
      border-radius: 5px;

      @media screen {
         @media (max-width: 768px) {
            height: 1.3rem;
            width: 6rem;
            top: 2.2rem;
         }
      }
   }

   .price {
      position: absolute;
      right: 0;
      bottom: 3rem;

      @media screen {
         @media (max-width: 768px) {
            height: 1.8rem;
            width: 7.3rem;
            bottom: rem;
         }
      }
   }

   .circle {
      border-radius: 50%;
      position: absolute;
      left: 0;
      bottom: 0;
      @media screen {
         @media (max-width: 768px) {
            height: 2.6rem;
            width: 2.6rem;
         }
      }
   }

   .buy-button {
      border-radius: 2rem;
      position: absolute;
      right: 0;
      bottom: 0;

      @media screen {
         @media (max-width: 768px) {
            height: 2.6rem;
            width: 11.8rem;
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
         height: ${(props) => (props.discount ? '8.7rem' : '7.3rem')};
      }
   }
`;

const VerticalCardSkeleton = ({ discount = false }) => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'100%'} height={'25rem'} className='image' />
         <SkeletonDetails discount={discount}>
            <SkeletonEffect width={'80%'} height={'1.9rem'} className='name' />
            {discount && <SkeletonEffect width={'8rem'} height={'1.7rem'} className={'discount'} />}
            <SkeletonEffect width={'9.4rem'} height={'2.3rem'} className='price' />
            <SkeletonEffect width={'2.8rem'} height={'2.8rem'} className='circle' />
            <SkeletonEffect width={'12.6rem'} height={'2.7rem'} className={'buy-button'} />
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default VerticalCardSkeleton;
