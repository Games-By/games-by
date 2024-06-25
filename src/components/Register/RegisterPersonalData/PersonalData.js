import styled from 'styled-components';

export const PersonalData = styled.div`
   margin: 0 auto;
   display: flex;
   gap: 3rem;
   flex-wrap: wrap;
   justify-content: space-between;
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
         width: 95%;
         gap: 3rem 1rem;
      }
   }
`;

export const Gender = styled.div`
   position: relative;
   width: 46%;
   height: 6rem;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   padding: 0 0.5rem;

   .selector {
      height: 70%;
      width: 100%;
      background-color: rgba(var(--light));
      border: 1px solid rgba(var(--purple-1), 0.6);
      border-radius: 0.6rem;
      padding-left: 1rem;
      cursor: pointer;

      option {
         font-size: 1.5rem;
      }

      &:focus {
         outline: none;
      }
   }

   label {
      margin-left: 0.5rem;
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
      color: rgba(var(--red));;
      border: 2px solid rgba(var(--red));
   }

   @media screen {
      @media (max-width: 500px) {
         width: 100%;
      }
   }
`;
