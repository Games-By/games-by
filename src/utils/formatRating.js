import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const getStarIcons = (rating) => {
   const starCount = (rating / 100) * 5;
   const fullStars = Math.floor(starCount);
   const hasHalfStar = starCount % 1 !== 0;
   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

   const stars = [];

   for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar style={{width: '2rem'}} key={`star-full-${i}`} />);
   }

   if (hasHalfStar) {
      stars.push(<IoIosStarHalf style={{width: '2rem'}} key={`star-half`} />);
   }

   for (let i = 0; i < emptyStars; i++) {
      stars.push(<IoIosStarOutline style={{width: '2rem'}} key={`star-empty-${i}`} />);
   }

   return stars;
};
