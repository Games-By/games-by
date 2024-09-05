import Title from '@/components/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { Call, DiscoverStyles, Portrait } from './styles';
import { MdOutlineGames } from "react-icons/md";

const Discover = () => {
   const t = useTranslations('Discover');

   const portraitImages = [
      'https://static.wikia.nocookie.net/liberproeliis/images/1/15/Franklin_Clinton.jpg/revision/latest?cb=20161128225853&path-prefix=pt-br',
      'https://4kwallpapers.com/images/wallpapers/tom-clancys-rainbow-1080x2160-9612.jpg',
      'https://maisesports.com.br/_next/image?url=https%3A%2F%2Felasticbeanstalk-us-east-1-909474674380.s3.amazonaws.com%2Fstrapi-uploads%2FVALORANT_Raze_18e52f2ecd.jpg&w=3840&q=80',
   ];

   return (
      <>
         <DiscoverStyles>
            <Title text={t('discover')} icon={<MdOutlineGames style={{fontSize: '2rem', transform: 'rotate(-30deg)'}} />} />
            <div className='content'>
               <Call>
                  <p className='presentation'>
                     {t.rich('presentation', {
                        Emphasys: (chunks) => (
                           <span className='emphasys'>{chunks}</span>
                        ),
                     })}
                  </p>
                  <p className='call'>{t('call')}</p>
               </Call>
               <Portrait>
                  {portraitImages.map((image, i) => (
                     <div className='image-box' key={i}>
                        <Image
                           alt='game cover'
                           src={image}
                           height={400}
                           width={300}
                           quality={100}
                           style={{ objectFit: 'cover' }}
                           className='image'

                        />
                     </div>
                  ))}
               </Portrait>
            </div>
         </DiscoverStyles>
      </>
   );
};

export default Discover;
