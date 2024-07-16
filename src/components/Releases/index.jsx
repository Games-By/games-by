import { useEffect, useState } from 'react';
import VerticalCard from '../VerticalCard';
import { getGames } from '@/Services/games-service/getGames';
import { useLocale } from 'next-intl';
import { ReleaseStyles } from './ReleasesStyles';

const Releases = () => {
   const locale = useLocale()
   const [releases, setReleases] = useState([]);

   useEffect(() => {
      const getReleases = async () => {
         const games = await getGames();
         const filteredGames = games.filter((game) => game.releaseYear >= 2020);
         setReleases(filteredGames);
      };
      getReleases();
   }, []);

   return (
      <>
         <ReleaseStyles>
            {releases.length > 0 &&
               releases.slice(0, 4).map((release, index) => (
                  <VerticalCard
                     name={release.name}
                     cover={release.images.coverImage}
                     code={release.prices[locale].currencyCode}
                     price={release.prices[locale].amount}
                     discount={release.discount ? release.discount : null}
                     genre={release.genres[locale]}
                     publisher={release.developer}
                     year={release.releaseYear}
                     key={release._id}
                  />
               ))}
         </ReleaseStyles>
      </>
   );
};

export default Releases;
