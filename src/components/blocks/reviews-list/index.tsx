import React from 'react';
import ReviewsItem from '../reviews-item';
import {Review} from '../../../common/types';
import Spinner from '../../UI/spinner';

import {Wrapper, List} from './reviews-list.styled';

interface Props {
  reviews: Array<Review>;
  isFetchingData: boolean
}

const ReviewsList: React.FunctionComponent<Props> = ({reviews, isFetchingData }) => (
  <Wrapper>
    <List>
      {reviews.map((review, i) => (
        <ReviewsItem
          review={review}
          key={i}
        />
      ))}
    </List>
    <Spinner isLoading={isFetchingData}/>
  </Wrapper>
);

export default ReviewsList;
