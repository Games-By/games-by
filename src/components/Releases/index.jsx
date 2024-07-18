import { useEffect, useState } from 'react';
import VerticalCard from '../VerticalCard';
import { getGames } from '@/Services/games-service/getGames';
import { useLocale } from 'next-intl';
import { ReleaseStyles } from './ReleasesStyles';
import { debounce } from '@/utils/debounce';
import Title from '../Title';

const Releases = () => {
   const locale = useLocale();
   const [releases, setReleases] = useState([]);

   const getReleases = async () => {
      const games = await getGames();
      const filteredGames = games.filter((game) => game.releaseYear >= 2022);
      setReleases(filteredGames);
   };
   const debauncedgetReleases = debounce(getReleases, 1000);
   useEffect(() => {
      debauncedgetReleases();
   }, []);

   return (
      <>
         <ReleaseStyles>
            <Title text={'Top New releases'}/>
            <div className='releases'>
               {releases.length > 0 &&
                  releases
                     .slice(0, 4)
                     .map((release) => (
                        <VerticalCard
                           name={release.name}
                           cover={release.images.coverImage}
                           code={release.prices[locale].currencyCode}
                           price={release.prices[locale].amount}
                           discount={release.discount ? release.discount : null}
                           genre={release.genres[locale]}
                           key={release._id}
                        />
                     ))}
            </div>
         </ReleaseStyles>
      </>
   );
};

export default Releases;
