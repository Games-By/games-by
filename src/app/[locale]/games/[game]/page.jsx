'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Game from '@/components/Game';
import { debounce } from '@/utils/debounce';
import { getGameById } from '@/Services/games-service/getGames';
import { GameContainer } from './styles';
import { ToastContainer } from 'react-toastify';

const GamePage = () => {
   const [game, setGame] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const getGame = async () => {
      const id = localStorage.getItem('GameId');
      if (id) {
         try {
            setIsLoading(true);
            const gameData = await getGameById(id);
            setGame(gameData);
            setIsLoading(false);
         } catch (error) {
            console.error('Error fetching game:', error);
         } finally {
            setIsLoading(false);
         }
      }
   };

   const debouncedGetGame = debounce(getGame, 300);

   useEffect(() => {
      debouncedGetGame();
      const storedGame = JSON.parse(localStorage.getItem('Game'));
      if (storedGame) {
         setGame(storedGame);
      }
   }, [setGame]);
   return (
      <>
         <title>
            {game
               ? `Game | ${game.name ? game.name : 'Loading...'}`
               : 'Game | Games By'}
         </title>
         <Header />
         <GameContainer>
            <Game game={game} isLoading={isLoading} />
         </GameContainer>
         <ToastContainer />
      </>
   );
};

export default GamePage;
