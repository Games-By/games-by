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
import { useLocale, useTranslations } from 'next-intl';

const Reviews = ({ data }) => {
   const [newComment, setNewComment] = useState('');
   const [newRating, setNewRating] = useState(0);
   const t = useTranslations('GamePage');
   const locale = useLocale();

   const formattedDate = (date) => {
      const options = { timeZone: 'UTC' };

      return new Date(date).toLocaleDateString(locale, options);
   };

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
                     src={
                        review.profileImage
                           ? review.profileImage
                           : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQg-lr5__zRqY3mRg6erzAD9n4BGp3G8VfA&s'
                     }
                     onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQg-lr5__zRqY3mRg6erzAD9n4BGp3G8VfA&s';
                     }}
                     alt={`${review.username}'s profile`}
                  />
                  <UserInfo>
                     <Username>{review.username}</Username>
                     <Rating>{getStarIcons(review.rating * 2)}</Rating>
                     <CommentText>{review.comment}</CommentText>
                     <DateInfo>{formattedDate(review.date)}</DateInfo>
                  </UserInfo>
               </Comment>
            ))}
         </ReviewsContainer>

         <AddReviewContainer>
            <h3>{t('giveComment')}</h3>
            <StarRatingContainer>
               {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} onClick={() => setNewRating(star)} selected={star <= newRating}>
                     <IoIosStar />
                  </Star>
               ))}
            </StarRatingContainer>
            <TextArea
               value={newComment}
               onChange={(e) => setNewComment(e.target.value)}
               placeholder={t('writeComment')}
            />
            <Button onClick={handleSubmit} title={t('send')} className={'submit-button'} />
         </AddReviewContainer>
      </>
   );
};

export default Reviews;
