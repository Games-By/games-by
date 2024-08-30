import styled from 'styled-components';
import Masonry from 'react-masonry-css';

export const MasonryContainer = styled(Masonry)`
   display: flex;
   width: auto;
   gap: 1rem;
`;

export const MasonryItem = styled.div`
   margin-bottom: 1rem;
   border-radius: 8px;
   flex: 1;

   img {
      max-height: 45rem;
      object-fit: cover;
      width: 100%;
   }
`;

export const MasonryVideoItem = styled.div`
   margin-bottom: 1rem;
   border-radius: 8px;
   width: 100%;
   max-width: 50rem;
   box-sizing: border-box;
`;
