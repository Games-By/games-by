import { useCallback, useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Slide, toast } from 'react-toastify';
import { addGameToWishlist } from '@/Services/client-data/AddGameToWishlist';
import { removeGameFromWishlist } from '@/Services/client-data/removeGameFromWishlist';
import { getWishlist } from '@/Services/client-data/getWishlist';
import Button from '../Button/Button';
import { title } from 'process';

const WishlistButton = ({ gameTitle, content, className }) => {
   const [localWishlist, setLocalWishlist] = useState([]);
   const authToken =
      typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

   const handleWishlistClick = useCallback(async () => {
      if (!authToken) {
         toast(
            'Você precisa fazer login para adicionar jogos à sua lista de desejos!',
            {
               position: 'top-right',
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'dark',
               transition: Slide,
            }
         );
         return;
      }

      try {
         if (!localWishlist.includes(gameTitle)) {
            setLocalWishlist((prev) => [...prev, gameTitle]);
            await addGameToWishlist(gameTitle);
            toast(`${gameTitle} adicionado à lista de desejos.`, {
               position: 'top-right',
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'dark',
               transition: Slide,
            });
         } else {
            setLocalWishlist((prev) =>
               prev.filter((title) => title !== gameTitle)
            );
            await removeGameFromWishlist(gameTitle);
            toast(`${gameTitle} removido da sua lista de desejos.`, {
               position: 'top-right',
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'dark',
               transition: Slide,
            });
         }
         const wishList = await getWishlist();
         localStorage.setItem('wishlist', JSON.stringify(wishList));
      } catch (error) {
         console.error(
            'Erro ao adicionar ou remover jogo da lista de desejos:',
            error
         );
      }
   }, [authToken, localWishlist, gameTitle]);

   useEffect(() => {
      const fetchWishlist = () => {
         try {
            const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
            setLocalWishlist(wishList.map((item) => item.name));
         } catch (error) {
            console.error('Erro ao buscar lista de desejos:', error);
         }
      };

      fetchWishlist();
   }, []);

   return (
      <Button
         onClick={handleWishlistClick}
         title={content && content}
         icon={
            localWishlist.includes(gameTitle) ? (
               <MdFavorite className='icon' />
            ) : (
               <MdFavoriteBorder className='icon' />
            )
         }
         url={'/'}
         className={['wish-button', className && className]}
         Aboutblank={false}
         currentColor={'rgba(var(--secondary))'}
         hoverColor={'rgba(var(--primary))'}
      />
   );
};

export default WishlistButton;
