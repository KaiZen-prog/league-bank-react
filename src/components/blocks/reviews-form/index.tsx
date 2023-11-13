import React, {useState} from 'react';
import { InputChangeEventHandler } from '../../../common/types';
import {Input} from './reviews-form.styled';

const ReviewsForm: React.FunctionComponent = () => {
  const [review, setReview] = useState({text: '', rating: null, author: ''});

  const changeHandler: InputChangeEventHandler = (evt) => {
    setReview({...review, [evt.target.name]: evt.target.value});
  };

  return (
    <div>
      <strong>Оставьте свой отзыв!</strong>
      <Input type='text' placeholder='Имя' name='author' value={review.author} onChange={changeHandler}></Input>
      <Input type='text' placeholder='Отзыв' name='text' value={review.text} onChange={changeHandler}></Input>
    </div>
  );
};

export default ReviewsForm;
