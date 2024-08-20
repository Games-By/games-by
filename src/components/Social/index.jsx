import {
   FaXTwitter,
   FaInstagram,
   FaYoutube,
   FaTiktok,
   FaDiscord,
} from 'react-icons/fa6';
import { SocialStyles } from './styles';

const Social = ({ classname }) => {
   return (
      <>
         <SocialStyles className={classname}>
            <a href='' target='_blank'>
               <FaInstagram />
            </a>
            <a href='' target='_blank'>
               <FaXTwitter />
            </a>
            <a href='' target='_blank'>
               <FaYoutube />
            </a>
            <a href='' target='_blank'>
               <FaTiktok />
            </a>
            <a href='' target='_blank'>
               <FaDiscord />
            </a>
         </SocialStyles>
      </>
   );
};

export default Social;
