import styled from 'styled-components';

export const ProfileThumbStyles = styled.div`
   cursor: pointer;
   height: 5rem;
   width: 5rem;
   background-color: rgba(var(--cyan));
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
      fill: rgba(var(--dark));
      stroke: rgba(var(--dark));
      color: rgba(var(--dark));
   }
`;
