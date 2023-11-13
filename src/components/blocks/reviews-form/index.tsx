import React, {useState} from 'react';
import { InputChangeEventHandler } from '../../../common/types';
import {Input} from './reviews-form.styled';
import Section from '../../UI/section/section';

const ReviewsForm: React.FunctionComponent = () => {
  const [review, setReview] = useState({text: '', rating: null, author: ''});

  const changeHandler: InputChangeEventHandler = (evt) => {
    setReview({...review, [evt.target.name]: evt.target.value});
  };

  return (
    <Section>
      <div>
        <strong>Оставьте свой отзыв!</strong>
        <Input type='text' placeholder='Имя' name='author' value={review.author} onChange={changeHandler}></Input>
        <Input type='text' placeholder='Отзыв' name='text' value={review.text} onChange={changeHandler}></Input>
      </div>
    </Section>
  );
};

export default ReviewsForm;
