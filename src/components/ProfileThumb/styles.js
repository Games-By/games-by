import styled from 'styled-components';

export const ProfileContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 5rem;
   z-index: 5;
   @media screen {
      @media (max-width: 768px) {
         position: absolute;
         right: 0;
      }
   }
`;

export const ProfileThumbLink = styled.div`
   cursor: pointer;
   height: 5rem;
   width: 5rem;
   background-color: rgba(var(--primary));
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
      width: 60%;
      height: 60%;
   }

   @media screen {
      @media (max-width: 768px) {
         width: 3.5rem;
         height: 3.5rem;

         .profile-svg {
            width: 100%;
            height: 100%;
         }
      }
   }
`;
