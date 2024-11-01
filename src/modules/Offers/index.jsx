import VerticalCard from '@/components/VerticalCard';
import { useLocale, useTranslations } from 'next-intl';
import { OfferStyles } from './styles';
import VerticalCardSkeleton from '@/components/VerticalCard/VerticalCardSkeleton';
import Title from '@/components/Title';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { useGames } from '@/contexts/GamesContext';


const Offers = () => {
   const { discountGames, loading } = useGames();
   const t = useTranslations('Deals');
   const locale = useLocale();

   if (loading) {
      return (
         <OfferStyles>
            <Title icon={<MdOutlineLocalOffer />} text={t('title')} />
            <div className='deals'>
               {[...Array(5)].map((_, i) => (
                  <VerticalCardSkeleton discount={true} key={i} />
               ))}
            </div>
         </OfferStyles>
      );
   }

   return (
      <OfferStyles>
         <Title text={t('title')} icon={<MdOutlineLocalOffer />} />
         <div className='deals'>
            {discountGames.slice(0, 5).map((game, i) => {
               if (game.discount > 0) {
                  return (
                     <VerticalCard
                        className={'card'}
                        key={game._id}
                        id={game._id}
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
            })}
         </div>
      </OfferStyles>
   );
};

export default Offers;
