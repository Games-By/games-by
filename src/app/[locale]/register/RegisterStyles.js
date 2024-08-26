import styled from 'styled-components';

export const RegisterForm = styled.form`
   z-index: 1;
   margin: 4rem auto;
   background-color: rgba(var(--dark));
   border: 1px solid rgba(var(--secondary));
   width: 80rem;
   border-radius: 0.5rem;
   padding: 5rem 2.5rem 4rem;
   display: flex;
   flex-direction: column;
   gap: 3rem;

   .title {
      margin: 0 auto;
      font-size: 2rem;
      letter-spacing: 1px;
      color: rgba(var(--light));
   }

   .terms {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 0;
      font-weight: 400;

      a {
         color: rgba(var(--primary), 0.9);
         font-weight: 500;
         letter-spacing: 1px;
         margin-left: 2px;

         &:hover {
            color: rgba(var(--primary));
            text-decoration: underline;
         }
      }
      @media screen {
         @media (max-width: 500px) {
            font-size: 1.2rem;
         }
      }
   }

   .button {
      width: 15rem;
      height: 4.5rem;
      font-size: 2rem;
      padding: 8px 3rem;
      margin: 0 auto;
      background-color: rgba(var(--secondary), 0.1);
      border: 1px solid rgba(var(--primary));
      color: rgba(var(--primary));

      &:hover {
         scale: 1.01;
         background-color: rgba(var(--primary), 0.4);
         color: rgba(var(--light));
      }
      @media screen {
         @media (max-width: 500px) {
            padding: 0;
            font-size: 1.6rem;
            width: 12rem;
            height: 4rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         width: 75%;
         padding: 4rem 3rem 2rem;
      }
      @media (max-width: 768px) {
         width: 90%;
         padding: 3rem 1rem;
         min-width: 29rem;
      }
      @media (max-width: 500px) {
         background-color: rgba(var(--dark), 0.96);
         width: 100%;
         border: none;
         gap: 2rem;
         padding: 4rem 0;
      }
   }
`;
