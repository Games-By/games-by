'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getGames } from '@/Services/games-service/getGames';
import { debounce } from '@/utils/debounce';

const GamesContext = createContext();

export const useGames = () => useContext(GamesContext);

export const GamesProvider = ({ children }) => {
   const [games, setGames] = useState([]);
   const [releasesGames, setReleaseGames] = useState([]);
   const [discountGames, setDiscountGames] = useState([]);
   const [freeGames, setFreeGames] = useState([]);
   const [bestGames, setBestGames] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const getReleaseGames = (response) => {
      const releaseGamesData = response.filter((game) => game.releaseYear >= 2022);
      setReleaseGames(releaseGamesData);
   };

   const getDiscountGames = (response) => {
      const discountGamesData = response.filter((game) => game.discount > 0);
      setDiscountGames(discountGamesData);
   };

   const getFreeGames = (response) => {
      const discountGamesData = response.filter((game) => game.prices['en-US'].amount === 0);
      setFreeGames(discountGamesData);
   };

   const sortGamesByRating = (response) => {
      const sortedGames = response.sort((a, b) => b.rating - a.rating);
      setBestGames(sortedGames);
   };

   const fetchGames = async () => {
      setLoading(true);
      try {
         const response = await getGames();
         setGames(response);
         getReleaseGames(response);
         getDiscountGames(response);
         getFreeGames(response);
         sortGamesByRating(response);
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(false);
      }
   };

   const debouncedFetchGames = debounce(fetchGames, 1500);

   useEffect(() => {
      debouncedFetchGames();
   }, []);

   return (
      <GamesContext.Provider
         value={{ games, releasesGames, discountGames, freeGames, bestGames, loading, error }}
      >
         {children}
      </GamesContext.Provider>
   );
};
