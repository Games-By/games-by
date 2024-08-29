import Image from 'next/image';
import React from 'react';
import {
   SiPlaystation4,
   SiPlaystation5,
   SiPlaystation,
   SiNintendoswitch,
   SiXbox,
} from 'react-icons/si';
import { CiMobile3 } from 'react-icons/ci';
import { Platforms } from './styles';
import XboxOne from '@/assets/XboxOne';

const GamePlatforms = ({ platforms = [] }) => {
   return (
      <Platforms>
         {platforms.map((platform, index) => {
            const platformLowerCase = platform.toLowerCase();
            if (platformLowerCase === 'pc') {
               return (
                  <li
                     key={index}
                     style={{ fontSize: '2.6rem', fontWeight: 600 }}
                  >
                     PC
                  </li>
               );
            }
            if (
               (platformLowerCase.includes('playstation') &&
                  platformLowerCase.includes('4')) ||
               platformLowerCase.includes('ps4')
            ) {
               return (
                  <li key={index} className='playstation'>
                     <SiPlaystation style={{ fontSize: '2.5rem' }} />
                     <SiPlaystation4 />
                  </li>
               );
            }
            if (
               (platformLowerCase.includes('playstation') &&
                  platformLowerCase.includes('5')) ||
               platformLowerCase.includes('ps5')
            ) {
               return (
                  <li key={index} className='playstation'>
                     <SiPlaystation style={{ fontSize: '2.5rem' }} />
                     <SiPlaystation5 />
                  </li>
               );
            }
            if (platformLowerCase.includes('nintendo switch')) {
               return (
                  <li
                     key={index}
                     style={{ fontSize: '3.5rem', fontWeight: 600 }}
                  >
                     <SiNintendoswitch />
                  </li>
               );
            }
            if (platformLowerCase.includes('xbox one')) {
               return (
                  <li key={index} className='xbox-one'>
                     <XboxOne />
                  </li>
               );
            }
            if (platformLowerCase.includes('xbox series')) {
               return (
                  <li
                     key={index}
                     style={{ fontSize: '3.5rem', fontWeight: 600 }}
                  >
                     <SiXbox />
                  </li>
               );
            }
            if (platformLowerCase.includes('mobile')) {
               return (
                  <li key={index} style={{ fontSize: '4rem', fontWeight: 600 }}>
                     <CiMobile3 />
                  </li>
               );
            }
            return null;
         })}
      </Platforms>
   );
};

export default GamePlatforms;
