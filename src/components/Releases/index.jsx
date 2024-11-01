'use client';
import VerticalCard from '../VerticalCard';
import { useLocale, useTranslations } from 'next-intl';
import { ReleaseStyles } from './ReleasesStyles';
import Title from '../Title';
import VerticalCardSkeleton from '../VerticalCard/VerticalCardSkeleton';
import { SlGraph } from 'react-icons/sl';
import { useGames } from '@/contexts/GamesContext';

const Releases = () => {
   const { releasesGames, loading } = useGames();
   const locale = useLocale();
   const t = useTranslations('Releases');

   if (loading) {
      return (
         <ReleaseStyles>
            <Title icon={<SlGraph />} text={t('title')} />
            <div className='releases'>
               {[...Array(6)].map((_, i) => (
                  <VerticalCardSkeleton key={i} />
               ))}
            </div>
         </ReleaseStyles>
      );
   }

   return (
      <>
         <ReleaseStyles>
            <Title icon={<SlGraph />} text={t('title')} />
            <div className='releases'>
               {releasesGames.length > 0 &&
                  releasesGames
                     .slice(0, 6)
                     .map((release) => (
                        <VerticalCard
                           key={release._id}
                           id={release._id}
                           name={release.name}
                           cover={release.images.coverImage}
                           portraitCover={release.images.secondaryCovers[0].url}
                           code={release.prices[locale].currencyCode}
                           price={release.prices[locale].amount}
                           discount={release.discount}
                           genre={release.genres[locale]}
                           className={'card'}
                        />
                     ))}
            </div>
         </ReleaseStyles>
      </>
   );
};

export default Releases;
