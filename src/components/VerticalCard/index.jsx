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
            <Image
               height={370}
               width={290}
               style={{ objectFit: 'cover' }}
               alt='teste'
               src={
                  cover
                     ? cover
                     : 'https://www.huber-online.com/daisy_website_files/_processed_/8/0/csm_no-image_d5c4ab1322.jpg'
               }
               quality={100}
               className='cover'
            />
            <div className='infos'>
               <h3 className='name'>{name ? name : null}</h3>
               <span className='genre'>{genre ? genre : null}</span>
               <div className='publisher-year'>
                  {publisher ? publisher : null}, {year ? year : null}
               </div>
               <div className='price'>
                  {discount ? (
                     <DiscountPrice
                        currencyCode={code}
                        price={((price / 100) * discount).toFixed(2)}
                        classname={'discount'}
                     />
                  ) : (
                     <div style={{ height: '22px' }}></div>
                  )}
                  <div className='amount'>
                     <span className='code'>{code ? code : 'R$'}</span>
                     <span className='value'>{price ? price : null}</span>
                  </div>
               </div>

               <div className='buttons'>
                  <Button
                     icon={<MdFavoriteBorder style={{ width: '2.1rem' }} />}
                     url={'/'}
                     className={'wish-button'}
                     Aboutblank={false}
                     currentColor={'rgba(var(--purple-2))'}
                     hoverColor={'rgba(var(--cyan))'}
                  />
                  <ButtonLink
                     title='Comprar agora'
                     url={'/'}
                     className={'buy-button'}
                     bgColor={'rgba(var(--cyan), 0.1)'}
                     Aboutblank={false}
                     currentColor={'rgba(var(--cyan))'}
                     textTransform={'uppercase'}
                  />
               </div>
            </div>
         </VarticalCardStyles>
      </>
   );
};

export default VerticalCard;
