import Image from 'next/image';
import { Images, Paralax } from './styles';
import { title } from 'process';
import { useLocale } from 'next-intl';

const HorizontalImages = () => {
   const locale = useLocale();
   const paralaxes = [
      {
         title: {
            en: 'Innovation',
            pt: 'Inovação',
            es: 'innovación',
         },
         image: '/assets/paralax/3.png',
      },
      {
         title: {
            en: 'Immersion',
            pt: 'Imerção',
            es: 'Inmersión',
         },
         image: '/assets/paralax/2.png',
      },
      {
         title: {
            en: 'Exploration',
            pt: 'Exploração',
            es: 'Exploración',
         },
         image: '/assets/paralax/1.png',
      },
   ];

   const currentLocale = (loc) => {
      switch (loc) {
         case 'pt-BR':
            return 'pt';
         case 'es-ES':
            return 'es';
         case 'en-US':
         default:
            return 'en';
      }
   };

   return (
      <>
         <Images>
            <div className='paralaxes'>
               {paralaxes.map((paralax, i) => (
                  <Paralax key={i}>
                     <span className={`${paralax.title['en']}`}>
                        {paralax.title[currentLocale(locale)]}
                     </span>
                     <Image
                        src={paralax.image}
                        alt={`paralax image ${i + 1}`}
                        width={300}
                        height={300}
                        className='image'
                        quality={100}
                     />
                  </Paralax>
               ))}
            </div>
         </Images>
      </>
   );
};

export default HorizontalImages;
