import styled from 'styled-components';

export const TitleStyle = styled.h2`
   font-size: 3rem;
   color: rgba(var(--light));
   font-weight: 300;
   letter-spacing: 2px;
   border-bottom: 1px solid rgba(var(--secondary));
   width: 90%;
   padding-bottom: 0.4rem;
   margin: 0 auto 2rem;
   max-width: 190rem;
   text-transform: capitalize;

   @media screen {
      @media (max-width: 915px) {
         font-size: 2.7rem;
      }
   }
`;
