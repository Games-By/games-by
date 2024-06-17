import styled from 'styled-components';

export const SearchedItemStyles = styled.li`
   width: 95%;
   margin: 0 auto;
   padding: 0.5rem;

   display: grid;
   grid-template-areas:
      'cover title'
      'cover date';
   grid-template-rows: auto 80%;
   grid-template-columns: 8rem auto;
   justify-content: flex-start;
   align-items: center;
   border: 1px solid rgba(var(--light));
   border-radius: 1rem;
   transition: 200ms;
   position: relative;
   padding-bottom: 1rem;

   .title {
      grid-area: title;
      margin: 0;
      font-size: 2rem;
      font-weight: 500;
      align-self: flex-start;
   }
   .cover {
      grid-area: cover;
      object-fit: cover;
      border-radius: 0.8rem;
      max-width: 7rem;
   }
   .date {
      grid-area: date;
      font-size: 1.4rem;
      font-weight: 600;
      margin: 0;
      align-self: flex-start;
      color: rgba(var(--purple-1));
   }

   &:hover {
      transition: 0.5s;
      background-color: rgba(var(--dark),.1);
      color: rgba(var(--dark));
   }
`;

export const Separator = styled.div`
   height: 2px;
   width: 95%;
   background-color: rgba(var(--purple-1));
   margin: 5px auto;
`;
