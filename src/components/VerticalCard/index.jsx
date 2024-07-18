import Image from 'next/image';
import { VarticalCardStyles } from './VerticalCardStyles';
import DiscountPrice from '../DiscountPrice';
import ButtonLink from '../ButtonLink/ButtonLink';
import Button from '../Button/Button';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const VerticalCard = ({
   discount,
   code,
   price,
   publisher,
   year,
   name,
   genre,
   cover,
}) => {
   return (
      <>
         <VarticalCardStyles>
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
                  alt={`cover of ${name}`}
                  src={
                     cover
                        ? cover
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
                        ? ((price / 100) * discount).toFixed(2)
                        : null}
                  </span>
               </div>
               <Button
                  icon={<MdFavoriteBorder />}
                  url={'/'}
                  className={'wish-button'}
                  Aboutblank={false}
                  currentColor={'rgba(var(--secondary))'}
                  hoverColor={'rgba(var(--primary))'}
               />
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
      </>
   );
};

export default VerticalCard;
