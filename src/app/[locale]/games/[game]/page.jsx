'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Game from '@/components/Game';
import { debounce } from '@/utils/debounce';
import { getGamesByName } from '@/Services/games-service/getGames';
import { ToastContainer } from 'react-toastify';
import { Main } from '@/Styles/styles';
import SideBar from '@/components/SideBar';
import useWindowSize from '@/hooks/useWindowSize';
import Footer from '@/modules/Footer';
import { usePathname } from '../../../../../navigation';

const GamePage = () => {
   const [game, setGame] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const { width } = useWindowSize();
   const path = usePathname();

   const getGame = async () => {
      const gameName = decodeURIComponent(path.split('/games/')[1]);
      try {
         setIsLoading(true);
         const gameData = await getGamesByName(gameName);
         setGame(gameData[0]);
         setIsLoading(false);
      } catch (error) {
         console.error('Error fetching game:', error);
      } finally {
         setIsLoading(false);
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
            {game ? `Game | ${game.name ? game.name : 'Loading...'}` : 'Game | Games By'}
         </title>
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <div className='main-content'>
               <Header />
               <Game isLoading={isLoading} game={game} />
            </div>
         </Main>
         <Footer />
         <ToastContainer />
      </>
   );
};

export default GamePage;
