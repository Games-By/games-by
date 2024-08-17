import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
   width: auto;
   white-space: nowrap;
   padding: 0.5rem 1rem;
   font-size: 1rem;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 2rem;
   border: 1px solid rgba(var(--light));
   color: rgba(var(--light));
   svg {
      fill: rgba(var(--light));
      stroke: rgba(var(--light));
      object-fit: contain;
      height: 50%;
      width: 2.3rem;
   }
`;
