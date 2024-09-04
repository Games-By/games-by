import styled from 'styled-components';

export const FooterStyles = styled.footer`
   width: calc(100% - (28rem + 13rem));
   margin-left: 28rem;
   border-top: 1px solid rgba(var(--secondary), 0.3);
   background-color: rgba(var(--dark));
   padding: 6rem 1rem 3rem 12rem;
   position: relative;
   min-height: 20rem;

   .logo {
      position: absolute;
      left: 2rem;
      top: 1rem;
      @media screen {
         @media (max-width: 600px) {
            left: 1rem;
         }
      }
   }

   .sections {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;
   }

   .social {
      position: absolute;
      right: 2.5rem;
      top: 2rem;
      @media screen {
         @media (max-width: 600px) {
            right: 1.5rem;
         }
      }
   }

   .card-payment {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      bottom: 3rem;
      right: 2rem;
      gap: 5px;
      img {
         object-fit: contain;
         border: 1px solid rgba(var(--secondary), 0.2);
         border-radius: 5px;
         display: flex;
         align-items: center;
      }
      @media screen {
         @media (max-width: 600px) {
            right: 0.5rem;
            bottom: 2.5rem;
            img {
               width: 4rem;
               height: 2rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         width: calc(100% - 13rem);
         margin-left: 0;
      }
      @media (max-width: 600px) {
         width: calc(100% - 2rem);
         padding: 6rem 0 2rem 2rem;
      }
   }
`;
