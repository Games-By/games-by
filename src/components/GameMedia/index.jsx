import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { MasonryContainer, MasonryItem, MasonryVideoItem } from './styles';
import Image from 'next/image';

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
               <Image
                  src={wallpaper.url}
                  alt={`Wallpaper ${index + 1}`}
                  width={500}
                  height={500}
                  style={{ width: '100%', borderRadius: '8px', height: 'auto' }}
                  quality={100}
                  loading='lazy'
               />
            </MasonryItem>
         ))}
      </MasonryContainer>
   );
};

export default GameMedia;
