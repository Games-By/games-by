import MetacriticScore from '../MetaScore';
import { GameInformationStyles, LanguageList } from './styles';
import { GrGallery, GrCircleInformation } from 'react-icons/gr';
import { GiComputerFan } from 'react-icons/gi';
import { HiMiniPhoto } from 'react-icons/hi2';
import { LuLanguages } from 'react-icons/lu';
import GameRequirements from '../GameRequirements';
import Link from 'next/link';
import Image from 'next/image';

const GameInformation = ({ game }) => {
   const formattedDate = (date) => {
      const fullDate = new Date(date).toLocaleDateString('pt-BR', {
         timeZone: 'UTC',
      });
      return `${fullDate}`;
   };

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
                        {formattedDate(game.releaseDate)}
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
                  {game.images.gallery &&
                     game.images.gallery.map((image, i) => (
                        <Image
                           key={i}
                           src={image}
                           width={100}
                           height={60}
                           className='image'
                        />
                     ))}

                  {!game.images.gallery || game.images.gallery.length < 9
                     ? [
                          ...Array(
                             9 -
                                (game.images.gallery
                                   ? game.images.gallery.length
                                   : 0)
                          ),
                       ].map((_, i) => (
                          <div className='box' key={`placeholder-${i}`}>
                             <HiMiniPhoto />
                          </div>
                       ))
                     : 'res'}
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

            <div className='info-box'>
               <div className='info-title'>
                  <LuLanguages />
                  <span>Idioma</span>
               </div>
               {game.supportedLanguages.length > 0 ? (
                  <LanguageList>
                     {game.supportedLanguages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                     ))}
                  </LanguageList>
               ) : (
                  <p>Sem traduções disponíveis</p>
               )}
            </div>
         </GameInformationStyles>
      </>
   );
};

export default GameInformation;
