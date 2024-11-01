import AdCard from '../AdCard/AdCard';
import { AdvertisingSpaceStyles } from './AdvertisingSpaceStyles';

const AdvertisingSpace = () => {
   return (
      <>
         <AdvertisingSpaceStyles>
            <AdCard className={'ad'} />
            <AdCard className={'ad'} />
            <AdCard className={'ad'} />
         </AdvertisingSpaceStyles>
      </>
   );
};

export default AdvertisingSpace;
