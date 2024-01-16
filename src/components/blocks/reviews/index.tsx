import React from 'react';
import Section from '../../UI/section/section';
import ReviewsList from '../reviews-list';
import ReviewForm from '../review-form';
import {Title, Wrapper} from './reviews.styled';

const Reviews: React.FunctionComponent = () => {
  return (
    <Section>
      <Title>Отзывы наших клиентов</Title>
      <Wrapper>
        <ReviewsList/>
        <ReviewForm/>
      </Wrapper>
    </Section>
  );
};

export default Reviews;
