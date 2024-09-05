'use client';
import React, {
   createContext,
   useContext,
   useState,
   useEffect,
   useCallback,
} from 'react';
import { getCart } from '@/Services/client-data/getCartData';
import { addToCart } from '@/Services/client-data/addToCart';
import { removeFromCart } from '@/Services/client-data/removeFromCart';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
   const [cartCount, setCartCount] = useState(0);
   const [cartItems, setCartItems] = useState([]);
   const [authToken, setAuthToken] = useState(null);

   const fetchCart = useCallback(async () => {
      try {
         let cartList = await getCart();
         setCartItems(cartList);
         setCartCount(cartList.length);
         localStorage.setItem('cart', JSON.stringify(cartList));
      } catch (error) {
         console.error('Erro ao buscar carrinho:', error);
      }
   }, []);

   const addItemToCart = useCallback(
      async (item) => {
         try {
            if (authToken) {
               await addToCart(item);
               fetchCart();
            }
            setCartItems((prevItems) => {
               const updatedItems = [...prevItems, item];

               localStorage.setItem('cart', JSON.stringify(updatedItems));
               const localCart = JSON.parse(localStorage.getItem('cart')) || [];
               localStorage.setItem('localCart', JSON.stringify(localCart));

               return updatedItems;
            });
            setCartCount((prevCount) => prevCount + 1);
         } catch (error) {
            console.error('Erro ao adicionar item ao carrinho:', error);
         }
      },
      [authToken]
   );

   const removeItemFromCart = useCallback(
      async (itemId, itemName) => {
         try {
            let updatedItems = [];

            if (authToken) {
               await removeFromCart(itemId);
               updatedItems = cartItems.filter((item) => item._id !== itemId);
            } else {
               updatedItems = cartItems.filter(
                  (item) => item.name !== itemName
               );
            }

            setCartItems(updatedItems);
            localStorage.setItem('cart', JSON.stringify(updatedItems));
            localStorage.setItem('localCart', JSON.stringify(updatedItems));
            if (cartCount > 0) {
               setCartCount((prevCount) => prevCount - 1);
            }
         } catch (error) {
            console.error('Erro ao remover item do carrinho:', error);
         }
      },
      [authToken, cartItems, setCartItems, setCartCount]
   );

   useEffect(() => {
      if (typeof window !== 'undefined') {
         const token = localStorage.getItem('authToken');
         setAuthToken(token);

         const updateCart = async () => {
            const savedCart = localStorage.getItem('cart');
            const cartList = JSON.parse(savedCart) || [];
            const localCart =
               JSON.parse(localStorage.getItem('localCart')) || [];

            if (savedCart && token) {
               if (localCart.length > 0) {
                  const itemsToAdd = localCart.filter(
                     (item) =>
                        !cartList.some(
                           (cartItem) =>
                              cartItem.name === item.name &&
                              cartItem.platform === item.platform
                        )
                  );

                  for (const item of itemsToAdd) {
                     const itemNoExistsInCart = cartList.some(
                        (cartItem) =>
                           cartItem.name === item.name &&
                           cartItem.platform === item.platform
                     );
                     if (itemNoExistsInCart) {
                        await addToCart(item);
                     }
                  }

                  const updatedCartList = [...cartList, ...itemsToAdd];
                  localStorage.setItem('cart', JSON.stringify(updatedCartList));
                  localStorage.removeItem('localCart');

                  setCartItems(updatedCartList);
                  setCartCount(updatedCartList.length);
               } else {
                  setCartItems(cartList);
                  setCartCount(cartList.length);
               }
            } else {
               fetchCart();
            }
         };

         updateCart();
      }
   }, [fetchCart]);

   return (
      <CartContext.Provider
         value={{
            cartCount,
            cartItems,
            fetchCart,
            addItemToCart,
            removeItemFromCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
