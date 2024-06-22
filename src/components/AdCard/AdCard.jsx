import { AdCardStyles } from './AdCardStyles';

const AdCard = ({ ad }) => {
   return (
      <>
         <AdCardStyles>{ad ? <p>{ad}</p> : <div></div>}</AdCardStyles>
      </>
   );
};

export default AdCard;
