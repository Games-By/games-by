import React from 'react';
import { BannerStyle, BannerInfo } from './styles';
import WishlistButton from '../WishlistButton';
import ButtonLink from '../ButtonLink/ButtonLink';
import { getStarIcons } from '@/utils/formatRating';
import { useLocale, useTranslations } from 'next-intl';

const BannerItem = ({ banner, isLoggedIn, localWishlist, futureRelease }) => {
   const locale = useLocale();
   const t = useTranslations();

   return (
      <BannerStyle image={banner.imageUrl}>
         <BannerInfo>
            <h2 className='title'>{banner.title[locale] || banner.title.en}</h2>
            <p className='description'>{banner.description[locale] || banner.description.en}</p>
            <p className='available'>
               {futureRelease(banner.releaseDate) ? t('Banner.coming') : t('Banner.available')}
            </p>
            {banner.type === 'discount' && banner.rating && (
               <div className='star-icons'>
                  {getStarIcons(banner.rating, 1.6)} | {banner.rating}
               </div>
            )}
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
                  title={futureRelease(banner.releaseDate) ? t('Banner.pre') : t('Banner.buy')}
                  className='buy-button'
                  textTransform='uppercase'
               />
            </div>
         </BannerInfo>
      </BannerStyle>
   );
};

export default BannerItem;
