import styled from 'styled-components';

export const ButtonStyles = styled.button`
   font-family: var(--redditSans);
   font-weight: 300;
   font-size: 1rem;
   text-transform: uppercase;
   width: auto;
   max-width: 20rem;
   background-color: rgba(56, 56, 56, 0.7);
   border-radius: 20px;
   cursor: pointer;
   text-decoration: none;
   padding: 0.5rem 1rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   color: rgba(var(--light));
   border: 1px solid rgba(var(--light));
   transition: 0.5s;

   svg {
      fill: rgba(var(--light));
      stroke: rgba(var(--light));
   }
`;
