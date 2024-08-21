import styled from 'styled-components';

export const FooterSectionStyles = styled.div`
   width: 25rem;
   .title {
      font-size: 1.8rem;
      font-weight: 800;
      width: 100%;
      border-bottom: 1px solid rgba(var(--primary));
      margin-bottom: 5px;
      white-space: nowrap;

      @media screen {
         @media (max-width: 768px) {
            font-size: 1.35rem;
            font-weight: 700;
         }
         @media (max-width: 600px) {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 3px;
         }
      }
   }

   .itens {
      padding: 0;
      .item {
         line-height: 2.5rem;
         font-size: 1.5rem;
         transition: 0.5s;

         &:hover {
            text-decoration: underline;
            color: rgba(var(--primary));
            transform: translateX(2px);
         }

         @media screen {
            @media (max-width: 768px) {
               font-size: 1.3rem;
               line-height: 2rem;
            }
            @media (max-width: 600px) {
               font-size: 1rem;
               line-height: 1.5rem;
               font-weight: 300;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
         width: 20rem;
      }
      @media (max-width: 600px) {
         width: 15rem;
      }
   }
`;
