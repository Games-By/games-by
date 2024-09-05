import styled from 'styled-components';

export const ColumnsStyle = styled.div`
   width: 48%;
   max-width: 60rem;
   position: relative;
   .title {
      width: 100%;
      color: rgba(var(--primary));
      padding: 0;

      .text {
         font-size: 2rem;
      }
   }

   .games {
      width: 90%;
      margin: 0 auto;

      @media screen {
         @media (max-width: 1440px) {
            width: 95%;
         }
         @media (max-width: 410px) {
            width: 98%;
         }
      }
   }
   .view-more-button {
      position: absolute;
      right: 0;
      top: 2px;
      white-space: nowrap;
      padding: 0.2rem 1rem;
      font-size: 1rem;
      transition: 0.5s;

      &:hover {
         color: rgba(var(--primary));
         border: 1px solid rgba(var(--primary));
      }

      @media screen {
         @media (max-width: 768px) {
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         width: 80%;
         margin: 0 auto;
      }
      @media (max-width: 768px) {
         width: 90%;
      }
   }
`;
