import { useTranslations } from 'next-intl';
import DiscountPrice from '../DiscountPrice';
import DiscountPricePercentage from '../DiscountPricePercentage';
import { GamePriceContainer } from './styles';

const GamePrice = ({ currencyCode, amount, discount, className }) => {
   const t = useTranslations('GamePage');

   return (
      <GamePriceContainer className={className}>
         {discount ? (
            <DiscountPricePercentage
               discount={discount}
               className={'percentage'}
               signal={'-'}
            />
         ) : (
            ''
         )}
         {discount ? (
            <DiscountPrice currencyCode={currencyCode} price={amount} classname={'old-price'}/>
         ) : (
            ''
         )}
         <div className='amount'>
            <span className='code'>
               {currencyCode && amount > 0 ? currencyCode : ''}
            </span>
            <span className='value'>
               {!discount && amount
                  ? amount
                  : discount
                  ? ((amount / 100) * (100 - discount)).toFixed(2)
                  : null}
               {amount === 0 && t('free')}
            </span>
         </div>
      </GamePriceContainer>
   );
};

export default GamePrice;
