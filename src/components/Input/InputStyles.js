import styled from 'styled-components';

export const InputContainer = styled.div`
   margin: 0 auto;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   position: relative;
   padding-bottom: 1.8rem;

   .error {
      color: rgba(var(--red));
   }
   .input-error {
      color: rgba(var(--red));
      border: 1px solid rgba(var(--red));
      &::placeholder {
         color: rgba(var(--red), 0.5);
      }
   }
`;

export const InputStyles = styled.input`
   padding-left: 1rem;
   height: 4rem;
   border-radius: 0.8rem;
   border: 1px solid rgba(var(--secondary));
   background-color: rgba(var(--light), 0.05);
   width: calc(100% - 1.4rem);
   font-weight: 200;
   font-size: 1.5rem;
   letter-spacing: 1px;
   color: rgba(var(--light), 1);
   transition: 0.5s;

   &:focus {
      outline: none;
      color: rgba(var(--primary));
      border: 1px solid rgba(var(--primary));
      &::placeholder {
         color: rgba(var(--primary), 0.2);
      }
   }

   &::placeholder {
      font-size: 1.7rem;
      font-weight: 200;
      letter-spacing: 1px;
      color: rgba(var(--secondary), 0.2);
   }
`;
export const Label = styled.label`
   font-weight: 500;
   font-size: 1.8rem;
   margin-left: 8px;
   margin-bottom: 2px;
   letter-spacing: 2px;

   @media screen {
      @media (max-width: 1024px) {
         font-size: 1.7rem;
      }
      @media (max-width: 768px) {
         font-size: 1.5rem;
      }
   }
`;

export const Error = styled.p`
   position: absolute;
   margin: 0.1rem 0 0 0;
   font-size: 1.4rem;
   color: rgba(var(--red));
   font-weight: 500;
   letter-spacing: 1px;
   bottom: 0;
   left: 8px;
   max-width: 34rem;
   overflow-x: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   @media screen {
      @media (max-width: 1024px) {
         font-size: 1.3rem;
      }
   }
`;
