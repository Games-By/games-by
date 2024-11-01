import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const getAllBanners = async () => {
   try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/banners`);
      const banners = response.data;
      return banners;
   } catch (error) {
      console.error('Error fetching banners:', error);
      return [];
   }
};
