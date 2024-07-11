import styled from 'styled-components';

export const DropdownStyles = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   padding: 1rem 0;
   background-color: rgba(var(--dark));
   position: absolute;
   top: 8rem;
   right: 5rem;
   z-index: 1;
   width: 15rem;
   border-radius: 0 0 2rem 2rem;
   border: 1px solid rgba(var(--purple-1));
   border-top: none;
   color: rgba(var(--light));
   transition: 0.5s;
   z-index: 2;

   &::before {
      content: '';
      height: 3rem;
      width: 15rem;
      background-color: transparent;
      position: fixed;
      top: 6rem;
   }

   .option {
      text-align: center;
      width: 10rem;
      margin: 0 auto;
      color: rgba(var(--light));
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
         fill: rgba(var(--light));
         margin-left: 1rem;
      }

      &:hover {
         color: rgba(var(--purple-2), 0.8);
         svg {
            fill: rgba(var(--purple-2));
         }
      }
   }

   @media screen {
      @media (max-width: 660px) {
         width: 70vw;
         max-width: 40rem;
         border-radius: 0 0 0 2rem;
         right: -100%;
         top: 6rem;
      }
   }
`;
