import styled from 'styled-components';

export const FiltersBox = styled.div`
   display: flex;
   flex-direction: column;
   height: 80vh;
   position: fixed;

   .toggle-filters {
      height: 5rem;
      width: 5rem;
      border-radius: 5px;
      font-size: 2.5rem;
      position: fixed;
      right: 1rem;
      top: 6.5rem;
      border: 1px solid transparent;
      background-color: rgba(var(--light-gray));
      z-index: 10;
      transition: 0.4s;

      svg {
         fill: rgba(var(--primary));
         stroke: rgba(var(--primary));
      }
      &:hover {
         border: 1px solid rgba(var(--primary));
      }
   }

   .title {
      width: 100%;
      margin: 1rem 0;
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 1px;
   }

   .container {
      background-color: rgba(var(--light-gray));
      padding: 2rem 1rem;
      width: 23rem;
      border-radius: 1rem;

      .filters {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         gap: 5px;
         margin: 1rem 0;

         * {
            margin: 0;
            font-weight: 400;
            letter-spacing: 2px;
            svg {
               padding: 0;
               font-size: 1.5rem;
            }
         }
      }

      @media (max-width: 1130px) {
         width: 16rem;
      }

      @media (max-width: 1024px) {
         width: 50%;
         min-width: 20rem;
         position: fixed;
         right: 6.5rem;
         z-index: 10;
      }
   }

   .apply {
      font-size: 1.8rem;
      color: rgba(var(--primary));
      border-color: rgba(var(--primary));
      background-color: transparent;
      text-transform: none;
      padding: 2px 2rem;
      margin: 3rem auto 0;
   }

   .clear {
      font-size: 1.2rem;
      color: rgba(var(--red));
      border: 0;
      background-color: transparent;
      text-transform: capitalize;
      padding: 0;
      margin-top: 3rem;

      svg {
         fill: rgba(var(--red));
         font-size: 1.8rem;
      }

      @media (max-width: 1024px) {
         margin-top: 1rem;
      }

      @media (max-width: 600px) {
         margin: 1rem auto 0;
      }
   }

   @media (max-width: 1024px) {
      position: static;
      width: 100%;
      height: auto;
   }
`;

export const AppliedFiltersBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 8px;
`;

export const FilterTag = styled.div`
   background-color: #333;
   color: rgba(var(--light));
   padding: 1px 1rem;
   border-radius: 2rem;
   font-size: 1rem;
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 1.3rem;

   span {
      cursor: pointer;
      color: rgba(var(--red));
      scale: 1.4;
   }
`;
