import styled from 'styled-components';

export const AdditionalInfoContainer = styled.div`
   border-radius: 10px;
   margin: 20px 0;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: flex-start;
   .full-width {
      width: 100%;
   }
   .width-50 {
      width: 50%;
   }
`;

export const SectionTitle = styled.p`
   font-weight: 300;
   font-size: 1.8rem;
   margin-bottom: 10px;
   letter-spacing: 2px;
   color: rgba(var(--primary));
   border-top: 1px solid rgba(var(--primary), 0.2);
   padding: 1rem 0 0 0;
   width: 100%;
`;

export const Section = styled.div`
   margin-bottom: 20px;
   display: flex;
   flex-wrap: wrap;
   gap: 0 1rem;
   height: fit-content;

   .updates {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
   }

   .items {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
   }

   @media screen {
      @media (max-width: 500px) {
         justify-content: center;
         width: 100%;
      }
   }
`;

export const DlcItem = styled.div`
   margin-left: 15px;
   background-color: rgba(var(--primary), 0.3);
   border-radius: 1rem;
   width: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   gap: 5px;
   padding-bottom: 5px;
   font-size: 1.2rem;
   font-weight: 600;
   max-width: 15rem;
   cursor: pointer;
   .cover {
      border-radius: 1rem 1rem 0 0;
      width: 100%;
   }
   span {
      width: 96%;
      margin: 0;
      white-space: pre-wrap;
   }

   @media screen {
      @media (max-width: 500px) {
         margin: 0 5px 1rem 0;
      }
   }
`;

export const UpdateItem = styled.div`
   margin-left: 15px;
   p {
      margin: 0;
      letter-spacing: 1px;
      font-size: 1.5rem;
      cursor: default;
      span {
         letter-spacing: 0;
         margin: 0 5px 0 0;
         font-size: 1.4rem;
         color: rgba(var(--light), 0.5);
      }

      &:hover {
         color: rgba(var(--primary));
      }
   }
`;

export const AwardItem = styled.div`
   margin-left: 15px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border: 1px solid rgba(var(--light), 0.5);
   padding: 1rem;
   border-radius: 5px;
   .award {
      margin: 0 0 1rem;
      font-size: 1.5rem;
      color: rgba(var(--light), 0.5);
   }
   .category {
      font-size: 1.3rem;
      font-weight: 500;
      color: rgba(var(--primary));
      text-transform: uppercase;
      margin: 0;
   }
   svg {
      font-size: 6rem;
      fill: rgba(var(--yellow));
   }

   @media screen {
      @media (max-width: 500px) {
         padding: 5px;
         margin: 0 5px 1rem 0;
         .award {
            font-size: 1.2rem;
         }
         .category {
            font-size: 1rem;
         }
         svg {
            font-size: 4rem;
         }
      }
   }
`;

export const SocialMedias = styled.div`
   text-align: center;
   margin-top: 20px;
   font-size: 1.1rem;
   color: #333;
`;
