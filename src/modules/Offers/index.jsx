import VerticalCard from '@/components/VerticalCard';
import { getGames } from '@/Services/games-service/getGames';
import { debounce } from '@/utils/debounce';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { OfferStyles } from './styles';
import VerticalCardSkeleton from '@/components/VerticalCard/VerticalCardSkeleton';
import Title from '@/components/Title';

const Offers = () => {
   const t = useTranslations('Deals');
   const [gamesInOffer, setGamesInOffer] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const locale = useLocale();

   const getOfferGames = async () => {
      const response = await getGames();
      setGamesInOffer(response);
      setIsLoading(false);
   };

   const debouncedGetOfferGames = useCallback(
      debounce(getOfferGames, 2000),
      []
   );

   useEffect(() => {
      debouncedGetOfferGames();
   }, [debouncedGetOfferGames]);

   return (
      <OfferStyles>
         <Title text={t('title')} />
         <div className='deals'>
            {isLoading
               ? [...Array(4)].map((_, i) => <VerticalCardSkeleton key={i} />)
               : gamesInOffer.map((game) => {
                    if (game.discount > 0) {
                       return (
                          <VerticalCard
                             className={'card'}
                             key={game._id}
                             name={game.name}
                             genre={game.genres[locale]}
                             discount={game.discount}
                             code={game.prices[locale].currencyCode}
                             price={game.prices[locale].amount}
                             cover={game.images.coverImage}
                             portraitCover={game.images.secondaryCovers[0].url}
                          />
                       );
                    }
                    return null;
                 })}
         </div>
      </OfferStyles>
   );
};

export default Offers;
