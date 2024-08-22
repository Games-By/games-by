import styled from 'styled-components';

export const LoginPageStyles = styled.div`
   height: 100vh;
   min-height: 55rem;
   margin: 0 auto;
   overflow-y: hidden;
   display: flex;
   align-items: center;
   justify-content: space-around;
   position: relative;

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
`;

export const LoginBox = styled.div`
   z-index: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   height: 50rem;
   width: 45rem;
   border: 1px solid rgba(var(--secondary));
   background-color: rgba(var(--dark));
   border-radius: 1.1rem;

   .logo {
      margin: 0 auto;
   }
`;

export const Inputs = styled.div`
   display: flex;
   flex-direction: column;
   width: 95%;
   margin: 0 auto;
   gap: 0.5rem;
   position: relative;
   padding-bottom: 3rem;
`;

export const Access = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 3px;

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
      margin: .5rem 0;
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
