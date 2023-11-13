import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {downloadReviews} from '../../../store/actions/api-actions';
import Section from '../../UI/section/section';
import ReviewsList from '../reviews-list';
import ReviewsForm from '../reviews-form';
import {
  Title,
  Wrapper
} from './reviews.styled';

const Reviews: React.FunctionComponent = () => {

  const reviews = useAppSelector((store) => store.reviews.reviews);
  const isFetchingData = useAppSelector((store) => store.reviews.isFetchingData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isFetchingData) {
      downloadReviews(dispatch);
    }
  }, []);

  return (
    <Section>
      <Title>Отзывы наших клиентов</Title>
      <Wrapper>
        <ReviewsList reviews={reviews} isFetchingData={isFetchingData}/>
        <ReviewsForm/>
      </Wrapper>
    </Section>
  );
};

export default Reviews;
