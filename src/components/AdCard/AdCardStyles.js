import styled from 'styled-components';

export const AdCardStyles = styled.div`
   div {
      height: 35rem;
      width: 25rem;
      background-color: rgba(var(--dark));
      border-radius: 1rem;
      border: 1px solid rgba(var(--light));
      cursor: pointer;

      &:hover {
         border: 1px solid rgba(var(--purple-2));
      }
   }
`;
