import Image from 'next/image';
import { VarticalCardStyles } from './VerticalCardStyles';
import DiscountPrice from '../DiscountPrice';
import Button from '../Button/Button';
import WishlistButton from '../WishlistButton';
import DiscountPricePercentage from '../DiscountPricePercentage';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { useTranslations } from 'next-intl';

const VerticalCard = ({ discount, code, price, name, cover, className, id }) => {
   const [accessing, setAccessing] = useState(false);
   const t = useTranslations();
   return (
      <VarticalCardStyles
         href={`/games/${name}`}
         className={className}
         discount={discount}
         onClickCapture={() => setAccessing(true)}
      >
         <div className='cover'>
            {accessing && (
               <div className='loading'>
                  <Loading />
                  <span>acessando</span>
               </div>
            )}
            {discount ? (
               <DiscountPricePercentage discount={discount} className={'percentage'} signal={'-'} />
            ) : null}
            <Image
               height={800}
               width={500}
               quality={100}
               priority
               alt={`${name} cover image`}
               src={
                  cover
                     ? cover
                     : 'https://www.huber-online.com/daisy_website_files/_processed_/8/0/csm_no-image_d5c4ab1322.jpg'
               }
            />
         </div>
         <div className='infos'>
            <span className='name'>{name ? name : null}</span>
            <div className='amount'>
               {discount ? (
                  <DiscountPrice currencyCode={code} price={price} classname={'discount'} />
               ) : (
                  <div style={{ height: '17px' }}></div>
               )}
               <span className='code'>{code && price > 0 ? code : ''}</span>
               <span className='value'>
                  {!discount && price
                     ? price
                     : discount
                       ? ((price / 100) * (100 - discount)).toFixed(2)
                       : t('GamePage.free')}
               </span>
            </div>
            <div
               onClick={(e) => {
                  e.stopPropagation();
               }}
            >
               <WishlistButton gameTitle={name} className={'wishlist-button'} />
            </div>
            <Button
               title='Comprar agora'
               onClick={(e) => {
                  e.stopPropagation();
                  router.push('/teste');
               }}
               className={'buy-button'}
               Aboutblank={false}
               textTransform={'uppercase'}
            />
         </div>
      </VarticalCardStyles>
   );
};

export default VerticalCard;
