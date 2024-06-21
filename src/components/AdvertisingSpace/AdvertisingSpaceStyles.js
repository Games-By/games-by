import styled from 'styled-components';

export const AdvertisingSpaceStyles = styled.div`
   z-index: 1;
   background-color: rgba(var(--dark), 0.3);
   border-radius: 1rem;
   width: 50%;
   height: 50%;
   min-width: 35rem;
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
      background-color: rgba(var(--purple-2));
      position: absolute;
      bottom: 0;
   }
`;
