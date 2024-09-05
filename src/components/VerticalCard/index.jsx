import Image from 'next/image';
import { VarticalCardStyles } from './VerticalCardStyles';
import DiscountPrice from '../DiscountPrice';
import Button from '../Button/Button';
import WishlistButton from '../WishlistButton';
import DiscountPricePercentage from '../DiscountPricePercentage';
import useElementSize from '@/hooks/useElementSize';
import { useRouter } from '../../../navigation';
import { useState } from 'react';
import Loading from '../Loading/Loading';

const VerticalCard = ({
   discount,
   code,
   price,
   name,
   cover,
   className,
   id,
}) => {
   const [size, cardRef] = useElementSize();
   const [accessing, setAccessing] = useState(false);
   const router = useRouter();
   return (
      <VarticalCardStyles
         ref={cardRef}
         className={className}
         onClick={() => {
            localStorage.setItem('GameId', id);
            setAccessing(true);
            router.push(`/games/${encodeURIComponent(name.toLowerCase())}`);
         }}
         discount={discount}
      >
         <div className='cover'>
            {discount && (
               <DiscountPricePercentage
                  discount={discount}
                  className={'percentage'}
                  signal={'-'}
               />
            )}
            {accessing && (
               <div className='loading'>
                  <Loading />
                  <span>acessando</span>
               </div>
            )}
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
                  <DiscountPrice
                     currencyCode={code}
                     price={price}
                     classname={'discount'}
                  />
               ) : null}
               <span className='code'>{code ? code : 'R$'}</span>
               <span className='value'>
                  {!discount && price
                     ? price
                     : discount
                     ? ((price / 100) * (100 - discount)).toFixed(2)
                     : null}
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
