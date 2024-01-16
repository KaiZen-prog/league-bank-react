import React, {useEffect} from 'react';
import ReviewsItem from '../reviews-item';
import Spinner from '../../UI/spinner';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {useFetching} from '../../../hooks/use-fetching';
import Firebase from '../../../API/firebase';
import {pasteReviews} from '../../../store/actions/reviews';

import {Wrapper, List} from './reviews-list.styled';

const ReviewsList: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const reviews = useAppSelector((store) => store.reviews);

  const [fetchReviews, isLoading, error] = useFetching(async () => {
    const reviews = await Firebase.downloadReviews();
    dispatch(pasteReviews(reviews));
  });

  useEffect(() => {
    if (!isLoading && reviews.length === 0) {
      fetchReviews();
    }
  }, []);

  return (
    <Wrapper>
      {error
        ? <strong>{error}</strong>
        : null}
      <List>
        {reviews.map((review, i) => (
          <ReviewsItem
            review={review}
            key={i}
          />
        ))}
      </List>
      {isLoading && <Spinner isLoading={isLoading} />}
    </Wrapper>
  );
};

export default ReviewsList;
