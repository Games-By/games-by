import axios from 'axios';

export const addToCart = async (game) => {
   const user = localStorage.getItem('user');
   const cartItem = {
      name: game.name,
      description: {
         'en-US': game.description['en-US'],
         'pt-BR': game.description['pt-BR'],
         'es-ES': game.description['es-ES'],
      },
      image: game.images?.coverImage,
      platform: game.platforms,
      genres: {
         'en-US': game.genres['en-US'],
         'pt-BR': game.genres['pt-BR'],
         'es-ES': game.genres['es-ES'],
      },
      releaseYear: game.releaseYear,
      rating: game.rating,
      prices: {
         'en-US': {
            currencyCode: game.prices['en-US'].currencyCode,
            amount: game.prices['en-US'].amount,
         },
         'pt-BR': {
            currencyCode: game.prices['pt-BR'].currencyCode,
            amount: game.prices['pt-BR'].amount,
         },
         'es-ES': {
            currencyCode: game.prices['es-ES'].currencyCode,
            amount: game.prices['es-ES'].amount,
         },
      },
   };
   if (user) {
      try {
         const formatedUser = JSON.parse(user);
         const userId = formatedUser._id;

         const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart/add`, {
            userId,
            cartItem,
         });
         return response.data;
      } catch (error) {
         console.error('Error adding item to cart:', error);
         throw error;
      }
   } else {
      return;
   }
};
