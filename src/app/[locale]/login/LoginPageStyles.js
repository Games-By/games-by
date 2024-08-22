import styled from 'styled-components';

export const LoginPageStyles = styled.div`
   height: 100vh;
   min-height: 55rem;
   margin: 0 auto;
   overflow-y: hidden;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   position: relative;

   .back {
      position: fixed;
      left: 3rem;
      top: 3rem;
      font-size: 2rem;
      font-weight: 300;
      z-index: 10;
      background-color: rgba(var(--primary), 0.5);
      border: 1px solid rgba(var(--secondary), 0.5);
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2rem;
      gap: 5px;
      transition: 0.5s;

      &:hover {
         background-color: rgba(var(--secondary), 0.5);
      }

      @media screen {
         @media (max-width: 1024px) {
            left: 2rem;
            top: 2rem;
            font-size: 1.5rem;
         }
         @media (max-width: 850px) {
            left: 21vw;
         }
         @media (max-width: 600px) {
            left: 11vw;
         }
         @media (max-width: 480px) {
            left: 1rem;
            top: 1rem;
            font-size: 1rem;
         }
      }
   }

   &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('/assets/wallpapers/login.jpg');
      background-repeat: no-repeat;
      background-position: left;
      background-size: cover;
      opacity: 55%;
   }
   &::after {
      backdrop-filter: blur(0.6rem);
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
   }

   .ads {
      width: 60vw;

      @media screen and (max-width: 1024px) {
         display: none;
      }
   }
`;

export const LoginBox = styled.div`
   z-index: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   height: 100%;
   width: 40vw;
   border: 1px solid rgba(var(--secondary));
   border-right: none;
   background-color: rgba(var(--dark), 0.95);
   border-radius: 0;
   position: absolute;
   right: 0;
   transition: 0.5s;

   .logo {
      margin: 0 auto;
   }

   @media screen {
      @media (max-width: 1024px) {
         width: 50vw;
      }
      @media (max-width: 860px) {
         width: 80vw;
      }
      @media (max-width: 600px) {
         width: 90vw;
      }
      @media (max-width: 480px) {
         width: 100vw;
         background-color: rgba(var(--dark), 0.9);
      }
   }
`;

export const Inputs = styled.div`
   display: flex;
   flex-direction: column;
   width: 90%;
   max-width: 45rem;
   margin: 0 auto;
   gap: 0.5rem;
   position: relative;
   padding-bottom: 3rem;

   @media screen {
      @media (max-width: 600px) {
         width: 70%;
         min-width: 34rem;
      }
      @media (max-width: 390px) {
         width: 80%;
         min-width: 30rem;
      }
   }
`;

export const Access = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 3px;
   transform: translateY(-4rem);

   .forgot-passaword {
      font-size: 1.2rem;
      color: rgba(var(--primary), 0.7);
      cursor: pointer;
      transition: 0.5s;

      &:hover {
         color: rgba(var(--primary));
      }
   }

   .button {
      font-size: 1.5rem;
      width: 90%;
      padding: 8px 0;
      border: 1px solid rgba(var(--secondary));
      color: rgba(var(--secondary));
      background-color: rgba(var(--secondary), 0.1);

      &:hover {
         border: 1px solid rgba(var(--primary));
         color: rgba(var(--primary));
         background-color: rgba(var(--primary), 0.1);
      }
   }

   .or {
      font-size: 1.6rem;
      margin: 0.5rem 0;
      position: relative;
      &::before,
      &::after {
         content: '';
         height: 1px;
         width: 8rem;
         background-color: rgba(var(--light));
         position: absolute;
         top: 55%;
      }
      &::before {
         left: 150%;
      }
      &::after {
         right: 150%;
      }
   }
   .register {
      color: rgba(var(--primary));
      font-size: 1.6rem;
      letter-spacing: 1px;
      transition: 0.5s;

      &:hover {
         scale: 1.02;
         text-decoration: underline;
      }
   }
`;
