import React from 'react';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
   gap: 10px;
`;

const SkeletonImage = styled.div`
   width: 40px;
   height: 40px;
`;

const SkeletonDetails = styled.div`
   flex: 1;
`;

const SkeletonLine = styled.div`
   margin-bottom: 5px;
   height: 10px;
`;

const SearchedItemSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonImage />
         <SkeletonDetails>
            <SkeletonLine width='80%' />
            <SkeletonLine width='60%' />
         </SkeletonDetails>
      </SkeletonContainer>
   );
};

export default SearchedItemSkeleton;
