import styled from 'styled-components';

export const SocialStyles = styled.div`
   display: flex;
   gap: 0.8rem;
   font-size: 2.5rem;

   a {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   svg {
      transition: 0.5s;
      &:hover {
         scale: 1.08;
         fill: rgba(var(--primary));
      }
   }
   @media screen {
      @media (max-width: 600px) {
         font-size: 2rem;
      }
   }
`;
