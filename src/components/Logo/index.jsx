import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';

const Logo = ({ reduced = false, logoWidth, logoHeight, className }) => {
   const { width } = useWindowSize();
   return (
      <>
         <Image
            alt="Games By Logo's"
            src={reduced && width < 768 ? '/assets/logo reduced.svg' : '/assets/logo.png'}
            width={logoWidth || 200}
            height={logoHeight || 80}
            style={{ objectFit: 'contain' }}
            className={className}
         />
      </>
   );
};

export default Logo;
