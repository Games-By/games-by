import styled from 'styled-components';

export const DiscountPriceStyles = styled.p`
   position: relative;
   padding: 0 0.3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
   font-weight: 200;
   gap: 0.3rem;
   max-width: 7rem;
   margin: 0;

   color: rgba(var(--red));
   &::after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: rgba(var(--red), 0.75);
      top: 50%;
      left: 0;
      position: absolute;
      transform: rotate(-5deg);
   }
`;
