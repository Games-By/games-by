import styled from 'styled-components';

export const Images = styled.div`
   background-color: rgba(33, 33, 33, 0.5);
   width: 100vw;

   .images-container {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      padding: 5rem 0;
      gap: 5rem;
      width: 90%;
      max-width: 170rem;
      height: 25rem;
      transition: 0.5s;
      .image {
         width: 30%;
         height: 100%;
         border-radius: 2rem;
         object-fit: cover;
      }
      @media screen {
         @media (max-width: 1240px) {
            height: 20rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         display: none;
      }
   }
`;
