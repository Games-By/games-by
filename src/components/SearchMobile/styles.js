import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchMobileContainer = styled(motion.div)`
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   background-color: rgba(var(--dark), 0.98);
   backdrop-filter: blur(5px) !important;
   z-index: 999;
   overflow: hidden;

   .search-bar {
      width: 80%;
      top: 3rem;

      .search {
         width: 100%;
      }
   }
`;
