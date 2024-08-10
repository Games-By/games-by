import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding: 10px;
   gap: 1rem;
`;

const SearchedItemSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'5rem'} height={'7rem'} />
         <SkeletonEffect width={'80%'} height={'2rem'} />
      </SkeletonContainer>
   );
};

export default SearchedItemSkeleton;
