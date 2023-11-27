import {Review} from '../../common/types';

export const ActionType = {
  PASTE_REVIEWS: 'PASTE_REVIEWS',
};

export const pasteReviews = (reviews: Array<Review>) => ({
  type: ActionType.PASTE_REVIEWS,
  payload: reviews,
});
