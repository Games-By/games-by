import styled from 'styled-components';

export const AccountData = styled.div`
   margin: 0 auto;
   display: flex;
   gap: 3rem;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;

   .input {
      width: calc(50% - 1.5rem);
      align-self: flex-start;
      justify-self: flex-start;
      margin: 0;
      @media screen {
         @media (max-width: 500px) {
            width: 100%;
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
      }
   }
`;

export const PhotoSelector = styled.div`
   width: 46%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 0 1rem;

   label {
      margin-left: 0.5rem;
   }

   .file-selector {
      width: 100%;
      height: 4rem;
      display: flex;
      border: 1px solid rgba(var(--purple-1));
      font-size: 1.8rem;
      border-radius: 0.6rem;
      margin: 0 auto;
      cursor: pointer;

      &::file-selector-button {
         background-color: rgba(var(--light));
         border: 0;
         height: 100%;
         cursor: pointer;
      }

   }
   @media screen {
      @media (max-width: 500px) {
         width: 100%;
      }
   }
`;
