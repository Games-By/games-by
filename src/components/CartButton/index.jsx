import React, { useCallback, useState } from 'react';
import { BsFillCartPlusFill, BsCartXFill } from 'react-icons/bs';
import Button from '../Button/Button';
import { useCartContext } from '@/contexts/CartContext';

const CartButton = ({ game, content = false, className }) => {
   const { cartItems, addItemToCart, removeItemFromCart } = useCartContext();
   const [isInCart, setIsInCart] = useState(
      cartItems.some((item) => item.name === game.name)
   );

   const handleCartClick = useCallback(async () => {
      try {
         if (isInCart) {
            setIsInCart(false);
            const item = cartItems.find((item) => item.name === game.name);
            const id = item ? item._id : null;
            await removeItemFromCart(id, game.name);
         } else {
            setIsInCart(true);
            await addItemToCart(game);
         }
      } catch (error) {
         console.error('Erro ao adicionar ou remover item do carrinho:', error);
         setIsInCart(!isInCart);
      }
   }, [addItemToCart, removeItemFromCart, game, isInCart, cartItems]);

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
         className={['button', className].join(' ')}
         Aboutblank={false}
      />
   );
};

export default React.memo(CartButton);