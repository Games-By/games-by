'use client'
import React, { useEffect, useState } from 'react';
import GlobalStyle from '@/Styles/globals';
import Header from '@/components/Header/Header';
import { useTranslations } from 'next-intl';
import { getGameById } from '@/Services/games-service/getGames';
import { debounce } from '@/utils/debounce';

const GamePage = () => {
   const t = useTranslations('Index');
   const [game, setGame] = useState({})
   const [  isLoading, setIsLoading] = useState(false)

   const getGame = async () => {
      const id = localStorage.getItem('GameId');
      if (id) {
         try {
            setIsLoading(true);
            const gameData = await getGameById(id);
            setGame(gameData)
            setIsLoading(false);
         } catch (error) {
            console.error('Error fetching game:', error);
            setIsLoading(false);
         }
      }
   };

   const debouncedGetGame = debounce(getGame, 300);

   useEffect(() => {
      debouncedGetGame();
   }, []);

   return (
      <>
         <GlobalStyle />
         <Header />
         <h1>GamePage</h1>
         {game && !isLoading ? <h2>{game.name}</h2> : <p>loading...</p>}
      </>
   );
};

export default GamePage;
