import axios from 'axios';

export const getCart = async () => {
   const user = localStorage.getItem('user');
   if (user) {
      const formatedUser = JSON.parse(user);
      const userId = formatedUser._id;
      const response = await axios.get(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/${userId}/cart`
      );
      return response.data.cart;
   } else {
      return [];
   }
};
