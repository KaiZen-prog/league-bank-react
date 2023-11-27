import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import Firebase from '../../../API/firebase';
import {useFetching} from '../../../hooks/use-fetching';
import {pasteReviews} from '../../../store/actions/reviews';
import Section from '../../UI/section/section';
import ReviewsList from '../reviews-list';
import ReviewsForm from '../reviews-form';
import {Title, Wrapper} from './reviews.styled';

const Reviews: React.FunctionComponent = () => {
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
    <Section>
      <Title>Отзывы наших клиентов</Title>
      {error
        ? <strong>{error}</strong>
        : null}
      <Wrapper>
        <ReviewsList reviews={reviews} isLoading={isLoading}/>
        <ReviewsForm/>
      </Wrapper>
    </Section>
  );
};

export default Reviews;
