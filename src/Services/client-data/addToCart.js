// addToCart.js

import axios from 'axios';

export const addToCart = async (cartItem) => {
   const user = localStorage.getItem('user');
   if (user) {
      try {
         const formatedUser = JSON.parse(user);
         const userId = formatedUser._id;

         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/cart/add`,
            { userId, cartItem }
         );
         return response.data;
      } catch (error) {
         console.error('Error adding item to cart:', error);
         throw error;
      }
   } else {
      return;
   }
};
