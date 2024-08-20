import styled from 'styled-components';

export const CopyrightStyles = styled.div`
   width: 100%;
   background-color: transparent;
   position: absolute;
   bottom: 0;
   left: 0;
   padding: 1rem 0;

   display: flex;
   justify-content: center;
   align-items: center;
   .message {
      margin: 0;
      font-size: 1.5rem;
      letter-spacing: 1px;
      .business {
         letter-spacing: 0;
         cursor: pointer;
         margin-right: 5px;

         &:hover {
            color: rgba(var(--primary));
         }
      }
      @media screen {
         @media (max-width: 600px) {
            font-size: 1.3rem;
         }
      }
   }
`;
