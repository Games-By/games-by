import { AdCardStyles } from './AdCardStyles';

const AdCard = ({ ad, className }) => {
   return (
      <>
         <AdCardStyles className={className}>{ad ? <p>{ad}</p> : <div></div>}</AdCardStyles>
      </>
   );
};

export default AdCard;
