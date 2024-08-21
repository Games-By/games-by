import styled from 'styled-components';

export const FooterStyles = styled.footer`
   border-top: 1px solid rgba(var(--secondary));
   padding: 8rem 1rem 5rem 18rem;
   position: relative;
   min-height: 20rem;

   .logo {
      position: absolute;
      left: 2rem;
      top: 1rem;

      @media screen {
         @media (max-width: 1024px) {
            width: 16rem;
         }
         @media (max-width: 600px) {
            width: 14rem;
            left: 1rem;
            top: 0;
         }
         @media (max-width: 460px) {
            width: 12rem;
            left: 0;
            top: 0;
         }
      }
   }

   .sections {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;

      @media screen {
         @media (max-width: 600px) {
            gap: 1rem;
            width: 95%;
         }
      }
   }

   .social {
      position: absolute;
      right: 4rem;
      top: 2rem;
      @media screen {
         @media (max-width: 768px) {
            right: 2rem;
         }
         @media (max-width: 600px) {
            right: 1rem;
         }
      }
   }

   .card-payment {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      img {
         object-fit: contain;
         border: 1px solid rgba(var(--secondary), 0.2);
         border-radius: 5px;
         display: flex;
         align-items: center;
         @media screen {
            @media (max-width: 600px) {
               width: 4rem;
               height: 3rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         padding: 10rem 1rem 5rem;
      }
      @media (max-width: 600px) {
         min-height: 15rem;
      }
      @media (max-width: 460px) {
         padding: 8rem 1rem 5rem;
      }
   }
`;
