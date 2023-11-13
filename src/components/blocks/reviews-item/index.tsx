import React from 'react';
import {Review} from '../../../common/types';
import moment from 'moment';
import {RATING_SCALE_MULTIPLIER} from '../../../const';
import {
  ReviewBlock,
  User,
  UserName,
  Rating,
  Stars
} from './reviews-item.styled';

interface Props {
  review: Review
}

const ReviewsItem: React.FunctionComponent<Props> = (props) => {
  const {review} = props;

  return (
    <ReviewBlock>
      <User>
        <UserName>
          {review.author.name}
        </UserName>
        <UserName>
          {review.author.surname}
        </UserName>
      </User>
      <div>
        <Rating>
          <Stars>
            <span style={{width: `${Math.round(review.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </Stars>
        </Rating>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date}>{moment(review.date).format('MMMM YYYY')}</time>
      </div>
    </ReviewBlock>
  );
};

export default ReviewsItem;
