import styled from 'styled-components';

export const Nav = styled.nav`
   width: 90%;
   margin: 0 auto;
   border-bottom: 2px solid rgba(var(--dark-gray));
   padding: 2rem 0 1.5rem;

   ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 0;
      li {
         padding: 1rem;
         border-radius: 1rem;
         transition: 0.4s;
         .item {
            font-size: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            text-transform: uppercase;

            @media screen {
               @media (max-width: 1440px) {
                  font-size: 1.6rem;
               }
            }
         }

         &:hover {
            background-color: rgba(var(--light-gray));
         }
      }
      .active {
         background-color: rgba(var(--primary), 0.1);
         color: rgba(var(--primary));
         padding: 1rem;
         transition: 0.4s;

         &:hover {
            background-color: rgba(var(--primary), 0.2);
         }
      }

      @media screen {
         @media (max-width: 1440px) {
            gap: 1rem;
         }
      }
   }
`;
