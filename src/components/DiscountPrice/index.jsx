import { DiscountPriceStyles } from "./DiscountPriceStyles";

const DiscountPrice = ({ price, currencyCode, classname }) => {
   return (
      <>
         <DiscountPriceStyles className={classname}>
            <span>{currencyCode ? currencyCode : null} </span>
            {price ? price : null}
         </DiscountPriceStyles>
      </>
   );
};
export default DiscountPrice;
