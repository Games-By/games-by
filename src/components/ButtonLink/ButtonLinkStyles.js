import styled from 'styled-components';

export const ButtonLinkStyles = styled.div`
   a {
      font-weight: 300;
      font-size: 1.6rem;
      border-radius: 20px;
      cursor: pointer;
      text-decoration: none;
      margin: 0 auto;
      background-color: ${(props) => props.bgColor || 'transparent'};
      color: ${(props) => props.color || 'rgba(var(--light))'};
      border: 1px solid ${(props) => props.color || 'rgba(var(--light))'};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
   }
   svg {
      fill: ${(props) => props.color || 'rgba(var(--light))'};
      stroke: ${(props) => props.color || 'rgba(var(--light))'};
      object-fit: contain;
      height: 50%;
      width: 2.3rem;
   }
`;
