import styled from 'styled-components';

export const ProfileThumbStyles = styled.div`
   cursor: pointer;
   height: 5rem;
   width: 5rem;
   background-color: var(--cyan);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;

   .profile-image {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: contain;
   }

   .profile-icon {
      fill: var(--dark);
      stroke: var(--dark);
      color: var(--dark);
   }
`;
