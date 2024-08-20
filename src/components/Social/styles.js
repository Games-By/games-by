import styled from 'styled-components';

export const SocialStyles = styled.div`
   display: flex;
   gap: 1rem;
   font-size: 3rem;

   svg {
      transition: 0.5s;
      &:hover {
         scale: 1.08;
         fill: rgba(var(--primary));
      }

      @media screen {
         @media (max-width: 600px) {
            font-size: 2.3rem;
         }
      }
   }
`;
