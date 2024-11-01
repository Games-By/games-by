import axios from 'axios';

export const getWishlist = async () => {
   const user = localStorage.getItem('user');
   const formatedUser = JSON.parse(user);
   const userId = formatedUser._id;
   const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/${userId}/wishlist`);
   return response.data.wishlist;
};
