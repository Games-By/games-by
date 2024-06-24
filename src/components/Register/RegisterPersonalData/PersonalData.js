import styled from 'styled-components';

export const PersonalData = styled.div`
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
   }
`;

export const Gender = styled.div`
   position: relative;
   width: 47%;
   height: 6rem;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;

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
`;
