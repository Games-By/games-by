import React, { useEffect, useState, useCallback } from 'react';
import { BannerContainerStyles, BannerStyle, BannerInfo } from './BannerStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getAllBanners } from '@/Services/games-service/getBanners';
import ButtonLink from '../ButtonLink/ButtonLink';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import Button from '../Button/Button';
import { getStarIcons } from '@/utils/formatRating';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getWishlist } from '@/Services/client-data/getWishlist';
import { addGameToWishlist } from '@/Services/client-data/AddGameToWishlist';
import { removeGameFromWishlist } from '@/Services/client-data/removeGameFromWishlist';
import { debounce } from '@/utils/debounce';
import { useLocale, useTranslations } from 'next-intl';

const Banners = ({ isLoggedIn }) => {
   const locale = useLocale();
   const t = useTranslations();
   const [banners, setBanners] = useState([]);
   const [localWishlist, setLocalWishlist] = useState([]);
   const [gameUpdated, setGameUpdated] = useState('');

   const getBanners = useCallback(async () => {
      const response = await getAllBanners();
      const mixedBanners = [
         ...response.discountBanners,
         ...response.launchBanners,
      ];
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

   const handleWishlistClick = useCallback(
      async (gameTitle) => {
         if (!isLoggedIn) {
            toast('You need to log in to add games to your wishlist!', {
               position: 'top-right',
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'dark',
               transition: Slide,
            });
            return;
         }

         try {
            if (!localWishlist.includes(gameTitle)) {
               setLocalWishlist((prev) => [...prev, gameTitle]);
               await addGameToWishlist(gameTitle);
               toast(`${gameTitle} Added to wish list.`, {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                  transition: Slide,
               });
            } else {
               setLocalWishlist((prev) =>
                  prev.filter((title) => title !== gameTitle)
               );
               await removeGameFromWishlist(gameTitle);
               toast(`${gameTitle} removed from your wish list.`, {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                  transition: Slide,
               });
            }
            const wishList = await getWishlist();
            localStorage.setItem('wishlist', JSON.stringify(wishList));
         } catch (error) {
            console.error('Error adding or removing game to wishlist:', error);
         } finally {
            setGameUpdated(gameTitle);
         }
      },
      [isLoggedIn, localWishlist]
   );

   const debouncedGetBanners = useCallback(debounce(getBanners, 500), [
      getBanners,
   ]);

   useEffect(() => {
      if (banners.length < 1) {
         debouncedGetBanners();
      }
      fetchWishlist();
   }, [fetchWishlist, gameUpdated]);

   return (
      <>
         <BannerContainerStyles>
            {banners.length > 0 && (
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
                              <h2 className='title'>
                                 {banner.title[locale] || banner.title.en}
                              </h2>
                              <p className='description'>
                                 {banner.description[locale] ||
                                    banner.description.en}
                              </p>
                              {futureRelease(banner.releaseDate) ? (
                                 <p className='avaiable'>
                                    {t('Banner.coming')}
                                 </p>
                              ) : (
                                 <p className='avaiable'>
                                    {t('Banner.avaiable')}
                                 </p>
                              )}
                              {banner.type === 'discount' && banner.rating && (
                                 <div className='star-icons'>
                                    {getStarIcons(banner.rating)} |{' '}
                                    {banner.rating / 10}
                                 </div>
                              )}
                              <div className='buttons'>
                                 <Button
                                    onClick={() =>
                                       handleWishlistClick(banner.gameTitle)
                                    }
                                    icon={
                                       localWishlist.includes(
                                          banner.gameTitle
                                       ) ? (
                                          <MdFavorite className='icon' />
                                       ) : (
                                          <MdFavoriteBorder className='icon' />
                                       )
                                    }
                                    title={
                                       localWishlist.includes(banner.gameTitle)
                                          ? t('Banner.remove')
                                          : t('Banner.add')
                                    }
                                    className='button-wishlist'
                                    currentColor='rgba(var(--secondary))'
                                    bgColor='rgba(var(--dark))'
                                    textTransform='uppercase'
                                    hoverColor='rgba(var(--secondary))'
                                 />
                                 <ButtonLink
                                    url={isLoggedIn ? '/' : '/login'}
                                    title={
                                       futureRelease(banner.releaseDate)
                                          ? t('Banner.pre')
                                          : t('Banner.buy')
                                    }
                                    className='button'
                                    currentColor='rgba(var(--primary))'
                                    bgColor='rgba(var(--dark))'
                                    textTransform='uppercase'
                                 />
                              </div>
                           </BannerInfo>
                        </BannerStyle>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </BannerContainerStyles>
      </>
   );
};

export default Banners;
