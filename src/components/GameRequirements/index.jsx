import { useTranslations } from 'next-intl';
import { RequirementsStyles } from './styles';

const GameRequirements = ({ minimum, recommended }) => {
   const t = useTranslations('GamePage.requirements');

   return (
      <>
         <RequirementsStyles className='system-requirements'>
            {minimum && (
               <div className='minimum'>
                  <span className='title'>{t('minimum')}</span>
                  <div className='game-data'>
                     <span className='key'>OS</span>
                     <span className='data'>{minimum.os}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('processor')}</span>
                     <span className='data'>{minimum.processor}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('memory')}</span>
                     <span className='data'>{minimum.memory}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('graphics')}</span>
                     <span className='data'>{minimum.graphics}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('storage')}</span>
                     <span className='data'>{minimum.storage}</span>
                  </div>
               </div>
            )}
            {recommended && (
               <div className='recommended'>
                  <span className='title'>{t('recommended')}</span>
                  <div className='game-data'>
                     <span className='key'>OS</span>
                     <span className='data'>{recommended.os}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('processor')}</span>
                     <span className='data'>{recommended.processor}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('memory')}</span>
                     <span className='data'>{recommended.memory}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('graphics')}</span>
                     <span className='data'>{recommended.graphics}</span>
                  </div>
                  <div className='game-data'>
                     <span className='key'>{t('storage')}</span>
                     <span className='data'>{recommended.storage}</span>
                  </div>
               </div>
            )}
         </RequirementsStyles>
      </>
   );
};

export default GameRequirements;
