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

export const SearchBar = styled.div`
   width: 30%;
   min-width: 40rem;
   height: 50%;
   border-radius: 3rem;
   background-color: var(--light);
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   padding: 0 1rem 0 2rem;
   align-items: center;
   position: relative;
   .search {
      font-family: var(--reddit-sans), sans-serif;
      background-color: transparent;
      border: 0;
      width: 92%;
      height: 70%;
      border-right: 1px solid var(--purple-2);
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 1.4rem;

      &::placeholder {
         color: var(--dark);
         opacity: 0.5;
      }

      &:focus {
         outline: none;
         caret-color: var(--purple-2);
      }
   }
   .glass {
      width: 8%;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const SearchBox = styled.ul`
   width: 85%;
   position: absolute;
   right: 0;
   left: 2rem;
   top: 90%;
   padding: 1rem 0.5rem 0;
   border-radius: 1rem;
   background-color: var(--light);
   display: flex;
   justify-content: center;
   flex-direction: column;
   color: var(--dark);

   .searched-item {
      width: 95%;
      margin: 0 auto;
      padding: 1rem 0.5rem;
      font-size: 1.9rem;
      font-weight: 300;
      text-decoration: underline;
   }
`;

export const Profile = styled.div`
   cursor: pointer;
   height: 5rem;
   width: 5rem;
   background-color: var(--cyan);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;

   .profile-icon {
      fill: var(--dark);
      stroke: var(--dark);
      color: var(--dark);
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
