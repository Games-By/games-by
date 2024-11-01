import React, { useMemo, useCallback } from 'react';
import { BannerStyle, BannerInfo } from './styles';
import WishlistButton from '../WishlistButton';
import ButtonLink from '../ButtonLink/ButtonLink';
import { getStarIcons } from '@/utils/formatRating';
import { useLocale, useTranslations } from 'next-intl';

const BannerItem = React.memo(({ banner, isLoggedIn, localWishlist, futureRelease }) => {
   const locale = useLocale();
   const t = useTranslations();

   const translatedTitle = useMemo(
      () => banner.title[locale] || banner.title.en,
      [banner.title, locale]
   );
   const translatedDescription = useMemo(
      () => banner.description[locale] || banner.description.en,
      [banner.description, locale]
   );
   const isFutureRelease = useMemo(
      () => futureRelease(banner.releaseDate),
      [banner.releaseDate, futureRelease]
   );

   const renderStarIcons = useCallback(() => {
      return banner.type === 'discount' && banner.rating ? (
         <div className='star-icons'>
            {getStarIcons(banner.rating, 1.6)} | {banner.rating}
         </div>
      ) : null;
   }, [banner.type, banner.rating]);

   return (
      <BannerStyle image={banner.imageUrl}>
         <BannerInfo>
            <h2 className='title'>{translatedTitle}</h2>
            <p className='description'>{translatedDescription}</p>
            <p className='available'>
               {isFutureRelease ? t('Banner.coming') : t('Banner.available')}
            </p>
            {renderStarIcons()}
            <div className='buttons'>
               <WishlistButton
                  gameTitle={banner.gameTitle}
                  content={
                     localWishlist.includes(banner.gameTitle) ? t('Banner.remove') : t('Banner.add')
                  }
                  className='wishlist-button'
               />
               <ButtonLink
                  url={isLoggedIn ? '/' : '/login'}
                  title={isFutureRelease ? t('Banner.pre') : t('Banner.buy')}
                  className='buy-button'
                  textTransform='uppercase'
               />
            </div>
         </BannerInfo>
      </BannerStyle>
   );
});

BannerItem.displayName = 'BannerItem';

export default BannerItem;
