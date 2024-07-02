import styled from 'styled-components';

export const SearchMobileContainer = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   background-color: rgba(var(--dark), 0.9);
   left: 0;
   bottom: 0;
   z-index: 5;
   .close {
      position: absolute;
      background-color: rgba(var(--light));
      fill: rgba(var(--dark));
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem;
      border-radius: 50%;
      z-index: 10;
      font-size: 3.5rem;
      left: calc(50% - 2rem);
      top: 1rem;
   }
`;
