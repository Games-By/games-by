import styled from 'styled-components';

export const Images = styled.div`
   background-color: rgba(var(--light-gray), 0.5);
   width: calc(100vw - 30rem);

   .paralaxes {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      padding: 5rem 0;
      gap: 5rem;
      width: 90%;
      max-width: 170rem;
      height: 20rem;
      transition: 0.5s;

      @media screen {
         @media (max-width: 1440px) {
            height: 18rem;
            width: 96%;
            gap: 1rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         width: calc(100vw - 25rem);
      }
      @media (max-width: 1024px) {
         display: none;
      }
   }
`;

export const Paralax = styled.div`
   width: 33%;
   height: 100%;
   position: relative;
   .image {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      object-fit: cover;
   }
   &::after {
      content: '';
      position: absolute;
      background-color: rgba(var(--dark), 0.5);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      transition: 0.5s;
   }

   .Innovation,
   .Immersion,
   .Exploration {
      z-index: 1;
      font-size: 3rem;
      position: absolute;
      width: 20rem;
      left: calc(50% - 10rem);
      height: 4rem;
      top: calc(50% - 2rem);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
   }

   .Exploration {
      color: rgba(var(--primary));
      letter-spacing: 2px;
      font-style: italic;
      text-decoration: underline;
   }
   .Immersion {
      color: rgba(var(--light));
      letter-spacing: 3px;
      font-style: oblique;
      font-weight: 600;
   }
   .Innovation {
      color: rgba(var(--secondary));
      letter-spacing: 3px;
      font-weight: 300;
   }

   &:hover {
      span {
         scale: 1.1;
      }

      &::after {
         background-color: rgba(var(--dark), 0.8);
      }
   }
`;
