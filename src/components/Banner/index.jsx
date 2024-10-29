import React, { useEffect, useState, useCallback } from 'react';
import { BannerContainerStyles, BannerStyle, BannerInfo } from './BannerStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getAllBanners } from '@/Services/games-service/getBanners';
import ButtonLink from '../ButtonLink/ButtonLink';
import { getStarIcons } from '@/utils/formatRating';
import 'react-toastify/dist/ReactToastify.css';
import { debounce } from '@/utils/debounce';
import { useLocale, useTranslations } from 'next-intl';
import BannerSkeleton from './BannerSkeleton';
import WishlistButton from '../WishlistButton';
import useWindowSize from '@/hooks/useWindowSize';

const Banners = ({ isLoggedIn }) => {
   const locale = useLocale();
   const t = useTranslations();
   const [banners, setBanners] = useState([]);
   const [localWishlist, setLocalWishlist] = useState([]);
   const { width } = useWindowSize();

   const getBanners = useCallback(async () => {
      const response = await getAllBanners();
      const mixedBanners = [...response.discountBanners, ...response.launchBanners];
      setBanners(mixedBanners);
   }, []);

   const futureRelease = (date) => {
      const releaseDate = new Date(date);
      const currentDate = new Date();
      return releaseDate > currentDate;
   };

   const fetchWishlist = useCallback(() => {
      try {
         const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
         setLocalWishlist(wishList.map((item) => item.name));
      } catch (error) {
         console.error('Error fetching wishlist:', error);
      }
   }, []);

   const debouncedGetBanners = useCallback(debounce(getBanners, 500), [getBanners]);

   useEffect(() => {
      if (banners.length < 1) {
         debouncedGetBanners();
      }
      fetchWishlist();
   }, [fetchWishlist]);

   return (
      <>
         <BannerContainerStyles width={width}>
            {banners.length > 0 ? (
               <Swiper
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                     delay: 10000,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className='swiper'
               >
                  {banners.map((banner) => (
                     <SwiperSlide key={banner._id}>
                        <BannerStyle image={banner.imageUrl}>
                           <BannerInfo>
                              <h2 className='title'>{banner.title[locale] || banner.title.en}</h2>
                              <p className='description'>
                                 {banner.description[locale] || banner.description.en}
                              </p>
                              {futureRelease(banner.releaseDate) ? (
                                 <p className='avaiable'>{t('Banner.coming')}</p>
                              ) : (
                                 <p className='avaiable'>{t('Banner.avaiable')}</p>
                              )}
                              {banner.type === 'discount' && banner.rating && (
                                 <div className='star-icons'>
                                    {getStarIcons(banner.rating, 1.6)} | {banner.rating}
                                 </div>
                              )}
                              <div className='buttons'>
                                 <WishlistButton
                                    gameTitle={banner.gameTitle}
                                    content={
                                       localWishlist.includes(banner.gameTitle)
                                          ? t('Banner.remove')
                                          : t('Banner.add')
                                    }
                                    className='wishlist-button'
                                 />
                                 <ButtonLink
                                    url={isLoggedIn ? '/' : '/login'}
                                    title={
                                       futureRelease(banner.releaseDate)
                                          ? t('Banner.pre')
                                          : t('Banner.buy')
                                    }
                                    className='buy-button'
                                    textTransform='uppercase'
                                 />
                              </div>
                           </BannerInfo>
                        </BannerStyle>
                     </SwiperSlide>
                  ))}
               </Swiper>
            ) : (
               <BannerSkeleton />
            )}
         </BannerContainerStyles>
      </>
   );
};

export default Banners;
