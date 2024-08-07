import Image from 'next/image';
import { Images } from './styles';

const HorizontalImages = () => {
   const images = [
      '/assets/paralax/3.png',
      '/assets/paralax/2.png',
      '/assets/paralax/1.png',
   ];

   return (
      <>
         <Images>
            <div className='images-container'>
               {images.map((image, i) => (
                  <Image
                     key={i}
                     src={image}
                     alt={`paralax image ${i + 1}`}
                     width={300}
                     height={300}
                     className='image'
                     quality={100}
                  />
               ))}
            </div>
         </Images>
      </>
   );
};

export default HorizontalImages;
