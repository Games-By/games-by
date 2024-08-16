import styled from 'styled-components';

export const ButtonStyles = styled.button`
   font-family: var(--redditSans);
   font-weight: 300;
   font-size: 1.8rem;
   text-transform: uppercase;
   width: auto;
   max-width: 20.6rem;
   background-color: rgba(56, 56, 56, 0.7);
   border-radius: 20px;
   cursor: pointer;
   text-decoration: none;
   margin: 0.5rem auto;
   padding: 0.8rem 3.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 0.5s;
   color: rgba(var(--light));
   border: 1px solid rgba(var(--light));

   svg {
      fill: rgba(var(--light));
      stroke: rgba(var(--light));
      object-fit: contain;
   }

   &:hover {
      color: rgba(var(--light));
      border: 1px solid rgba(var(--light));
      svg {
         fill: rgba(var(--light));
         stroke: rgba(var(--light));
      }
   }
`;
