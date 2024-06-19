import axios from 'axios';
require('dotenv').config();

export const getGamesByName = async (name) => {
   if (name) {
      try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/game/${name}`);
         const games = response.data;
         const filteredGames = games.filter((game) =>
            game.name.toLowerCase().includes(name.toLowerCase())
         );
         const sortedGames = filteredGames.sort((a, b) => {
            if (
               a.name.toLowerCase().startsWith(name.toLowerCase()) &&
               !b.name.toLowerCase().startsWith(name.toLowerCase())
            ) {
               return -1;
            }
            if (
               !a.name.toLowerCase().startsWith(name.toLowerCase()) &&
               b.name.toLowerCase().startsWith(name.toLowerCase())
            ) {
               return 1;
            }
            return a.name.localeCompare(b.name);
         });
         return sortedGames;
      } catch (error) {
         console.error('Error fetching the game:', error);
         return [];
      }
   } else {
      return [];
   }
};

export const getGameById = async (id) => {
   if (id) {
      try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/game/id/${id}`);
         const game = response.data;
         return game
      } catch (error) {
         console.error('Error fetching the game:', error);
         return [];
      }
   } else {
      return [];
   }
};
