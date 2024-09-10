import styled from 'styled-components';

export const DiscoverStyles = styled.section`
   background: linear-gradient(
      10deg,
      rgba(var(--light-gray), 0.5) 50%,
      rgba(var(--dark-gray)) 50%
   );
   padding-bottom: 2rem;
   .content {
      width: 100%;
      margin: 6rem auto 0;
      max-width: 190rem;
      display: flex;
      justify-content: center;
      @media screen {
         @media (max-width: 1785px) {
            justify-content: space-between;
            width: 90%;
         }
         @media (max-width: 1180px) {
            flex-direction: column;
            width: 100%;
            margin: 4rem auto 0;
            padding-bottom: 0;
         }
      }
   }

   @media screen {
      @media (max-width: 1180px) {
         padding-bottom: 0;
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
      font-size: 2.3rem;
      margin: 0;
      font-weight: 500;
      letter-spacing: 1px;
      .emphasys {
         font-weight: 300;
         font-size: 2.5rem;
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
         @media (max-width: 1785px) {
            font-size: 2rem;
         }
         @media (max-width: 1280px) {
            font-size: 1.8rem;
            .emphasys {
               font-size: 2rem;
            }
         }
         @media (max-width: 540px) {
            font-size: 1.3rem;
            .emphasys {
               font-size: 1.4rem;
            }
         }
      }
   }

   .call {
      font-size: 2.2rem;
      white-space: nowrap;
      font-weight: 100;
      letter-spacing: 2px;
      text-transform: uppercase;
      width: 100%;
      margin: 3rem 0 0 1rem;
      color: rgba(var(--primary));

      @media screen {
         @media (max-width: 1785px) {
            font-size: 2rem;
         }
         @media (max-width: 1785px) {
            font-size: 1.75rem;
         }
         @media (max-width: 1280px) {
            font-size: 1.5rem;
         }
         @media (max-width: 1180px) {
            margin: 3rem auto 1rem;
         }
         @media (max-width: 540px) {
            font-size: 1.5rem;
            letter-spacing: 1px;
         }
         @media (max-width: 540px) {
            font-size: 1.3rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1785px) {
         width: 45%;
      }
      @media (max-width: 1440px) {
         width: 48%;
      }
      @media (max-width: 1180px) {
         width: 85%;
         text-align: center;
         margin: 0 auto;
      }
      @media (max-width: 768px) {
         width: 92%;
      }
      @media (max-width: 540px) {
         width: 96%;
      }
   }
`;

export const Portrait = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 1rem;
   width: 60rem;
   height: 30rem;

   .image-box {
      height: 100%;
      width: 33.333%;
      .image {
         object-fit: cover;
         clip-path: polygon(15% 0%, 100% 0, 85% 100%, 0 100%);
         border-radius: 2rem;
         width: 100%;
         height: 100%;
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
      @media (max-width: 1180px) {
         width: 135%;
         transform: translateX(-15%);
         height: 20rem;

         .image-box > .image {
            object-position: top;
            border-radius: 0;
         }
      }
   }
`;
