import React, {memo} from 'react';
import {RatingParams, StarIconWidth} from '../../../const';
import {InputChangeEventHandler} from '../../../common/types';
import {Wrapper, StarContainer, RatingTitle, Star} from './review-rating-inputs.styled';

interface Props {
  rating: number,
  RatingChangeHandler: InputChangeEventHandler
}

const ReviewRatingInputs: React.FunctionComponent<Props> = memo((props) => {
  const {rating, RatingChangeHandler} = props;

  return (
    <>
      <RatingTitle>Ваша оценка:</RatingTitle>
      <Wrapper>
        {RatingParams.map((star) => (
          <StarContainer key={star.id}>
            <input className="visually-hidden" name="rating" value={star.value} id={star.id}
              type="radio"
              checked={rating === star.value}
              onChange={(e) => RatingChangeHandler(e)}
            />
            <label htmlFor={star.id} title={star.title}>
              <Star $left={(star.value - 1) * StarIconWidth} $isActive={rating >= star.value}>
              </Star>
            </label>
          </StarContainer>
        ))}
      </Wrapper>
    </>
  );
});

ReviewRatingInputs.displayName = 'ReviewRatingInputs';

export default ReviewRatingInputs;
