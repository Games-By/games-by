import styled from 'styled-components';

export const HeaderStyle = styled.header`
   width: 100vw;
   min-width: 100.24rem;
   height: 8rem;
   background-color: var(--dark);
   display: flex;
   align-items: center;
   justify-content: space-between;

   .logo {
      object-fit: contain;
      width: 16rem;
      margin-left: 2rem;
   }
`;

export const Language = styled.div`
   cursor: pointer;
   margin: 0 3rem 0 1.5rem;
   position: relative;
   height: 5rem;
   width: 5rem;
   display: flex;
   align-items: center;
   justify-content: center;
`;
