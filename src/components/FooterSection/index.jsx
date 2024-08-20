import { useLocale } from 'next-intl';
import Title from '../Title';
import { FooterSectionStyles, FooterStyles } from './styles';
import { Link } from '../../../navigation';

const FooterSection = ({ title, itens = [] }) => {
   const locale = useLocale();
   return (
      <FooterSectionStyles>
         <Title text={title[locale] || 'no title'} className={'title'} />
         <ul className='itens'>
            {itens.map((item, index) => (
               <li className='item' key={index}>
                  <Link href={item.url}>{item[locale]}</Link>
               </li>
            ))}
         </ul>
      </FooterSectionStyles>
   );
};

export default FooterSection;
