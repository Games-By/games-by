import styled from 'styled-components';

export const ColumnsStyle = styled.div`
   background-color: rgba(var(--dark-gray));
   width: 100%;
   padding: 8rem 0 5rem;

   .columns {
      max-width: 144rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      gap: 2rem;
      margin: 0 auto;
      width: 96%;
      @media screen {
         @media (max-width: 1024px) {
            gap: 1rem;
         }
         @media (max-width: 768px) {
            gap: 3rem;
            flex-direction: column;
            max-width: 50rem;
            width: 100%;
         }
      }
   }
   @media screen {
      @media (max-width: 768px) {
         padding: 4rem 0 2rem;
      }
   }
`;

export const Separator = styled.div`
   height: 45rem;
   width: 2px;
   border-radius: 2px;
   background-color: rgba(var(--primary));

   @media screen {
      @media (max-width: 1024px) {
         width: 1px;
         height: 41rem;
      }
      @media (max-width: 768px) {
         display: none;
      }
   }
`;
