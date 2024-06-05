import styled from 'styled-components';

export const ButtonLinkStyles = styled.div`
   font-family: var(--redditSans);
   font-weight: 300;
   font-size: 1.6rem;
   text-transform: uppercase;
   max-width: 20.6rem;
   background-color: rgba(56, 56, 56, 0.7);
   border-radius: 20px;
   cursor: pointer;
   text-decoration: none;
   margin: 0 auto;

   color: ${(props) => props.color || 'var(--light)'};
   border: 1px solid ${(props) => props.color || 'var(--light)'};

   a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      height: 100%;
   }
   svg {
      fill: ${(props) => props.color || 'var(--light)'};
      stroke: ${(props) => props.color || 'var(--light)'};
      object-fit: contain;
      height: 50%;
      width: 2.3rem;
      margin-right: 0.5rem;
   }
`;
