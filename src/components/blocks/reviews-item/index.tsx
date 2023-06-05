import React from 'react';
import {Review} from '../../../common/types';
import moment from 'moment';

import {RATING_SCALE_MULTIPLIER} from '../../../const';

interface Props {
  review: Review
}

const ReviewsItem: React.FunctionComponent<Props> = (props) => {
  const {review} = props;

  return (
    <React.Fragment>
      <li className="reviews__item">
        <div className="reviews__user user">
          <span className="reviews__user-name">
            {review.author.name}
          </span>
          <span className="reviews__user-surname">
            {review.author.surname}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${Math.round(review.rating * RATING_SCALE_MULTIPLIER)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime={review.date}>{moment(review.date).format(`MMMM YYYY`)}</time>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ReviewsItem;
