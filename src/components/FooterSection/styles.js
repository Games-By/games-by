import styled from 'styled-components';

export const FooterSectionStyles = styled.div`
   width: 25rem;
   .title {
      font-weight: 800;
      width: 100%;
      border-bottom: 1px solid rgba(var(--primary));
      white-space: nowrap;
      padding: 0;
      .text {
         font-size: 1.3rem;
         letter-spacing: 1px;
      }

      @media screen {
         @media (max-width: 600px) {
            .text {
               font-size: 1rem;
               letter-spacing: 1px;
            }
         }
      }
   }

   .itens {
      padding: 0;
      .item {
         line-height: 1.8rem;
         font-size: 1.2rem;
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
