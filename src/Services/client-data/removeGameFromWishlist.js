import axios from 'axios';
import { getWishlist } from './getWishlist';

export const removeGameFromWishlist = async (gameTitle) => {
   const user = localStorage.getItem('user');
   const formatedUser = JSON.parse(user);
   const userId = formatedUser._id;

   const wishlist = await getWishlist();
   if (wishlist.length > 0) {
      const game = wishlist.find((game) => game.name === gameTitle);

      if (game) {
         const gameId = game._id;

         try {
            const removedGameData = {
               userId: userId,
               itemId: gameId,
            };

            const response = await axios.delete(
               `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist/remove`,
               {
                  data: removedGameData,
               }
            );
         } catch (error) {
            console.error('Error removing game from wishlist:', error);
         }
      } else {
         console.log('Game not found in wishlist.');
      }
   }
};
