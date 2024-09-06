'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Game from '@/components/Game';
import { debounce } from '@/utils/debounce';
import { getGameById } from '@/Services/games-service/getGames';
import { GameContainer } from './styles';
import { ToastContainer } from 'react-toastify';
import { Main } from '@/Styles/styles';
import SideBar from '@/components/SideBar';
import useWindowSize from '@/hooks/useWindowSize';

const GamePage = () => {
   const [game, setGame] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const { width } = useWindowSize();

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
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <div className='main-content'>
               <Header />
               <Game isLoading={isLoading} game={game} />
            </div>
         </Main>
         <ToastContainer />
      </>
   );
};

export default GamePage;
