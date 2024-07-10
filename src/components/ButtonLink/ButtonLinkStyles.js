import styled from 'styled-components';
import Link from 'next/link';

export const ButtonLinkContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const StyledLink = styled(Link)`
   font-weight: 300;
   font-size: 1.6rem;
   border-radius: 20px;
   cursor: pointer;
   text-decoration: none;
   margin: 0 auto;
   color: ${(props) => props.currentcolor || 'rgba(var(--light))'};
   background-color: ${(props) => props.bgcolor || 'transparent'};
   border: 1px solid ${(props) => props.currentcolor || 'rgba(var(--light))'};
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem;

   svg {
      fill: ${(props) => props.currentcolor || 'rgba(var(--light))'};
      stroke: ${(props) => props.currentcolor || 'rgba(var(--light))'};
      object-fit: contain;
      height: 50%;
      width: 2.3rem;
   }
`;
