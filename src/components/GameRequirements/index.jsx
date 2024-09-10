import { RequirementsStyles } from './styles';

const GameRequirements = ({ minimum, recommended }) => {
   return (
      <>
         <RequirementsStyles className='system-requirements'>
            {minimum && (
               <div className='minimum'>
                  <span className='title'>Minimo</span>
                  <div className='game-data'>
                     <span className='key'>OS</span>
                     <span className='data'>{minimum.os}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Processador</span>
                     <span className='data'>{minimum.processor}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Memória</span>
                     <span className='data'>{minimum.memory}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Gráficos</span>
                     <span className='data'>{minimum.graphics}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Armazenamento disponível</span>
                     <span className='data'>{minimum.storage}</span>
                  </div>
               </div>
            )}
            {recommended && (
               <div className='recommended'>
                  <span className='title'>Recomendado</span>
                  <div className='game-data'>
                     <span className='key'>OS</span>
                     <span className='data'>{recommended.os}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Processador</span>
                     <span className='data'>{recommended.processor}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Memória</span>
                     <span className='data'>{recommended.memory}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Gráficos</span>
                     <span className='data'>{recommended.graphics}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>Armazenamento disponível</span>
                     <span className='data'>{recommended.storage}</span>
                  </div>
               </div>
            )}
         </RequirementsStyles>
      </>
   );
};

export default GameRequirements;
