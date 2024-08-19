import Title from '../Title';
import { ColumnsStyle } from './styles';
import ButtonLink from '../ButtonLink/ButtonLink';
import HorizontalCard from '../HorizontalCard';
import HorizontalCardSkeleton from '../HorizontalCard/HorizontalCardSkeleton';

const GamesColumn = ({ sectionTitle, games = [], url }) => {

   return (
      <>
         <ColumnsStyle>
            <Title className={'title'} text={sectionTitle} />
            {url && (
               <ButtonLink
                  className={'view-more-button'}
                  title={'View more'}
                  url={url}
               />
            )}
            <div className='games'>
               {games.length > 0 ? games.slice(0, 4).map((game) => (
                  <HorizontalCard game={game} key={game._id} />
               )): [...Array(4)].map((_, i) => (
                  <HorizontalCardSkeleton key={i} />
               ))}
            </div>
         </ColumnsStyle>
      </>
   );
};

export default GamesColumn;
