import React from 'react';
import {Review} from '../../../common/types';
import moment from 'moment';
import {RATING_SCALE_MULTIPLIER} from '../../../const';
import {
  ReviewBlock,
  Wrapper,
  ReviewText,
  Stars,
  Info,
  Time
} from './reviews-item.styled';

interface Props {
  review: Review
}

const ReviewsItem: React.FunctionComponent<Props> = (props) => {
  const {review} = props;

  return (
    <ReviewBlock>
      <Stars>
        <span style={{width: `${Math.round(review.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </Stars>
      <ReviewText>
        {review.text}
      </ReviewText>
      <Wrapper>
        <Info>
          {review.author}
        </Info>
        <Time dateTime={review.date}>{moment(review.date).format('MMMM YYYY')}</Time>
      </Wrapper>
    </ReviewBlock>
  );
};

export default ReviewsItem;
