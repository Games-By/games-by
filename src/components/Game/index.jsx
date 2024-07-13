'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const Game = ({game, isLoading}) => {
   const t = useTranslations('Index');

   return (
      <>
         {game && !isLoading ? <h2>{game.name}</h2> : <p>loading...</p>}
      </>
   );
};

export default Game;
