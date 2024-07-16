import Image from 'next/image';
import { VarticalCardStyles } from './VerticalCardStyles';
import DiscountPrice from '../DiscountPrice';
import ButtonLink from '../ButtonLink/ButtonLink';
import Button from '../Button/Button';
import { FaPlus } from 'react-icons/fa';

const VerticalCard = ({discount, code, price, publisher, year, name, gender}) => {

   return (
      <>
         <VarticalCardStyles>
            <Image
               height={370}
               width={290}
               style={{ objectFit: 'cover' }}
               alt='teste'
               src={
                  'https://i.pinimg.com/originals/ec/f4/04/ecf404c4cded91e164f3133c64d74e77.jpg'
               }
               quality={100}
               className='cover'
            />
            <div className='infos'>
               <h3 className='name'>{name ? name : null}</h3>
               <span className='gender'>{gender ? gender : null}</span>
               <div className="publisher-year">{publisher ? publisher : null}, {year ? year : null}</div>
               <div className='price'>
                  {discount ? (
                     <DiscountPrice
                        currencyCode={'R$'}
                        price={discount}
                        classname={'discount'}
                     />
                  ) : (
                     <div style={{ height: '18px' }}></div>
                  )}
                  <span className='code'>{code ? code : 'R$'}</span>
                  <span className='value'>{price ? price : null}</span>
               </div>

               <div className='buttons'>
                  <Button
                     icon={<FaPlus style={{ width: '1.4rem' }} />}
                     title='Lista de desejos'
                     url={'/'}
                     className={'wish-button'}
                     Aboutblank={false}
                     currentColor={'rgba(var(--purple-2))'}
                     textTransform={'uppercase'}
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
