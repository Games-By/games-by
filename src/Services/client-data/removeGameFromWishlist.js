import axios from 'axios';
import { getWishlist } from './getWishlist';

export const removeGameFromWishlist = async () => {
   const user = localStorage.getItem('user');
   const formatedUser = JSON.parse(user);
   const userId = formatedUser._id;

   const wishlist = await getWishlist();
   if (wishlist.length > 0) {
      const gameId = wishlist[0]._id;

      const removedGameData = {
         userId: userId,
         itemId: gameId,
      };

      const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist/remove`, {
         data: removedGameData,
      });
   }
};
