import axios from 'axios';

export const removeFromCart = async (itemId) => {
   const user = localStorage.getItem('user');
   if (user) {
      try {
         const formatedUser = JSON.parse(user);
         const userId = formatedUser._id;
         const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart/remove`, {
            data: { userId, itemId },
         });
         return response.data;
      } catch (error) {
         console.error('Error removing item from cart:', error);
         throw error;
      }
   } else {
      return;
   }
};
