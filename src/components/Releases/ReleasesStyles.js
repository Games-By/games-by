import styled from 'styled-components';

export const ReleaseStyles = styled.section`
   padding: 5rem 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color: rgba(var(--dark-gray));
   .releases {
      display: flex;
      width: 96%;
      max-width: 160rem;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 2rem auto 0;
   }
`;
