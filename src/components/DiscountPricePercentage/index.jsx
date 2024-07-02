import { DiscountPricePercentageStyles } from "./DiscountPricePercentageStyles";

const DiscountPricePercentage = ({ discount, signal, bgcolor }) => {
   return (
      <>
         <DiscountPricePercentageStyles bgcolor={bgcolor}>
            {signal ? signal : ''}
            {discount ? discount : ''}
            %
         </DiscountPricePercentageStyles>
      </>
   );
};
export default DiscountPricePercentage;
