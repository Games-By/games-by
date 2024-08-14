import { useEffect, useState, useCallback } from 'react';
import VerticalCard from '../VerticalCard';
import { getGames } from '@/Services/games-service/getGames';
import { useLocale } from 'next-intl';
import { ReleaseStyles } from './ReleasesStyles';
import { debounce } from '@/utils/debounce';
import Title from '../Title';
import VerticalCardSkeleton from '../VerticalCard/VerticalCardSkeleton';

const Releases = () => {
   const locale = useLocale();
   const [releases, setReleases] = useState([]);

   const getReleases = async () => {
      const games = await getGames();
      const filteredGames = games.filter((game) => game.releaseYear >= 2022);
      setReleases(filteredGames);
   };

   const debouncedGetReleases = useCallback(debounce(getReleases, 1000), []);

   useEffect(() => {
      if (releases.length < 1) {
         debouncedGetReleases();
      }
   }, [debouncedGetReleases]);

   return (
      <>
         <ReleaseStyles>
            <Title text='Top New releases' />
            <div className='releases'>
               {releases.length > 0
                  ? releases
                       .slice(0, 5)
                       .map((release) => (
                          <VerticalCard
                             key={release._id}
                             name={release.name}
                             cover={release.images.coverImage}
                             portraitCover={
                                release.images.secondaryCovers[0].url
                             }
                             code={release.prices[locale].currencyCode}
                             price={release.prices[locale].amount}
                             discount={release.discount}
                             genre={release.genres[locale]}
                          />
                       ))
                  : [...Array(5)].map((_, i) => (
                       <VerticalCardSkeleton key={i} />
                    ))}
            </div>
         </ReleaseStyles>
      </>
   );
};

export default Releases;
