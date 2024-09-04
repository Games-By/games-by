import styled from 'styled-components';

export const SideBarStyles = styled.div`
   z-index: 20;
   height: 100vh;
   width: 40rem;
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(var(--dark));
   transition: left 0.3s ease;

   @media screen {
      @media (max-width: 1520px) {
         width: 30rem;
      }
      @media (max-width: 1024px) {
         left: ${(props) => (props.isOpen ? '0' : '-100%')};
         z-index: 22;
      }
   }
`;
