import Image from 'next/image';
import { VarticalCardStyles } from './VerticalCardStyles';
import DiscountPrice from '../DiscountPrice';
import ButtonLink from '../ButtonLink/ButtonLink';
import WishlistButton from '../WishlistButton';
import DiscountPricePercentage from '../DiscountPricePercentage';
import useElementSize from '@/hooks/useElementSize';

const VerticalCard = ({
   discount,
   code,
   price,
   name,
   genre,
   cover,
   portraitCover,
   className,
}) => {
   const [size, cardRef] = useElementSize();
   return (
      <VarticalCardStyles ref={cardRef} className={className}>
         {discount && (
            <DiscountPricePercentage
               discount={discount}
               className={'percentage'}
               signal={'-'}
            />
         )}
         <div className='cover'>
            <Image
               height={600}
               width={300}
               style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '1rem 1rem 0 0',
               }}
               quality={100}
               priority
               alt={`capa de ${name}`}
               src={
                  cover && size.ElementWidth <= 290
                     ? cover
                     : size.ElementWidth > 290
                     ? portraitCover
                     : 'https://www.huber-online.com/daisy_website_files/_processed_/8/0/csm_no-image_d5c4ab1322.jpg'
               }
            />
         </div>
         <div className='infos'>
            <h3 className='name'>{name ? name : null}</h3>
            <span className='genre'>{genre ? genre : null}</span>
            {discount ? (
               <DiscountPrice
                  currencyCode={code}
                  price={price}
                  classname={'discount'}
               />
            ) : null}
            <div className='amount'>
               <span className='code'>{code ? code : 'R$'}</span>
               <span className='value'>
                  {!discount && price
                     ? price
                     : discount
                     ? ((price / 100) * (100 - discount)).toFixed(2)
                     : null}
               </span>
            </div>
            <WishlistButton gameTitle={name} className={'wish-button'} />
            <ButtonLink
               title='Comprar agora'
               url={'/'}
               className={'buy-button'}
               bgColor={'rgba(var(--primary), 0.1)'}
               Aboutblank={false}
               currentColor={'rgba(var(--primary))'}
               textTransform={'uppercase'}
            />
         </div>
      </VarticalCardStyles>
   );
};

export default VerticalCard;
