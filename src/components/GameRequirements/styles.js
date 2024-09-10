import styled from 'styled-components';

export const RequirementsStyles = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   .title {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(var(--secondary));
   }

   .game-data {
      margin-top: 5px;
      .key {
         text-transform: uppercase;
         color: rgba(var(--light), 0.4);
         font-weight: 600;
         &::after {
            content: ':';
            margin-right: 5px;
         }
      }
      .data {
         color: rgba(var(--primary));
         letter-spacing: 1px;
      }
   }

   @media screen {
      @media (max-width: 1400px) {
         flex-direction: row;
         width: 94%;
         max-width: 60rem;
         justify-content: center;
         gap: 2rem;
         padding: 2rem 0;
      }
      @media (max-width: 550px) {
         flex-direction: column;
         width: 94%;
         max-width: 35rem;
         justify-content: center;
         margin: 0;
         gap: 2rem;
         padding: 2rem 0;
      }
   }
`;
