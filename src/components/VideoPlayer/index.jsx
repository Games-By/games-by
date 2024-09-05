import React, { useEffect, useState } from 'react';
import { VideoFrame, VideoPlayerContainer } from './styles';

const VideoPlayer = ({ videoUrl, playerId, className }) => {
   const [trailerId, setTrailerId] = useState('');

   function extractTrailerId(url) {
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerId(urlParams.get('v'));
   }

   useEffect(() => {
      extractTrailerId(videoUrl);
   }, [videoUrl]);

   useEffect(() => {
      if (trailerId) {
         const loadYouTubeAPI = () => {
            return new Promise((resolve) => {
               const existingScript = document.getElementById('youtube-api');
               if (existingScript) {
                  resolve();
                  return;
               }

               const tag = document.createElement('script');
               tag.id = 'youtube-api';
               tag.src = 'https://www.youtube.com/iframe_api';
               const firstScriptTag =
                  document.getElementsByTagName('script')[0];
               firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

               window.onYouTubeIframeAPIReady = resolve;
            });
         };

         loadYouTubeAPI().then(() => {
            setTimeout(() => {
               new window.YT.Player(playerId, {
                  videoId: trailerId,
                  playerVars: {
                     modestbranding: 1,
                     showinfo: 0,
                     rel: 0,
                     autoplay: 1,
                     loop: 1,
                     playlist: trailerId,
                     fs: 0,
                     iv_load_policy: 3,
                     cc_load_policy: 0,
                  },
                  events: {
                     onReady: (event) => {
                        event.target.mute();
                     },
                  },
               });
            }, 500);
         });
      }
   }, [trailerId, playerId]);

   return (
      <VideoPlayerContainer className={className}>
         <VideoFrame id={playerId}></VideoFrame>
      </VideoPlayerContainer>
   );
};

export default VideoPlayer;
