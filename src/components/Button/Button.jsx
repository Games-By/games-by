import Loading from '../Loading/Loading';
import { ButtonStyles } from './ButtonStyles';

const Button = ({
   title,
   icon,
   textTransform,
   className,
   loading,
   onClick,
   loadingSize
}) => {
   return (
      <>
         <ButtonStyles
            style={{ textTransform: textTransform }}
            className={className}
            disabled={loading}
            onClick={onClick}
         >
            {icon && icon}
            {loading ? <Loading loading={loading} size={loadingSize && loadingSize} /> : title}
         </ButtonStyles>
      </>
   );
};

export default Button;
