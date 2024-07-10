import { DiscountPriceStyles } from "./DiscountPriceStyles";

const DiscountPrice = ({ price, currencyCode, classname }) => {
   return (
      <>
         <DiscountPriceStyles>
            <span>{currencyCode ? currencyCode : 'BRL'} </span>
            {price ? price : '20,00'}
         </DiscountPriceStyles>
      </>
   );
};
export default DiscountPrice;
