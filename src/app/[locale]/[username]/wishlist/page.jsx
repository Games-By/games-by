'use client';
const WishlistPage = () => {
   const user = JSON.parse(localStorage.getItem('user'));
   const username = user.username;
   return (
      <div>
         <h1>Wishlist for {username}</h1>
      </div>
   );
};

export default WishlistPage;
