import Logo from '@/components/Logo';
import { FooterStyles } from './styles';
import FooterSection from '@/components/FooterSection';
import data from '@/data/menu.json';
import Social from '@/components/Social';
import Copyright from '@/components/Copyright';
import Image from 'next/image';

const { footer } = data;

const Footer = () => {
   return (
      <FooterStyles>
         <Logo className={'logo'} />
         <div className='sections'>
            {footer.map((item, i) => (
               <FooterSection key={i} title={item.title} itens={item.itens} />
            ))}
         </div>
         <Social classname={'social'} />
         <div className='card-payment'>
            <Image
               alt='mastercard'
               src={'https://www.svgrepo.com/show/362011/mastercard.svg'}
               width={50}
               height={35}
            />
            <Image
               alt='mastercard'
               src={'https://www.svgrepo.com/show/362033/visa.svg'}
               width={50}
               height={35}
            />
            <Image
               alt='mastercard'
               src={'https://www.svgrepo.com/show/361993/elo-3.svg'}
               width={50}
               height={35}
            />
         </div>
         <Copyright />
      </FooterStyles>
   );
};

export default Footer;
