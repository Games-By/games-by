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

const GamePlatforms = ({ platforms = [], className }) => {
   return (
      <Platforms className={className}>
         {platforms.map((platform, index) => {
            const platformLowerCase = platform.toLowerCase();
            if (platformLowerCase === 'pc') {
               return (
                  <li key={index} className='icon' style={{ fontWeight: 600 }}>
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
                     <SiPlaystation className='ps' />
                     <SiPlaystation4 className='icon'/>
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
                     <SiPlaystation className='ps' />
                     <SiPlaystation5 className='icon'/>
                  </li>
               );
            }
            if (platformLowerCase.includes('nintendo switch')) {
               return (
                  <li key={index} style={{ fontWeight: 600 }}>
                     <SiNintendoswitch className='icon' />
                  </li>
               );
            }
            if (platformLowerCase.includes('xbox one')) {
               return (
                  <li key={index} className='xbox-one'>
                     <XboxOne className={'icon'} />
                  </li>
               );
            }
            if (platformLowerCase.includes('xbox series')) {
               return (
                  <li key={index} style={{ fontWeight: 600 }}>
                     <SiXbox className='icon'/>
                  </li>
               );
            }
            if (platformLowerCase.includes('mobile')) {
               return (
                  <li key={index}  style={{ fontWeight: 600 }}>
                     <CiMobile3 className='icon' />
                  </li>
               );
            }
            return null;
         })}
      </Platforms>
   );
};

export default GamePlatforms;
