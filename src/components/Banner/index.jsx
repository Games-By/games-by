import React, { useEffect, useState, useCallback } from 'react';
import { BannerContainerStyles } from './BannerStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
   fetchBanners,
   fetchWishlist,
   isFutureRelease,
} from '@/Services/games-service/BannerService';
import 'react-toastify/dist/ReactToastify.css';
import BannerSkeleton from './BannerSkeleton';
import useWindowSize from '@/hooks/useWindowSize';
import BannerItem from '../BannerItem';
import { useAuth } from '@/contexts/AuthContext';

const Banners = () => {
   const { isLoggedIn } = useAuth();
   const [banners, setBanners] = useState(() => JSON.parse(localStorage.getItem('banners')) || []);
   const [localWishlist, setLocalWishlist] = useState([]);
   const { width } = useWindowSize();

   const loadBanners = useCallback(async () => {
      try {
         const fetchedBanners = await fetchBanners();
         setBanners(fetchedBanners);
         localStorage.setItem('banners', JSON.stringify(fetchedBanners));
      } catch (error) {
         console.error('Failed to load banners:', error);
      }
   }, []);

   useEffect(() => {
      if (banners.length < 1) {
         loadBanners();
      }
      setLocalWishlist(fetchWishlist());
   }, [banners.length, loadBanners]);

   return (
      <BannerContainerStyles width={width}>
         {Array.isArray(banners) && banners.length > 0 ? (
            <Swiper
               centeredSlides={true}
               loop={true}
               autoplay={{ delay: 10000, disableOnInteraction: false }}
               pagination={{ clickable: true }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className='swiper'
            >
               {banners.map((banner) => (
                  <SwiperSlide key={banner._id}>
                     <BannerItem
                        banner={banner}
                        isLoggedIn={isLoggedIn}
                        localWishlist={localWishlist}
                        futureRelease={isFutureRelease}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            <BannerSkeleton />
         )}
      </BannerContainerStyles>
   );
};

export default Banners;
