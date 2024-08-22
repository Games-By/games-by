import styled from 'styled-components';

export const PersonalData = styled.div`
   margin: 0 auto;
   display: flex;
   gap: 2rem 0;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: flex-start;
   width: 100%;

   .input {
      width: 49%;
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
      @media (max-width: 500px) {
         width: 90%;
      }
   }
`;

export const Gender = styled.div`
   position: relative;
   width: 49%;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   padding: 0 0 1.8rem 0;

   label {
      margin-left: 0.8rem;
   }

   .other {
      width: 80%;
      position: absolute;
      bottom: 2px;
      left: 0;
      padding: 0;
      input {
         border: transparent !important;
      }
   }

   .error {
      color: rgba(var(--red));
      border: 2px solid rgba(var(--red));
   }

   @media screen {
      @media (max-width: 500px) {
         width: 100%;
      }
   }
`;
