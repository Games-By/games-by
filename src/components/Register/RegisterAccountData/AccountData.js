import styled from 'styled-components';

export const AccountData = styled.div`
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   gap: 2rem 0;
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

export const PhotoSelector = styled.div`
   width: 49%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 0;
   position: relative;

   label {
      margin-left: 0.8rem;
   }

   .file-selector {
      width: calc(100% - 3px);
      height: 4rem;
      display: flex;
      border: 1px solid rgba(var(--secondary));
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1px;
      border-radius: 0.6rem;
      margin: 0 auto;
      cursor: pointer;
      background-color: transparent;

      &::file-selector-button {
         background-color: rgba(var(--primary), 0.1);
         border: 0;
         border-right: 1px solid rgba(var(--secondary));
         color: rgba(var(--primary));
         height: 100%;
         cursor: pointer;
      }
   }

   .icon {
      font-size: 2.5rem;
      fill: rgba(var(--primary), 0.8);
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      transition: 0.3s;
   }
   @media screen {
      @media (max-width: 500px) {
         width: 100%;
      }
   }

   &:hover {
      .icon {
         fill: rgba(var(--primary));
      }
   }
`;
