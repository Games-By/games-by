import styled from 'styled-components';

export const GameInformationStyles = styled.div`
   min-width: 30rem;
   padding: 2rem 0;
   background-color: rgba(var(--light-gray), 0.3);
   border-radius: 2rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   .metascore {
      margin: 0 auto;
   }

   .info-title {
      font-size: 1.2rem;
      text-transform: capitalize;
      border: 1px solid rgba(var(--light));
      border-radius: 2rem;
      padding: 5px 1.5rem;
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 7px;
      margin: 0 0 1rem 1rem;
   }

   .informations {
      border: 1px solid rgba(var(--light));
      border-radius: 1rem;
      width: calc(100% - 4rem);
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .game-data {
         .key {
            text-transform: uppercase;
            color: rgba(var(--light), 0.4);
            font-weight: 600;
            &::after {
               content: ':';
               margin-right: 5px;
            }
         }
         .data {
            color: rgba(var(--primary));
            letter-spacing: 1px;
         }
      }
   }

   .gallery-box {
      .gallery {
         border: 1px solid rgba(var(--light));
         border-radius: 1rem;
         width: calc(100% - 4rem);
         margin: 0 auto;
         padding: 1rem;
         display: flex;
         flex-wrap: wrap;
         gap: 1rem;
         justify-content: center;
         align-items: center;

         .box {
            width: 30%;
            height: 6rem;
            border-radius: 1rem;
            background-color: rgba(var(--light-gray));
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
               font-size: 2rem;
               fill: rgba(var(--dark-gray));
            }
         }
      }

      @media screen {
         @media (max-width: 1400px) {
            max-width: 60rem;
            .gallery {
               padding: 2rem 1rem;

               .box {
                  height: 8rem;
               }
            }
         }
      }
   }

   .system-requirements {
      border: 1px solid rgba(var(--light));
      border-radius: 1rem;
      width: calc(100% - 4rem);
      margin: 0 auto;
      padding: 1rem;
      @media screen {
         @media (max-width: 1400px) {
            padding: 2rem 1rem;
         }
         @media (max-width: 550px) {
            margin: 0 0 0 1rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         min-width: 25rem;
      }
      @media (max-width: 1400px) {
         width: 100%;
         flex-direction: row;
         flex-wrap: wrap;
         justify-content: center;
         .metascore {
            width: 100%;
         }
         .info-box {
            width: 100%;
            max-width: 60rem;
         }
      }
   }
`;
