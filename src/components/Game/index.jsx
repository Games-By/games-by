'use client';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
   Buttons,
   GameBox,
   GameContainer,
   GameDescription,
   GameTitle,
   Genres,
   Rating,
} from './styles';
import Image from 'next/image';
import ButtonLink from '../ButtonLink/ButtonLink';
import WishlistButton from '../WishlistButton';
import CartButton from '../CartButton';
import GamePlatforms from '../GamePlatforms';
import GameMedia from '../GameMedia';
import GamePrice from '../GamePrice';
import { getStarIcons } from '@/utils/formatRating';
import useWindowSize from '@/hooks/useWindowSize';
import GameInformation from '../GameInformation';

const Game = ({ game, isLoading }) => {
   const t = useTranslations();
   const locale = useLocale();
   const { width } = useWindowSize();

   return (
      <>
         {!isLoading ? (
            <GameContainer>
               <GameBox image={game.images?.wallpapers[2].url} className='game'>
                  <div className='top'>
                     <Rating className='rating'>
                        <div className='star-icons'>
                           {getStarIcons(game.rating, 1.4)} | {game.rating}
                        </div>
                     </Rating>
                     <ButtonLink
                        title={'Community Hub'}
                        url={game.community?.website}
                        Aboutblank={true}
                        className={`community-button`}
                     />
                  </div>
                  <div className='infos'>
                     <Image
                        alt=''
                        width={600}
                        height={500}
                        src={
                           width > 768
                              ? game.images?.coverImage
                              : game.images?.secondaryCovers[0].url
                        }
                        quality={100}
                        className='cover'
                     />
                     <GameTitle className='name'>{game.name}</GameTitle>
                     <GameDescription className='description'>
                        {game.description[locale]}
                     </GameDescription>
                     <Genres className='genres'>
                        <p className='title'>
                           Tags populares definidas pelo usuários para este
                           produto:
                        </p>
                        {game.genres[locale].map((genre) => (
                           <span className='genre' key={genre}>
                              {genre}
                           </span>
                        ))}
                     </Genres>
                     <Buttons>
                        <ButtonLink title={'Buy'} url={''} className={`buy`} />
                        <CartButton game={game} className={'cart'} />
                        <WishlistButton
                           gameTitle={game.name}
                           content={true}
                           className={`wish`}
                        />
                     </Buttons>
                     <GamePrice
                        amount={game.prices[locale].amount}
                        currencyCode={game.prices[locale].currencyCode}
                        discount={game.discount}
                        className={'price'}
                     />
                  </div>
                  <GamePlatforms
                     platforms={game.platforms}
                     className={'platforms'}
                  />
                  <GameMedia
                     trailer={game.trailer}
                     wallpapers={game.images.wallpapers}
                  />
               </GameBox>
               <div className='comments'>comments</div>
               <GameInformation game={game} />
            </GameContainer>
         ) : (
            <p>loading...</p>
         )}
      </>
   );
};

export default Game;
