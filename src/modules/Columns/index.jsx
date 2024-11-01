import GamesColumn from '@/components/GamesColumn';
import { ColumnsStyle, Separator } from './styles';
import { useGames } from '@/contexts/GamesContext';

const Columns = () => {
   const { freeGames, bestGames } = useGames();

   return (
      <>
         <ColumnsStyle>
            <div className='columns'>
               <GamesColumn
                  sectionTitle={'Free-to-Play'}
                  games={freeGames}
                  url={'/library?searched=free'}
               />
               <Separator />
               <GamesColumn sectionTitle={'Top Sellers'} games={bestGames} />
            </div>
         </ColumnsStyle>
      </>
   );
};

export default Columns;
