import React, {useState} from 'react';
import {InputChangeEventHandler} from '../../../common/types';
import {Input} from './review-form.styled';
import ReviewRatingInputs from '../review-rating-inputs';

const ReviewForm: React.FunctionComponent = () => {
  const [review, setReview] = useState({text: '', rating: 0, author: ''});

  const InputChangeHandler: InputChangeEventHandler = (evt) => {
    setReview({...review, [evt.target.name]: evt.target.value});
  };

  const RatingChangeHandler: InputChangeEventHandler = (evt) => {
    const newRating = parseInt(evt.target.value, 10);
    setReview({...review, rating: newRating});
  };

  return (
    <div>
      <strong>Оставьте свой отзыв!</strong>
      <ReviewRatingInputs
        rating={review.rating}
        RatingChangeHandler={RatingChangeHandler}
      />
      <Input type='text' placeholder='Имя' name='author' value={review.author} onChange={InputChangeHandler}></Input>
      <Input type='text' placeholder='Отзыв' name='text' value={review.text} onChange={InputChangeHandler}></Input>
    </div>
  );
};

export default ReviewForm;
