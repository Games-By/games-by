import { MetaScore } from './styles';

const MetacriticScore = ({ metacriticScore }) => {
   return (
      <MetaScore>
         <span className='title'>Metascore</span>
         <div
            className='score'
            style={{
               backgroundColor:
                  metacriticScore <= 40
                     ? 'rgba(var(--red))'
                     : metacriticScore <= 70
                     ? 'rgba(var(--yellow))'
                     : 'rgba(var(--primary))',
            }}
         >
            {metacriticScore}
         </div>
      </MetaScore>
   );
};

export default MetacriticScore;
