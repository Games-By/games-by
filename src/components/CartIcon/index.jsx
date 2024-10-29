import { IoCartOutline } from 'react-icons/io5';
import { Cart } from './styles';
import { useRouter } from '../../../navigation';

const CartIcon = ({ cartCount }) => {
   const route = useRouter();

   return (
      <Cart
         onClick={() => {
            route.push('/cart');
         }}
      >
         <span className='number'>{cartCount || 0}</span>
         <IoCartOutline className='cart' />
      </Cart>
   );
};

export default CartIcon;
