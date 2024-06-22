import AdCard from "../AdCard/AdCard";
import { AdvertisingSpaceStyles } from "./AdvertisingSpaceStyles";

const AdvertisingSpace = () => {
   return (
      <>
         <AdvertisingSpaceStyles>
            <AdCard />
            <AdCard />
            <AdCard />
         </AdvertisingSpaceStyles>
      </>
   );
};

export default AdvertisingSpace;
