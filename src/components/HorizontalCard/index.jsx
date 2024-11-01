import Image from 'next/image';
import WishlistButton from '../WishlistButton';
import { HorizontalCardStyles } from './styles';
import { useLocale, useTranslations } from 'next-intl';
import DiscountPrice from '../DiscountPrice';
import DiscountPricePercentage from '../DiscountPricePercentage';
import { useRouter } from '../../../navigation';
import Button from '../Button/Button';

const HorizontalCard = ({ game }) => {
   const locale = useLocale();
   const t = useTranslations('Card');
   const router = useRouter();

   return (
      <>
         <HorizontalCardStyles
            href={`/games/${game.name}`}
         >
            <Image
               alt={`cover of ${game.name}`}
               src={
                  game.images.secondaryCovers[0].url
                     ? game.images.secondaryCovers[0].url
                     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s'
               }
               quality={100}
               width={800}
               height={500}
               className='image'
            />
            {game.discount ? (
               <DiscountPricePercentage
                  className={'game-discount-percentage'}
                  discount={game.discount}
                  signal={'-'}
               />
            ) : null}
            <div className='game-data'>
               <h3 className='game-name'>{game.name}</h3>
               <div className='prices'>
                  {game.discount ? (
                     <DiscountPrice
                        classname={'game-discount'}
                        currencyCode={game.prices[locale].currencyCode}
                        price={game.prices[locale].amount}
                     />
                  ) : null}
                  <div className='game-price'>
                     {game.prices['en-US'].amount > 0 && (
                        <span className='code'>{game.prices[locale].currencyCode}</span>
                     )}
                     {game.prices['en-US'].amount > 0 ? (
                        game.discount ? (
                           <span>
                              {(
                                 game.prices[locale].amount -
                                 (game.prices[locale].amount / 100) * game.discount
                              ).toFixed(2)}
                           </span>
                        ) : (
                           <span>{game.prices[locale].amount}</span>
                        )
                     ) : (
                        <span className='free'>{t('free')}</span>
                     )}
                  </div>
               </div>
               <div className='buttons'>
                  <div
                     onClick={(e) => {
                        e.stopPropagation();
                     }}
                  >
                     <WishlistButton gameTitle={game.name} className={'wishlist-button'} />
                  </div>
                  <Button
                     title={game.prices['en-US'].amount > 0 ? t('buy') : t('play')}
                     url={`/`}
                     className={'play-button'}
                     textTransform={'uppercase'}
                     onClick={(e) => {
                        e.stopPropagation();
                        router.push('/teste');
                     }}
                  />
               </div>
            </div>
         </HorizontalCardStyles>
      </>
   );
};

export default HorizontalCard;
