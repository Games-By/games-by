import styled from 'styled-components';

export const DiscountPricePercentageStyles = styled.span`
   background-color: ${(props) => props.bgcolor || 'rgba(var(--red))'};
   padding: 0.3rem 0.5rem;
   font-size: 1rem;
   border-radius: 5px;
   font-weight: 600;

`;
