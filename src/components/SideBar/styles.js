import styled from 'styled-components';

export const SideBarStyles = styled.div`
   z-index: 20;
   height: 100vh;
   width: 30rem;
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(var(--dark));
   transition: left 0.3s ease;
   display: flex;
   flex-direction: column;

   .logo {
      margin: 0 auto;
      border-bottom: 2px solid rgba(var(--dark-gray));
      padding: 2rem 0 1.5rem;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen {
         @media (max-width: 1440px) {
            padding: 1rem 0;
         }
      }
   }

   .dashboard-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      width: 10rem;
      height: 10rem;
      margin: 0 auto;
      font-size: 1.4rem;
      padding: 5px;
      border-radius: 1rem;
      background-color: rgba(var(--light-gray));
      transition: 0.4s;

      position: absolute;
      bottom: 1rem;
      left: calc(50% - 5.5rem);
      svg {
         transition: 0.4s;
         font-size: 3rem;
      }

      &:hover {
         color: rgba(var(--primary));
         svg {
            fill: rgba(var(--primary));
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         width: 25rem;
      }
      @media (max-width: 1024px) {
         left: ${(props) => (props.isOpen ? '0' : '-100%')};
         z-index: 22;
      }
   }
`;

export const GameGenres = styled.div`
   padding: 2rem 0 1.5rem;
   width: 90%;
   margin: 0 auto;
   border-bottom: 2px solid rgba(var(--dark-gray));

   .title {
      margin: 0;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.4rem;
   }
   .genres {
      padding: 0;
      display: flex;
      gap: 1rem 0;
      flex-wrap: wrap;

      li {
         width: 50%;
         text-align: left;
         color: rgba(var(--light), 0.5);
         text-transform: capitalize;
         font-size: 1.1rem;
         font-weight: 400;
         transition: 0.4s;

         &:hover {
            color: rgba(var(--light));
            font-weight: 500;
         }
      }
   }
`;
