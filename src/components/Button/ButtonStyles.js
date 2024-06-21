import styled from 'styled-components';

export const ButtonStyles = styled.button`
   font-family: var(--redditSans);
   font-weight: 300;
   font-size: 1.8rem;
   text-transform: uppercase;
   width: 60%;
   max-width: 20.6rem;
   background-color: rgba(56, 56, 56, 0.7);
   border-radius: 20px;
   cursor: pointer;
   text-decoration: none;
   margin: 1rem auto;
   padding: 0.8rem 3.5rem;

   color: ${(props) => props.color || 'rgba(var(--light))'};
   border: 1px solid ${(props) => props.color || 'rgba(var(--light))'};

   svg {
      fill: ${(props) => props.color || 'rgba(var(--light))'};
      stroke: ${(props) => props.color || 'rgba(var(--light))'};
      object-fit: contain;
      height: 50%;
      width: 2.3rem;
      margin-right: 0.5rem;
   }

   &:hover {
      transition: 0.2s;
      transform: scale(1.01);
      color: ${(props) => props.hoverColor || 'rgba(var(--light))'};
      border: 1px solid ${(props) => props.hoverColor || 'rgba(var(--light))'};
      svg {
         fill: ${(props) => props.hoverColor || 'rgba(var(--light))'};
         stroke: ${(props) => props.hoverColor || 'rgba(var(--light))'};
      }
   }
`;
