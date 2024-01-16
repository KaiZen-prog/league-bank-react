import React, {useState} from 'react';
import {useAppDispatch} from '../../../hooks/hooks';
import {FormSubmitEventHandler, InputChangeEventHandler} from '../../../common/types';
import ReviewRatingInputs from '../review-rating-inputs';
import {createReview} from '../../../store/actions/reviews';
import {Wrapper, Title, Input, SubmitButton} from './review-form.styled';
import moment from 'moment';

const ReviewForm: React.FunctionComponent = () => {
  const [review, setReview] = useState({text: '', rating: 0, author: ''});

  const dispatch = useAppDispatch();

  const InputChangeHandler: InputChangeEventHandler = (evt) => {
    setReview({...review, [evt.target.name]: evt.target.value});
  };

  const RatingChangeHandler: InputChangeEventHandler = (evt) => {
    const newRating = parseInt(evt.target.value, 10);
    setReview({...review, rating: newRating});
  };

  const submitHandler: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();
    const newReview = {
      date: moment().utc().format('YYYY-MM-DD'),
      text: review.text,
      rating: review.rating,
      author: review.author
    };

    dispatch(createReview(newReview));
    setReview({text: '', rating: 0, author: ''});
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <Title>Оставьте свой отзыв!</Title>
      <ReviewRatingInputs
        rating={review.rating}
        RatingChangeHandler={RatingChangeHandler}
      />
      <Input type='text' placeholder='Имя' name='author' value={review.author} onChange={InputChangeHandler}></Input>
      <Input type='text' placeholder='Отзыв' name='text' value={review.text} onChange={InputChangeHandler}></Input>
      <SubmitButton type="submit">Отправить</SubmitButton>
    </Wrapper>
  );
};

export default ReviewForm;
