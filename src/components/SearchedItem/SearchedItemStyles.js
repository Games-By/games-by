import styled from 'styled-components';

export const SearchedItemStyles = styled.li`
   width: 95%;
   margin: 0 auto;
   padding: 0.5rem;

   display: grid;
   grid-template-areas:
      'cover title'
      'cover date';
   grid-template-rows: 23% auto;
   align-items: center;
   justify-content: flex-start;
   border: 1px solid var(--light);
   border-radius: 1rem;
   transition: 200ms;
   position: relative;
   padding-bottom: 1rem;

   .title {
      grid-area: title;
      margin: 0;
      font-size: 2.3rem;
      font-weight: 300;
      align-self: flex-start;
   }
   .cover {
      grid-area: cover;
      object-fit: contain;
      width: auto;
      margin-right: 2rem;
      border-radius: 1rem;
   }
   .date {
      grid-area: date;
      font-size: 1.4rem;
      font-weight: 600;
      margin: 0;
      align-self: flex-start;
      color: var(--purple-1);
   }

   &::after {
      content: '';
      width: 100%;
      bottom: -1rem;
      height: 1px;
      background-color: var(--dark);
      position: absolute;

   }

   &:hover {
      border: 1px solid var(--purple-1);
   }
`;
