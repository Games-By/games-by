import styled from 'styled-components';

export const SearchedItemStyles = styled.li`
   width: 95%;
   height: 7rem;
   margin: 0 auto;
   padding: 0.5rem;
   display: flex;
   gap: 1rem;
   align-items: center;
   justify-content: flex-start;
   border: 1px solid rgba(var(--dark));
   backdrop-filter: blur(5rem);
   box-shadow: rgba(var(--secondary), 0.2) 0px 2px 8px 0px;
   border-radius: 1rem;
   transition: 0.5s;

   .title {
      margin: 0;
      font-size: 2rem;
      font-weight: 500;

      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.5rem;
         }
      }
   }
   .cover {
      border-radius: 0.8rem;
      object-fit: cover;
      height: 100%;
      width: 5rem;
   }

   &:hover {
      box-shadow: rgba(var(--primary), 0.2) 0px 2px 8px 0px;
      color: rgba(var(--primary));
   }
`;
