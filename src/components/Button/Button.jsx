import Loading from '../Loading/Loading';
import { ButtonStyles } from './ButtonStyles';

const Button = ({
   title,
   icon,
   textTransform,
   className,
   loading,
   onClick,
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
            {loading ? <Loading loading={loading} /> : title}
         </ButtonStyles>
      </>
   );
};

export default Button;
