import React from 'react';
import {RatingParams, StarIconWidth} from '../../../const';
import {InputChangeEventHandler} from '../../../common/types';
import { Wrapper, Label, Star} from './review-rating-inputs.styled';

interface Props {
  rating: number,
  RatingChangeHandler: InputChangeEventHandler
}

const ReviewRatingInputs: React.FunctionComponent<Props> = (props) => {
  const {rating, RatingChangeHandler} = props;

  return (
    <>
      <p>Рейтинг</p>
      <Wrapper>
        {RatingParams.map((star) => (
          <>
            <input className="visually-hidden" name="rating" value={star.value} id={star.id}
              type="radio"
              checked={rating === star.value}
              onChange={(e) => RatingChangeHandler(e)}
            />
            <Label htmlFor={star.id} title={star.title}>
              <Star $left={(star.value - 1) * StarIconWidth} $isActive={rating >= star.value}>
              </Star>
            </Label>
          </>
        ))}
      </Wrapper>
    </>
  );
};

export default ReviewRatingInputs;
