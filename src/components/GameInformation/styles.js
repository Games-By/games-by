import styled from 'styled-components';

export const GameInformationStyles = styled.div`
   width: 30rem;
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
      width: 100%;
      .gallery {
         border: 1px solid rgba(var(--light));
         border-radius: 1rem;
         width: calc(100% - 4rem);
         min-height: 20rem;
         margin: 0 auto;
         padding: 1rem;
         display: flex;
         flex-wrap: wrap;
         gap: 1rem 0;
         justify-content: space-between;
         align-items: center;

         .image {
            min-width: 6rem;
            height: 6rem;
            border-radius: 1rem;
            background-color: rgba(var(--light-gray));
            object-fit: cover;
            flex: 1 1 calc(33% - 2rem);
            max-width: calc(33% - 2rem);
         }

         .box {
            min-width: 6rem;
            height: 6rem;
            border-radius: 1rem;
            background-color: rgba(var(--light-gray));
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1 1 calc(33% - 2rem);
            max-width: calc(33% - 2rem);

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
               max-width: none;

               .image,
               .box {
                  height: 8rem;
                  width: 30%;
               }
            }
         }
         @media (max-width: 500px) {
            .gallery {
               .image,
               .box {
                  height: 6rem;
                  width: 30%;
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
         width: 25rem;
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

export const LanguageList = styled.ul`
   width: calc(100% - 2rem);
   margin: 0 auto;
   padding: 0;
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;

   li {
      background-color: rgba(var(--primary), 0.5);
      padding: 5px 1rem;
      border-radius: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
   }
`;
