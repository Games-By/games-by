'use client';
const LibraryPage = () => {
   const user = JSON.parse(localStorage.getItem('user'));
   const username = user.username;
   return (
      <div>
         <h1>Library for {username}</h1>
      </div>
   );
};

export default LibraryPage;
