'use client';

import { createGlobalStyle } from 'styled-components';

const redditSans = 'Reddit Sans'
const outfit = 'outfit';
const light = '#D9D9D9';
const dark = '#212121';
const purple1 = '#A55BFE';
const purple2 = '#FB04FE';
const cyan = '#1DE3FF';

const GlobalStyle = createGlobalStyle`
   :root {
      --outfit: ${outfit};
      --reddit-sans: ${redditSans};
      --light: ${light};
      --dark: ${dark};
      --purple-1: ${purple1};
      --purple-2: ${purple2};
      --cyan: ${cyan};
   }


   html {
      font-size: 10px;
      min-height: 100vh;
      overflow-x: hidden;

      body {
         scroll-behavior: smooth;
         background-color: #010101;
         min-height: 100vh;
         margin: 0 auto;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         overflow-x: hidden;

         font-family: var(--reddit-sans), sans-serif;

         li {
            list-style-type: none;
         }
         a {
            color: inherit;
            text-decoration: none;
         }
         svg {
            fill: white;
            stroke: white;
         }

         &::-webkit-scrollbar {
            width: 0rem;
         }
         &::-webkit-scrollbar-track {
            background-color: transparent;
         }
         &::-webkit-scrollbar-thumb {
            background: linear-gradient(rgba(var(--primary-blue), .5), rgba(var(--primary-pink), .5));
            animation: gradient 5s ease alternate;
            border-radius: 2px;
            outline: 1px solid rgba(var(--primary-pink));

               @keyframes gradient {
               to {
                  background: linear-gradient(rgba(var(--primary-pink), .5), rgba(var(--primary-blue), .5));
               }
            }
         }
      }
   }
`;
export default GlobalStyle;
