import { IoCartOutline } from 'react-icons/io5';
import { Cart } from './styles';
import { useRouter } from '../../../navigation';
import { useCartContext } from '@/contexts/CartContext';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const CartIcon = () => {
   const { isLoggedIn } = useAuth();
   const { cartCount, fetchCart } = useCartContext();
   const route = useRouter();

   useEffect(() => {
      if (isLoggedIn) fetchCart();
   }, [isLoggedIn, fetchCart]);

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
