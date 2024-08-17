import GamesColumn from '@/components/GamesColumn';
import { ColumnsStyle, Separator } from './styles';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
import { getGames } from '@/Services/games-service/getGames';

const Columns = () => {
   const [freeGames, setFreeGames] = useState([]);
   const [topSellers, setTopSellers] = useState([]);

   const getFreeGames = (games) => {
      const freeGames = games.filter(
         (game) => game.prices['en-US'].amount === 0
      );
      setFreeGames(freeGames);
   };

   const getTopSellers = (games) => {
      if (!Array.isArray(games) || games.length === 0) {
         return [];
      }

      const sortedGames = [...games].sort((a, b) => b.rating - a.rating);

      setTopSellers(sortedGames.slice(0, 5   ));
   };

   const getAllGames = async () => {
      try {
         const response = await getGames();

         if (response) {
            getFreeGames(response);
            getTopSellers(response);
         }
      } catch (error) {
         console.error('Failed to fetch games:', error);
      }
   };

   const debouncedGetAllGames = debounce(getAllGames, 1000);

   useEffect(() => {
      debouncedGetAllGames();
   }, []);
   return (
      <>
         <ColumnsStyle>
            <GamesColumn sectionTitle={'Free-to-Play'} games={freeGames} url={'/catalog?searched=free'} />
            <Separator />
            <GamesColumn sectionTitle={'Top Sellers'} games={topSellers} />
         </ColumnsStyle>
      </>
   );
};

export default Columns;
