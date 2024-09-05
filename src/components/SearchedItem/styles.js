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
   border-radius: 1rem;
   transition: 0.5s;

   .title {
      margin: 0;
      font-size: 2rem;
      font-weight: 300;

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
      border: 1px solid transparent;
      transition: 0.3s;
   }

   &:hover {
      color: rgba(var(--primary));
      .cover {
         border: 1px solid rgba(var(--primary));
      }
   }
`;
