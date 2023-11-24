import {Review} from '../../common/types';

export const ActionType = {
  START_FETCHING_REVIEWS: 'START_FETCHING_REVIEWS',
  FINISH_FETCHING_REVIEWS: 'FINISH_FETCHING_REVIEWS',
  PASTE_REVIEWS: 'PASTE_REVIEWS',
};

export const startFetchingReviews = () => ({
  type: ActionType.START_FETCHING_REVIEWS,
});

export const finishFetchingReviews = () => ({
  type: ActionType.FINISH_FETCHING_REVIEWS,
});

export const pasteReviews = (reviews: Array<Review>) => ({
  type: ActionType.PASTE_REVIEWS,
  payload: reviews,
});
