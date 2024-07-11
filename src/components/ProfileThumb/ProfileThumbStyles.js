import Link from 'next/link';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 5rem;
   @media screen {
      @media (max-width: 660px) {
         justify-content: flex-end;
         position: absolute;
         right: 9rem;
      }
   }
`;

export const ProfileThumbLink = styled(Link)`
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

   @media screen {
      @media (max-width: 660px) {
         width: 4rem;
         height: 4rem;
      }
   }
`;
