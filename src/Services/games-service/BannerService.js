import { getAllBanners } from './getBanners';

export const fetchBanners = async () => {
   const response = await getAllBanners();
   return [...response.discountBanners, ...response.launchBanners];
};

export const fetchWishlist = () => {
   try {
      const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
      return wishList.map((item) => item.name);
   } catch (error) {
      console.error('Error fetching wishlist:', error);
      return [];
   }
};

export const isFutureRelease = (date) => new Date(date) > new Date();
