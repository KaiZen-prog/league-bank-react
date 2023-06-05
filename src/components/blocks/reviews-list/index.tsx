import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import ReviewsItem from '../reviews-item';
import {loadReviews} from '../../../store/actions/api-actions';

const ReviewsList: React.FunctionComponent = () => {

  const reviews = useAppSelector((store) => store.reviews.reviews);
  const isFetchingData = useAppSelector((store) => store.reviews.isFetchingData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!reviews && !isFetchingData) {
      loadReviews(dispatch);
    }
  }, [reviews]);

  return (
    <section>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <ReviewsItem
            review={review}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
};

export default ReviewsList;
