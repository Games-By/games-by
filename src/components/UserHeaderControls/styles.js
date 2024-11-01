import styled from 'styled-components';

export const UserControls = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   @media screen {
      @media (max-width: 768px) {
         gap: 5px;
      }
   }
`;

export const Language = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 21;

   .globe {
      font-size: 3rem;
      cursor: pointer;
      fill: rgba(var(--secondary), 0.8);
   }
`;
