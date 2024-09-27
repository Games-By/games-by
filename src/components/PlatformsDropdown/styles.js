import styled from 'styled-components';

export const DropdownContainer = styled.div`
   position: relative;
   width: 100%;
`;

export const DropdownButton = styled.button`
   height: 4.6rem;
   background-color: rgba(var(--light), 0.05);
   border: 1px solid rgba(var(--secondary), 1);
   color: rgba(var(--secondary), 0.8);
   letter-spacing: 1px;
   border-radius: 0.6rem;
   padding: 0 1rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-between;
   user-select: none;
   position: relative;
   transition: 0.3s;
   width: inherit;
   font-family: var(--primary);
   font-weight: 500;
   font-size: 15px;
`;

export const DropdownIcon = styled.span`
   display: inline-block;
   transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
   transition: transform 0.3s ease;
   font-size: 1.6rem;
   svg {
      fill: rgba(var(--secondary), 0.6);
   }
`;

export const DropdownOptions = styled.div`
   position: absolute;
   top: calc(100% + 5px);
   left: 0;
   width: calc(100% - 2px);
   border-radius: 5px;
   overflow: hidden;
   box-shadow: 0px 4px 8px rgba(var(--dark));
   background-color: rgba(var(--dark));
   border: 1px solid rgba(var(--secondary));
   z-index: 10;
   cursor: pointer;
`;

export const DropdownOption = styled.div`
   padding: 1rem;
   font-size: 2rem;
   color: white;
   display: flex;
   justify-content: flex-start;
   width: inherit;
   label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
   }

   input {
      cursor: pointer;
      width: 100%;
   }

   .check-box {
      position: static;

      .check {
         left: 1.3rem;
         font-size: 1.4rem;
      }
   }
   &:hover {
      background-color: rgba(var(--secondary), 0.1);
   }
`;
