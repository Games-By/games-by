import styled from 'styled-components';

export const TitleStyle = styled.div`
   width: 96%;
   max-width: 160rem;
   padding: 0 1rem;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 1.5rem;
   border-bottom: 1px solid rgba(var(--primary));
   .text {
      white-space: nowrap;
      font-size: 3rem;
      font-weight: 500;
      text-transform: uppercase;
      color: rgba(var(--light));
      letter-spacing: 3px;
      margin: 0;

      @media screen {
         @media (max-width: 1440px) {
            font-size: 2.6rem;
            width: 94%;
         }
         @media (max-width: 1024px) {
            font-size: 2.2rem;
         }
         @media (max-width: 768px) {
            font-size: 1.5rem;
         }
         @media (max-width: 390px) {
            letter-spacing: 2px;
         }
      }
   }
   svg {
      font-size: 3.5rem;
      fill: rgba(var(--primary));
   }
   @media screen {
      @media (max-width: 1024px) {
         gap: 1rem;
         svg {
            font-size: 2.7rem;
         }
      }
      @media (max-width: 768px) {
         gap: 0.5rem;
         svg {
            font-size: 2.2rem;
         }
      }
   }
`;
