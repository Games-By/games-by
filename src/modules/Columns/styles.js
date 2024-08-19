import styled from 'styled-components';

export const ColumnsStyle = styled.div`
   width: 95%;
   max-width: 150rem;
   margin: 12rem auto 5rem;
   position: relative;
   gap: 6rem;
   display: flex;
   padding-bottom: 2rem;

   @media screen {
      @media (max-width: 1440px) {
         gap: 4rem;
      }
      @media (max-width: 1024px) {
         flex-direction: column;
      }
      @media (max-width: 510px) {
         width: 100%;
      }
   }
`;

export const Separator = styled.div`
   height: 105%;
   width: 4px;
   border-radius: 2px;
   background-color: rgba(var(--primary));
   position: absolute;
   top: 0;
   left: calc(50% - 2px);

   @media screen {
      @media (max-width: 1440px) {
         width: 2px;
         left: calc(50% - 1px);
      }
      @media (max-width: 1024px) {
         display: none;
      }
   }
`;
