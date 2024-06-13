import styled from 'styled-components';

export const Switcher = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   padding: 1rem 0;
   background-color: var(--dark);
   position: absolute;
   right: 1rem;
   top: 5rem;
   z-index: 1;
   width: 20rem;
   border-radius: 2rem 0 2rem 2rem;
   border: 1px solid var(--purple-1);
   color: var(--light);
   transition: 0.5s;

   .language {
      text-align: center;
      width: 10rem;
      margin: 0 auto;
      color: var(--light);
      font-size: 1.5rem;

      &:hover {
         color: var(--purple-2);
      }
   }
   .active {
      color: var(--purple-1);
      text-decoration: underline;
   }
`;
