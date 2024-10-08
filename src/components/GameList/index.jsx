import React from 'react';
import VerticalCard from '../VerticalCard';
import { GamesList } from './styles';
import VerticalCardSkeleton from '../VerticalCard/VerticalCardSkeleton';

const GameList = ({ filteredGames, locale, loading }) => {
   return (
      <GamesList className='games'>
         {loading ? (
            [...Array(18)].map((_, i) => (
               <VerticalCardSkeleton key={i} />
            ))
         ) : (
            filteredGames.length > 0 ? (
               filteredGames
                  .slice(0, 18)
                  .map((game) => (
                     <VerticalCard
                        key={game._id}
                        name={game.name}
                        discount={game.discount}
                        code={game.prices[locale].currencyCode}
                        price={game.prices[locale].amount}
                        cover={game.images.coverImage}
                     />
                  ))
            ) : (
               <div className="not-found">
                  <h2 className='title'>
                     Nenhum game encontrado :(
                  </h2>
               </div>
            )
         )}
      </GamesList>
   );
};

export default GameList;
