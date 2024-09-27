import React from 'react';
import VerticalCard from '../VerticalCard';
import { GamesList } from './styles';

const GameList = ({ filteredGames, locale }) => {
   return (
      <GamesList className='games'>
         {filteredGames?.length > 0 ? (
            filteredGames.slice(0, 18).map((game) => (
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
            <p>No games found</p>
         )}
      </GamesList>
   );
};

export default GameList;
