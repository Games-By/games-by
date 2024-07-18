import styled from 'styled-components';

export const AdvertisingSpaceStyles = styled.div`
   z-index: 1;
   background-color: rgba(var(--dark), 0.3);
   border-radius: 1rem;
   height: 50%;
   min-width: 70rem;
   min-height: 37.5rem;
   max-height: 46rem;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 1.5rem;
   &::after {
      content: '';
      height: 3px;
      width: 60rem;
      border-radius: 1px;
      left: calc(50% - 30rem);
      background-color: rgba(var(--secondary));
      position: absolute;
      bottom: 0;
   }

   .ad {
      width: 30%;
   }

   @media screen {
      @media (max-width: 1200px) and (max-height: 970px) {
         display: none;
      }
      @media (max-width: 1200px) {
         width: 80%;
         height: 35%;
         min-width: 0;
         min-height: 40.1rem;
      }
   }
`;
