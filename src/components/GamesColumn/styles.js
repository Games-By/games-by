import styled from 'styled-components';

export const ColumnsStyle = styled.div`
   width: 50%;
   position: relative;
   .title {
      width: 100%;
      color: rgba(var(--primary));
   }

   .games {
      width: 90%;
      margin: 0 auto;

      @media screen {
         @media (max-width: 1440px) {
            width: 95%;
         }
      }
   }
   .view-more-button {
      position: absolute;
      right: 0;
      top: 0;
      white-space: nowrap;
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      transition: 0.5s;

      &:hover {
         background-color: rgba(var(--light), 0.5);
         scale: 1.03;
         color: rgba(var(--primary));
         border: 1px solid rgba(var(--primary));
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
