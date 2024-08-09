import { useEffect, useState, useCallback } from 'react';
import VerticalCard from '../VerticalCard';
import { getGames } from '@/Services/games-service/getGames';
import { useLocale } from 'next-intl';
import { ReleaseStyles } from './ReleasesStyles';
import { debounce } from '@/utils/debounce';
import Title from '../Title';
import { getWishlist } from '@/Services/client-data/getWishlist';
import { Slide, toast } from 'react-toastify';
import { addGameToWishlist } from '@/Services/client-data/AddGameToWishlist';
import { removeGameFromWishlist } from '@/Services/client-data/removeGameFromWishlist';
import VerticalCardSkeleton from '../VerticalCard/VerticalCardSkeleton';

const Releases = () => {
   const locale = useLocale();
   const [releases, setReleases] = useState([]);
   const [localWishlist, setLocalWishlist] = useState([]);
   const [gameUpdated, setGameUpdated] = useState('');
   const authToken = localStorage.getItem('authToken');

   const fetchWishlist = useCallback(() => {
      try {
         const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
         setLocalWishlist(wishList.map((item) => item.name));
      } catch (error) {
         console.error('Error fetching wishlist:', error);
      }
   }, []);

   const getReleases = useCallback(async () => {
      const games = await getGames();
      const filteredGames = games.filter((game) => game.releaseYear >= 2022);
      setReleases(filteredGames);
   }, []);

   const handleWishlistClick = useCallback(
      async (gameTitle) => {
         if (!authToken) {
            toast('You need to log in to add games to your wishlist!', {
               position: 'top-right',
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: 'dark',
               transition: Slide,
            });
            return;
         }

         try {
            if (!localWishlist.includes(gameTitle)) {
               setLocalWishlist((prev) => [...prev, gameTitle]);
               await addGameToWishlist(gameTitle);
               toast(`${gameTitle} Added to wish list.`, {
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
               toast(`${gameTitle} removed from your wish list.`, {
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
            console.error('Error adding or removing game to wishlist:', error);
         } finally {
            setGameUpdated(gameTitle);
         }
      },
      [authToken, localWishlist]
   );

   const debouncedGetReleases = useCallback(debounce(getReleases, 1000), [
      getReleases,
   ]);

   useEffect(() => {
      if (releases.length < 1) {
         debouncedGetReleases();
      }
      fetchWishlist();
   }, [debouncedGetReleases, fetchWishlist, gameUpdated]);

   return (
      <>
         <ReleaseStyles>
            <Title text='Top New releases' />
            <div className='releases'>
               {releases.length > 0 ? (
                  releases
                     .slice(0, 4)
                     .map((release) => (
                        <VerticalCard
                           key={release._id}
                           name={release.name}
                           cover={release.images.coverImage}
                           code={release.prices[locale].currencyCode}
                           price={release.prices[locale].amount}
                           discount={release.discount}
                           genre={release.genres[locale]}
                           isInWishlist={localWishlist.includes(release.name)}
                           wishListAction={() =>
                              handleWishlistClick(release.name)
                           }
                        />
                     ))
               ) :
                  [...Array(4)].map((_, i) => (
                  <VerticalCardSkeleton  key={i}/>
               )
               )}
            </div>
         </ReleaseStyles>
      </>
   );
};

export default Releases;
