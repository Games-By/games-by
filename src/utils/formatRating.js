import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

export const getStarIcons = (rating, size) => {
   const starCount = (rating / 10) * 5;
   const fullStars = Math.floor(starCount);
   const hasHalfStar = starCount - fullStars >= 0.5;
   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

   const stars = [];

   for (let i = 0; i < fullStars; i++) {
      stars.push(
         <IoIosStar
            style={{ fontSize: size ? `${size}rem` : '1.8rem' }}
            key={`star-full-${i}`}
         />
      );
   }

   if (hasHalfStar) {
      stars.push(
         <IoIosStarHalf
            style={{ fontSize: size ? `${size}rem` : '1.8rem' }}
            key={`star-half`}
         />
      );
   }

   for (let i = 0; i < emptyStars; i++) {
      stars.push(
         <IoIosStarOutline
            style={{ fontSize: size ? `${size}rem` : '1.8rem' }}
            key={`star-empty-${i}`}
         />
      );
   }

   return stars;
};
