import React from 'react';
import styled, { keyframes } from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   padding: 10px;
   gap: 1rem;
`;
const SkeletonDetails = styled.div`
   flex: 1;
   gap: 0.5rem;
   display: flex;
   flex-direction: column;
`;

const SearchedItemSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect width={'7rem'} height={'10rem'} />
         <SkeletonDetails>
            <SkeletonEffect width={'90%'} height={'3rem'} />
            <SkeletonEffect width={'20%'} height={'2rem'} />
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default SearchedItemSkeleton;
