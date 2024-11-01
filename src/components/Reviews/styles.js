import styled from 'styled-components';

export const ReviewsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 20px;
   background-color: rgba(var(--light-gray), 0.3);
   border-radius: 10px;

   @media (max-width: 768px) {
      padding: 10px;
      gap: 15px;
   }

   @media (max-width: 480px) {
      padding: 8px;
      gap: 10px;
   }
`;

export const Comment = styled.div`
   display: flex;
   align-items: flex-start;
   padding: 15px;
   background-color: rgba(var(--dark-gray));
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-3px);
   }

   @media (max-width: 768px) {
      padding: 10px;
   }

   @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const ProfileImage = styled.img`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   margin-right: 15px;
   object-fit: cover;

   @media (max-width: 480px) {
      width: 50px;
      height: 50px;
      margin-right: 0;
      margin-bottom: 10px;
   }
`;

export const UserInfo = styled.div`
   display: flex;
   flex-direction: column;

   @media (max-width: 480px) {
      align-items: center;
      text-align: center;
   }
`;

export const Username = styled.div`
   font-size: 18px;
   font-weight: bold;
   color: rgba(var(--primary));
   letter-spacing: 1px;

   @media (max-width: 768px) {
      font-size: 16px;
   }

   @media (max-width: 480px) {
      font-size: 14px;
   }
`;

export const Rating = styled.div`
   font-size: 14px;
   color: rgba(var(--light), 0.75);
   margin-top: 5px;
   svg {
      fill: rgba(var(--yellow), 0.9);
   }

   @media (max-width: 768px) {
      font-size: 13px;
   }

   @media (max-width: 480px) {
      font-size: 12px;
   }
`;

export const CommentText = styled.div`
   margin-top: 10px;
   font-size: 16px;
   color: rgba(var(--light), 0.9);
   line-height: 1.5;

   @media (max-width: 768px) {
      font-size: 15px;
   }

   @media (max-width: 480px) {
      font-size: 14px;
      text-align: center;
   }
`;

export const DateInfo = styled.div`
   margin-top: 10px;
   font-size: 12px;
   color: #888;

   @media (max-width: 768px) {
      font-size: 11px;
   }

   @media (max-width: 480px) {
      font-size: 10px;
   }
`;

export const AddReviewContainer = styled.div`
   margin-top: 3rem;
   padding: 2rem;
   background-color: rgba(var(--light-gray), 0.3);
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .submit-button {
      padding: 1rem 2.5rem;
      background-color: rgba(var(--secondary), 0.1);
      color: rgba(var(--light));
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin: 0 auto;
      font-size: 1.5rem;
      border: 1px solid rgba(var(--light));

      &:hover {
         background-color: rgba(var(--secondary), 0.5);
      }
   }
`;

export const TextArea = styled.textarea`
   width: calc(100% - 2rem);
   padding: 10px;
   border: 1px solid rgba(var(--dark-gray), 0.3);
   border-radius: 5px;
   resize: none;
   height: 100px;
   font-size: 16px;
   color: rgba(var(--light), 0.9);
   background-color: rgba(var(--dark-gray), 0.9);
   &:focus {
      outline: none;
   }
`;

export const StarRatingContainer = styled.div`
   display: flex;
   gap: 5px;
`;

export const Star = styled.span`
   font-size: 24px;
   svg {
      fill: ${(props) => (props.selected ? 'rgba(var(--yellow))' : 'rgba(var(--light))')};
      cursor: pointer;
   }

   &:hover {
      svg {
         fill: rgba(var(--yellow), 0.5);
      }
   }
`;
