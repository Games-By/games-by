import React, { useEffect, useState, useCallback } from 'react';
import { BannerContainerStyles, BannerStyle, BannerInfo } from './BannerStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getAllBanners } from '@/Services/games-service/getBanners';
import ButtonLink from '../ButtonLink/ButtonLink';
import { IoIosAdd } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import Button from '../Button/Button';
import { getStarIcons } from '@/utils/formatRating';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getWishlist } from '@/Services/client-data/getWishlist';
import { addGameToWishlist } from '@/Services/client-data/AddGameToWishlist';
import { debounce } from '@/utils/debounce';
import { removeGameFromWishlist } from '@/Services/client-data/removeGameFromWishlist';
import { useLocale, useTranslations } from 'next-intl';

const Banners = ({ isLoggedIn }) => {
   const locale = useLocale();
   const t = useTranslations();
   const [banners, setBanners] = useState([]);
   const [localWishlist, setLocalWishlist] = useState([]);
   const [gameUpdated, setGameUpdated] = useState('');
   const [isClicking, setIsClicking] = useState(false);

   const getBanners = async () => {
      const response = await getAllBanners();
      const mixedBanners = [
         ...response.discountBanners,
         ...response.launchBanners,
      ];
      setBanners(mixedBanners);
   };

   const futureRelease = (date) => {
      const releaseDate = new Date(date);
      const currentDate = new Date();
      return releaseDate > currentDate;
   };

   const fetchWishlist = async () => {
      if (isLoggedIn) {
         try {
            const wishList = await getWishlist();
            setLocalWishlist(wishList.map((item) => item.name));
         } catch (error) {
            console.error('Error fetching wishlist:', error);
         }
      }
   };

   const debouncedGetBanners = debounce(getBanners, 500);
   const debouncedFetchWishlist = debounce(fetchWishlist, 500);

   const handleWishlistClick = useCallback(
      async (gameTitle) => {
         if (isLoggedIn) {
            try {
               if (!localWishlist.includes(gameTitle) && !isClicking) {
                  setIsClicking(true)
                  setLocalWishlist((prev) => [...prev, gameTitle]);
                  await addGameToWishlist(gameTitle);
                  toast('Game added to wish list.', {
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
               } else if (localWishlist.includes(gameTitle) && !isClicking) {
                  setIsClicking(true)
                  setLocalWishlist((prev) =>
                     prev.filter((title) => title !== gameTitle)
                  );
                  await removeGameFromWishlist(gameTitle);
                  toast('Game removed from wish list.', {
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
               }
               setGameUpdated(gameTitle);
               debouncedFetchWishlist();
            } catch (error) {
               console.error(
                  'Error adding or removing game to wishlist:',
                  error
               );
            } finally {
               setIsClicking(false);
            }
         } else {
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
         }
      },
      [isLoggedIn, localWishlist, debouncedFetchWishlist]
   );

   const onWishlistClick = (gameTitle) => {
      if (!isClicking) {
         handleWishlistClick(gameTitle);
      }
   };

   useEffect(() => {
      if (banners.length < 1) {
         debouncedGetBanners();
      }
      debouncedFetchWishlist();
   }, [isLoggedIn, banners.length, gameUpdated]);

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
                                       onWishlistClick(banner.gameTitle)
                                    }
                                    icon={
                                       localWishlist.includes(
                                          banner.gameTitle
                                       ) ? (
                                          <FaCheck className='icon' />
                                       ) : (
                                          <IoIosAdd className='icon'/>
                                       )
                                    }
                                    title={
                                       localWishlist.includes(banner.gameTitle)
                                          ? t('Banner.remove')
                                          : t('Banner.add')
                                    }
                                    className={'button-wishlist'}
                                    currentColor={'rgba(var(--secondary))'}
                                    bgColor={'rgba(var(--dark))'}
                                    textTransform={'uppercase'}
                                    hoverColor={'rgba(var(--secondary))'}
                                 />
                                 <ButtonLink
                                    url={isLoggedIn ? '/' : '/login'}
                                    title={
                                       futureRelease(banner.releaseDate)
                                          ? t('Banner.pre')
                                          : t('Banner.buy')
                                    }
                                    className={'button'}
                                    currentColor={'rgba(var(--primary))'}
                                    bgColor={'rgba(var(--dark))'}
                                    textTransform={'uppercase'}
                                 />
                              </div>
                           </BannerInfo>
                        </BannerStyle>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </BannerContainerStyles>
         <ToastContainer />
      </>
   );
};

export default Banners;
