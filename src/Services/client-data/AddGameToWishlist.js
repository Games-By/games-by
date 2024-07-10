import axios from "axios";
import { getGamesByName } from "../games-service/getGames"

export const addGameToWishlist = async (gameTitle) => {
   const user = localStorage.getItem('user')
   const formatedUser = JSON.parse(user)
   const userId = formatedUser._id
   const games = await getGamesByName(gameTitle);
   if (games.length > 0) {
      const game = games[0];

      const wishListData = {
         userId: userId,
         wishItem: {
            name: game.name,
            description: game.description,
            image: game.images.coverImage,
            platform: '',
            genre: game.genres,
            releaseYear: game.releaseYear,
            rating: game.rating
         }
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist/add`, wishListData)

   } else {
      console.error('No game found with the given title');
   }
};

// {
//       "platform": "Plataforma do Jogo",
//       "genre": "Gênero do Jogo",
//       "releaseYear": 2024,
//       "rating": 4.5
//    }
// }
