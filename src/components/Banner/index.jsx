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

const Banners = ({ isLoggedIn }) => {
   const [banners, setBanners] = useState([]);
   const [wishlist, setWishlist] = useState([]);
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
            setWishlist(wishList);
            setLocalWishlist(wishList.map((item) => item.name));
         } catch (error) {
            console.error('Error fetching wishlist:', error);
         }
      }
   };

   const debouncedGetBanners = debounce(getBanners, 500);
   const debouncedFetchWishlist = debounce(fetchWishlist, 500);

   const handleWishlistClick = useCallback(
      debounce(async (gameTitle) => {
         if (isLoggedIn) {
            try {
               if (!localWishlist.includes(gameTitle)) {
                  setLocalWishlist((prev) => [...prev, gameTitle]);
                  await addGameToWishlist(gameTitle);
               } else {
                  setLocalWishlist((prev) =>
                     prev.filter((title) => title !== gameTitle)
                  );
                  await removeGameFromWishlist(gameTitle);
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
               autoClose: 4000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'dark',
               transition: Slide,
            });
         }
      }, 500),
      [isLoggedIn, localWishlist, debouncedFetchWishlist]
   );

   const onWishlistClick = (gameTitle) => {
      if (!isClicking) {
         setIsClicking(true);
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
                              <h2 className='title'>{banner.title}</h2>
                              <p className='description'>
                                 {banner.description}
                              </p>
                              {futureRelease(banner.releaseDate) ? (
                                 <p className='avaiable'>Coming Soon</p>
                              ) : (
                                 <p className='avaiable'>Now available</p>
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
                                          <IoIosAdd />
                                       )
                                    }
                                    title={
                                       localWishlist.includes(banner.gameTitle)
                                          ? 'Remove from WishList'
                                          : 'Add to WishList'
                                    }
                                    className={'button-wishlist'}
                                    currentColor={'rgba(var(--purple-1))'}
                                    bgColor={'rgba(var(--dark))'}
                                    textTransform={'uppercase'}
                                    hoverColor={'rgba(var(--purple-1))'}
                                 />
                                 <ButtonLink
                                    url={isLoggedIn ? '/' : '/login'}
                                    title={
                                       futureRelease(banner.releaseDate)
                                          ? 'Pre Order'
                                          : 'Buy Now'
                                    }
                                    className={'button'}
                                    currentColor={'rgba(var(--cyan))'}
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
         {!isLoggedIn && <ToastContainer />}
      </>
   );
};

export default Banners;
