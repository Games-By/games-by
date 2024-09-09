import MetacriticScore from '../MetaScore';
import { GameInformationStyles } from './styles';
import { GrGallery, GrCircleInformation } from 'react-icons/gr';
import { GiComputerFan } from 'react-icons/gi';
import { HiMiniPhoto } from 'react-icons/hi2';
import GameRequirements from '../GameRequirements';
import Link from 'next/link';

const GameInformation = ({ game }) => {
   return (
      <>
         <GameInformationStyles className='game-info'>
            <MetacriticScore metacriticScore={game.metacriticScore} />

            <div className='info-box'>
               <div className='info-title'>
                  <GrCircleInformation />
                  <span>informações</span>
               </div>
               <div className='informations'>
                  <div className='game-data'>
                     <span className='key'>reviews</span>
                     <span className='data'>({game.userReviews.length})</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>lançamento</span>
                     <span className='data'>
                        {new Date(game.releaseDate).toLocaleDateString()}
                     </span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>desenvolvedor</span>
                     <span className='data'>{game.developer}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>publisher</span>
                     <span className='data'>{game.publisher}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>web-site</span>
                     <Link
                        href={game.community.website}
                        target='_blank'
                        className='data'
                     >
                        {game.name || 'Não cadastrado'}
                     </Link>
                  </div>
               </div>
            </div>

            <div className='info-box gallery-box'>
               <div className='info-title'>
                  <GrGallery />
                  <span>galeria</span>
               </div>
               <div className='gallery'>
                  {game.images.gallery ||
                     [...Array(9)].map((_, i) => (
                        <div className='box'>
                           <HiMiniPhoto />
                        </div>
                     ))}
               </div>
            </div>

            <div className='info-box'>
               <div className='info-title'>
                  <GiComputerFan />
                  <span>requisitos</span>
               </div>
               <GameRequirements
                  minimum={game.systemRequirements.minimum}
                  recommended={game.systemRequirements.recommended}
               />
            </div>
         </GameInformationStyles>
      </>
   );
};

export default GameInformation;
