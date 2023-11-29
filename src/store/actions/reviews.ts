import {Review} from '../../common/types';

export const ActionType = {
  PASTE_REVIEWS: 'PASTE_REVIEWS',
  CREATE_REVIEW: 'CREATE_REVIEW',
};

export const pasteReviews = (reviews: Array<Review>) => ({
  type: ActionType.PASTE_REVIEWS,
  payload: reviews,
});

export const createReview = (review: Review) => ({
  type: ActionType.CREATE_REVIEW,
  payload: review
});
