import styled from 'styled-components';

export const RegisterStyles = styled.div`
   position: relative;
   min-height: calc(100vh - 1rem);
   display: flex;
   align-items: center;
   &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('/assets/wallpapers/register.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: cover;
      opacity: 85%;
      top: 0;
      left: 0;
      z-index: -1;
   }
   &::after {
      backdrop-filter: blur(0.3rem);
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
   }
   @media screen {
      @media (max-height: 1000px) {
         min-height: 95rem;
      }
   }
`;
export const RegisterForm = styled.form`
   z-index: 1;
   margin: 0 auto;
   background-color: rgba(var(--dark));
   border: 1px solid rgba(var(--secondary));
   width: 60%;
   max-width: 80rem;
   min-width: 65rem;
   border-radius: 1rem;
   padding: 3rem;
   display: flex;
   flex-direction: column;
   gap: 3rem;

   .terms {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 0;

      a {
         color: rgba(var(--primary));
         font-weight: bold;
         letter-spacing: 1px;
         text-decoration: underline;
      }
   }

   @media screen {
      @media (max-width: 768px) {
         width: 90%;
         padding: 3rem 1rem;
         min-width: 29rem;
      }
      @media (max-width: 500px) {
         width: 85%;
         margin: 3rem auto;
      }
   }
`;

export const Title = styled.h2`
   font-size: 2rem;
   width: 100%;
   margin: 0;
   color: rgba(var(--secondary));
   border-bottom: 1px solid rgba(var(--secondary));
`;
