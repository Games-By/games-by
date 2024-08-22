import styled from 'styled-components';

export const AdvertisingSpaceStyles = styled.div`
   z-index: 1;
   background-color: rgba(var(--dark), 0.3);
   border-radius: 1rem;
   width: 90%;
   margin: 0 auto;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   padding: 1.5rem;
   flex-wrap: wrap;

   &::after {
      content: '';
      height: 3px;
      width: 60rem;
      left: calc(50% - 30rem);
      border-radius: 1px;
      background-color: rgba(var(--secondary));
      position: absolute;
      bottom: 0;
   }

   .ad {
      flex: 1 1 30%;
      min-width: 22rem;
      max-width: 100%;
   }

   @media screen and (max-width: 1200px) {
      width: 80%;
      flex: 1 1 45%;

      .ad {
         min-width: 20rem;
      }
      &::after {
         width: 40rem;
         left: calc(50% - 20rem);
      }
   }

   @media screen and (max-width: 860px) {
      display: none;
   }
`;
