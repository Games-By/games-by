import axios from 'axios';

export const getAllUsers = async () => {
   const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`);
   return response.data;
};
