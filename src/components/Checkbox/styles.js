import styled from 'styled-components';

export const CheckboxStyles = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   bottom: 0;
   left: 8px;
   margin: 0;

   input[type='checkbox'] {
      appearance: none;
      -webkit-appearance: none;
      transition: 0.5s;
      background-color: rgba(var(--light), 0.1);
      border: 1px solid rgba(var(--secondary));
      width: 2rem;
      height: 2rem;
      border-radius: 4px;
      transition: 0.5s;
      cursor: pointer;

      &:checked {
         background-color: rgba(var(--primary), 0.1);
         border: 1px solid rgba(var(--primary));
      }
      @media screen {
         @media (max-width: 768px) {
            width: 1.8rem;
            height: 1.8rem;
         }
      }
   }
   .check {
      z-index: -1;
      fill: rgba(var(--primary));
      position: absolute;
      left: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .text {
      font-size: 1.4rem;
      margin-left: 3px;
      letter-spacing: 1px;
      font-weight: 800;
      transition: 0.5s;

      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.3rem;
         }
         @media (max-width: 768px) {
            font-size: 1.25rem;
         }
      }
   }
`;
