import React, { useState } from 'react';
import {
   Comment,
   CommentText,
   DateInfo,
   ProfileImage,
   Rating,
   ReviewsContainer,
   UserInfo,
   Username,
   AddReviewContainer,
   TextArea,
   StarRatingContainer,
   Star,
} from './styles';
import { getStarIcons } from '@/utils/formatRating';
import { IoIosStar } from 'react-icons/io';
import Button from '../Button/Button';

const Reviews = ({ data }) => {
   const [newComment, setNewComment] = useState('');
   const [newRating, setNewRating] = useState(0);

   const handleSubmit = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
         if (newComment && newRating) {
            const review = {
               username: user.username,
               profileImage: user.image,
               rating: newRating,
               comment: newComment,
               date: new Date().toISOString(),
            };
            console.log(review);
            // função de adição de comentário
            setNewComment('');
            setNewRating(0);
            return;
         }
      }
      console.log('login necessário');
      return;
   };

   return (
      <>
         <ReviewsContainer>
            {data.map((review) => (
               <Comment key={review._id}>
                  <ProfileImage
                     src={review.profileImage}
                     alt={`${review.username}'s profile`}
                  />
                  <UserInfo>
                     <Username>{review.username}</Username>
                     <Rating>{getStarIcons(review.rating * 2)}</Rating>
                     <CommentText>{review.comment}</CommentText>
                     <DateInfo>
                        {new Date(review.date).toLocaleDateString()}
                     </DateInfo>
                  </UserInfo>
               </Comment>
            ))}
         </ReviewsContainer>

         <AddReviewContainer>
            <h3>Deixe seu comentário</h3>
            <StarRatingContainer>
               {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                     key={star}
                     onClick={() => setNewRating(star)}
                     selected={star <= newRating}
                  >
                     <IoIosStar />
                  </Star>
               ))}
            </StarRatingContainer>
            <TextArea
               value={newComment}
               onChange={(e) => setNewComment(e.target.value)}
               placeholder='Escreva um comentário...'
            />
            <Button
               onClick={handleSubmit}
               title={'Enviar'}
               className={'submit-button'}
            />
         </AddReviewContainer>
      </>
   );
};

export default Reviews;
