'use client';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
   Buttons,
   GameBox,
   GameDescription,
   GameTitle,
   Genres,
   Rating,
   Wallpaper,
} from './styles';
import Image from 'next/image';
import ButtonLink from '../ButtonLink/ButtonLink';
import WishlistButton from '../WishlistButton';
import CartButton from '../CartButton';
import GamePlatforms from '../GamePlatforms';
import GameMedia from '../GameMedia';
import GamePrice from '../GamePrice';
import { getStarIcons } from '@/utils/formatRating';
import MetacriticScore from '../MetaScore';

const Game = ({ game, isLoading }) => {
   const t = useTranslations();
   const locale = useLocale();

   return (
      <>
         {!isLoading ? (
            <GameBox>
               <Wallpaper image={game.images?.wallpapers[2].url}></Wallpaper>
               <Image
                  alt=''
                  width={600}
                  height={500}
                  src={game.images?.coverImage}
                  quality={100}
                  className='cover'
               />
               <div className='infos'>
                  <GameTitle>{game.name}</GameTitle>
                  <GameDescription>{game.description[locale]}</GameDescription>
                  <Rating>
                     <div className='star-icons'>
                        {getStarIcons(game.rating)} | {game.rating}
                     </div>
                     <MetacriticScore metacriticScore={game.metacriticScore} />
                  </Rating>
                  <GamePrice
                     amount={game.prices[locale].amount}
                     currencyCode={game.prices[locale].currencyCode}
                     discount={game.discount}
                     className={'prices'}
                  />
                  <GamePlatforms
                     platforms={game.platforms}
                     className={'platforms'}
                  />
               </div>
               <Genres>
                  <p className='title'>
                     Tags populares definidas pelo usuários para este produto:
                  </p>
                  {game.genres[locale].map((genre) => (
                     <span className='genre' key={genre}>
                        {genre}
                     </span>
                  ))}
               </Genres>
               <Buttons>
                  <ButtonLink
                     title={'Community Hub'}
                     url={game.community?.website}
                     Aboutblank={true}
                     className={`community`}
                  />
                  <CartButton game={game} className={'cart'} />
                  <ButtonLink title={'Buy'} url={''} className={`buy`} />
                  <WishlistButton
                     gameTitle={game.name}
                     content={true}
                     className={`wish`}
                  />
               </Buttons>
               <GameMedia
                  trailer={game.trailer}
                  wallpapers={game.images.wallpapers}
               />
            </GameBox>
         ) : (
            <p>loading...</p>
         )}
      </>
   );
};

export default Game;
