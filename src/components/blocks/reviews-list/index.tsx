import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import ReviewsItem from '../reviews-item';
import {loadReviews} from '../../../store/actions/api-actions';
import Section from '../../UI/section/section';
import {
  Title,
  List
} from './reviews-list.styled';

const ReviewsList: React.FunctionComponent = () => {

  const reviews = useAppSelector((store) => store.reviews.reviews);
  const isFetchingData = useAppSelector((store) => store.reviews.isFetchingData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isFetchingData) {
      loadReviews(dispatch);
    }
  }, [reviews]);

  return (
    <Section>
      <Title>Отзывы наших клиентов</Title>
      <List>
        {reviews.map((review, i) => (
          <ReviewsItem
            review={review}
            key={i}
          />
        ))}
      </List>
    </Section>
  );
};

export default ReviewsList;
