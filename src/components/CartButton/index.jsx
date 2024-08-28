import { useCallback } from 'react';
import { BsFillCartPlusFill, BsCartXFill } from 'react-icons/bs';
import { Slide, toast } from 'react-toastify';
import Button from '../Button/Button';
import { useCartContext } from '@/contexts/CartContext';

const CartButton = ({ game, content = false, className }) => {
   const { cartItems, addItemToCart, removeItemFromCart } = useCartContext();
   const isInCart = cartItems.some((item) => item.name === game.name);

   const handleCartClick = useCallback(async () => {
      try {
         if (isInCart) {
            const item = cartItems.find((item) => item.name === game.name);
            const id = item ? item._id : null;
            await removeItemFromCart(id, game.name);
         } else {
            await addItemToCart(game);
         }
      } catch (error) {
         console.error('Erro ao adicionar ou remover item do carrinho:', error);
      }
   }, [addItemToCart, removeItemFromCart, game, isInCart]);

   return (
      <Button
         onClick={handleCartClick}
         title={content && (isInCart ? 'Remover' : 'Adicionar')}
         icon={
            isInCart ? (
               <BsCartXFill className='icon' />
            ) : (
               <BsFillCartPlusFill className='icon' />
            )
         }
         url={'/'}
         className={['wish-button', className].join(' ')}
         Aboutblank={false}
      />
   );
};

export default CartButton;
