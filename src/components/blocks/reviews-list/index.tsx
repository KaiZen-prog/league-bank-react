import React from 'react';
import ReviewsItem from '../reviews-item';
import {Review} from '../../../common/types';
import Spinner from '../../UI/spinner';

import {Wrapper, List} from './reviews-list.styled';

interface Props {
  reviews: Array<Review>;
  isLoading: boolean
}

const ReviewsList: React.FunctionComponent<Props> = ({reviews, isLoading }) => (
  <Wrapper>
    <List>
      {reviews.map((review, i) => (
        <ReviewsItem
          review={review}
          key={i}
        />
      ))}
    </List>
    {isLoading && <Spinner isLoading={isLoading}/>}
  </Wrapper>
);

export default ReviewsList;
