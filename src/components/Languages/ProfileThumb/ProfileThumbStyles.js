import styled from 'styled-components';

export const Profile = styled.div`
   cursor: pointer;
   height: 5rem;
   width: 5rem;
   background-color: var(--cyan);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;

   .profile-icon {
      fill: var(--dark);
      stroke: var(--dark);
      color: var(--dark);
   }
`;
