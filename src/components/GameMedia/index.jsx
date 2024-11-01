import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { MasonryContainer, MasonryItem, MasonryVideoItem } from './styles';

const GameMedia = ({ trailer, wallpapers = [] }) => {
   const breakpointColumnsObj = {
      default: 3,
      768: 2,
      500: 1,
   };

   return (
      <MasonryContainer breakpointCols={breakpointColumnsObj} columnClassName='masonry-column'>
         <MasonryVideoItem>
            <VideoPlayer videoUrl={trailer} playerId={trailer} />
         </MasonryVideoItem>
         {wallpapers.map((wallpaper, index) => (
            <MasonryItem key={index}>
               <img
                  src={wallpaper.url}
                  alt={`Wallpaper ${index + 1}`}
                  style={{ width: '100%', borderRadius: '8px', height: 'auto' }}
               />
            </MasonryItem>
         ))}
         <MasonryVideoItem>
            <VideoPlayer videoUrl={trailer} playerId='trailer1' />
         </MasonryVideoItem>
      </MasonryContainer>
   );
};

export default GameMedia;
