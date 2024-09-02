import { IoCartOutline } from "react-icons/io5";
import { Cart } from "./styles";

const CartIcon = ({ cartCount }) => {
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
