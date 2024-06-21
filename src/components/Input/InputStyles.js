import styled from 'styled-components';

export const InputContainer = styled.div`
   margin: 0 auto;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   padding-bottom: 1.5rem;
   position: relative;

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
   min-height: 3rem;
   border-radius: 0.8rem;
   border: 0;
   padding: 0.5rem 0.5rem 0.5rem 1.5rem;
   font-size: 1.8rem;
   border: 1px solid rgba(var(--purple-1));
   width: 90%;
   margin: 0 auto;
   font-weight: 200;
   font-size: 1.5rem;
   letter-spacing: 1px;

   &:focus {
      outline: none;
   }

   &::placeholder {
      color: rgba(var(--light), 0.8);
   }
`;
export const Label = styled.label`
   font-size: 1.3rem;
   margin-left: 1.5rem;
   letter-spacing: 1px;
`;

export const Error = styled.p`
   position: absolute;
   margin: 0.1rem 0 0 0;
   font-size: 1.1rem;
   color: rgba(var(--red));
   font-weight: 600;
   letter-spacing: 1px;
   bottom: 0;
   left: 1.5rem;
`;
