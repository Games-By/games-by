import styled from 'styled-components';

export const DiscoverStyles = styled.section`
   background: rgb(33, 33, 33);
   background: linear-gradient(
      10deg,
      rgba(33, 33, 33, 0.5) 50%,
      rgba(0, 0, 0, 1) 50%
   );
   padding-bottom: 2rem;
   .content {
      width: 100%;
      margin: 6rem auto 0;
      max-width: 190rem;
      display: flex;
      justify-content: center;
      @media screen {
         @media (max-width: 1440px) {
            justify-content: space-between;
            width: 90%;
         }
         @media (max-width: 1024px) {
            flex-direction: column;
            width: 100%;
            margin: 4rem auto 0;
         }
      }
   }
`;

export const Call = styled.div`
   width: 40%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   align-content: center;

   .presentation {
      font-size: 3rem;
      margin: 0;

      font-weight: 600;
      .emphasys {
         font-weight: 300;
         font-size: 3.5rem;
         font-style: italic;
         letter-spacing: 2px;
         white-space: nowrap;
         background: linear-gradient(
            120deg,
            rgba(var(--primary)),
            rgba(var(--secondary))
         );
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
      }

      @media screen {
         @media (max-width: 1620px) {
            font-size: 2.8rem;

            .emphasys {
               font-size: 3.3rem;
            }
         }
         @media (max-width: 1230px) {
            font-size: 2.5rem;
            .emphasys {
               font-size: 2.7rem;
            }
         }
         @media (max-width: 600px) {
            font-size: 1.9rem;
            .emphasys {
               font-size: 2rem;
            }
         }
         @media (max-width: 450px) {
            font-size: 1.4rem;
            .emphasys {
               font-size: 1.6rem;
            }
         }
      }
   }

   .call {
      font-size: 3.5rem;
      white-space: nowrap;
      width: 100%;
      color: rgba(var(--primary));
      letter-spacing: 1px;
      font-weight: 700;

      @media screen {
         @media (max-width: 1620px) {
            font-size: 3rem;
         }
         @media (max-width: 1230px) {
            font-size: 2.5rem;
         }
         @media (max-width: 600px) {
            font-size: 2rem;
         }
         @media (max-width: 450px) {
            font-size: 1.6rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         width: 48%;
      }
      @media (max-width: 1024px) {
         width: 90%;
         text-align: center;
         margin: 0 auto;
      }
   }
`;

export const Portrait = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 1rem;
   width: 45%;

   .image-box {
      height: 100%;
      width: 33.333%;
      .image {
         object-fit: cover;
         clip-path: polygon(15% 0%, 100% 0, 85% 100%, 0 100%);
         border-radius: 2rem;
         width: 100%;
      }

      :nth-child(1) {
         transform: translateX(15%);
      }

      :nth-child(2) {
         border-radius: 0;
      }

      :nth-last-child(1) {
         transform: translateX(-15%);
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         width: 140%;
         transform: translateX(-15%);

         .image-box > .image {
            object-position: top;
            border-radius: 0;
         }
      }
      @media (max-width: 768px) {
         .image-box > .image {
            height: 25rem;
         }
      }
   }
`;
