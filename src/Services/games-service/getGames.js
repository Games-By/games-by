import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const getGames = async () => {
   try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/games`);
      const games = response.data;
      return games;
   } catch (error) {
      console.error('Error fetching the game:', error);
      return [];
   }
};

export const getGamesByName = async (name) => {
   if (name) {
      try {
         const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/game/${name}`
         );
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
         const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/game/id/${id}`
         );
         const game = response.data;
         return game;
      } catch (error) {
         console.error('Error fetching the game:', error);
         return [];
      }
   } else {
      return [];
   }
};

export const getReleaseGames = async () => {
   try {
      const response = await axios.get(
         `${process.env.NEXT_PUBLIC_SERVER_GAMES_API}/games/releases`
      );
      const games = response.data;
      return games;
   } catch (error) {
      console.error('Error fetching the game:', error);
      return [];
   }
};
