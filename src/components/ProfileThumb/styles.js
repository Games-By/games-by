import styled from 'styled-components';

export const ProfileContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 5rem;
   z-index: 5;
`;

export const ProfileThumbLink = styled.div`
   cursor: pointer;
   height: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   background-color: rgba(var(--light-gray));
   border-radius: 3rem;
   padding: 0 1rem 0 5px;
   transition: 0.4s;

   .user-name {
      font-size: 1.3rem;
      letter-spacing: 1px;
   }

   .arrow-icon {
      font-size: 2rem;
      fill: transparent;
      stroke: rgba(var(--light), 0.5);
   }

   .profile-image {
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      object-fit: contain;
      background-color: rgba(var(--primary), 0.5);
   }

   .profile-icon {
      border-radius: 50%;
      background-color: rgba(var(--primary), 0.5);
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
         fill: rgba(var(--light));
         font-size: 2.5rem;
      }
   }

   &:hover {
      background-color: rgba(var(--secondary), 0.1);
   }

   @media screen {
      @media (max-width: 768px) {
         .profile-icon,
         .profile-image {
            width: 3rem;
            height: 3rem;

            svg {
               font-size: 2rem;
            }
         }
      }
   }
`;
