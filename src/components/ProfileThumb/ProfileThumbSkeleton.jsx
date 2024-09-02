import SkeletonEffect from '@/components/Skeleton';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
   width: 13rem;
   background-color: rgba(var(--light-gray));
   border-radius: 3rem;
   padding: 2px 3rem 2px 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;

   .photo {
      border-radius: 50%;
   }
`;

const ProfileThumbSkeleton = () => {
   return (
      <SkeletonContainer>
         <SkeletonEffect
            width={'3.5rem'}
            height={'3.5rem'}
            className={'photo'}
         />
         <SkeletonEffect width={'6rem'} height={'1.5rem'} />
      </SkeletonContainer>
   );
};

export default ProfileThumbSkeleton;
