import { DiscountPricePercentageStyles } from './DiscountPricePercentageStyles';

const DiscountPricePercentage = ({ discount, signal, bgcolor, className }) => {
   return (
      <>
         <DiscountPricePercentageStyles bgcolor={bgcolor} className={className}>
            {signal ? signal : ''}
            {discount ? discount : ''}%
         </DiscountPricePercentageStyles>
      </>
   );
};
export default DiscountPricePercentage;
