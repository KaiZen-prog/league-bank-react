import {ActionType} from '../../actions/reviews';
import {InitialReviewsState} from '../../../common/types';
import {mockReviews} from '../../../__mocks__/mockReviews';

const initialState: InitialReviewsState = {
  reviews: mockReviews,
  isFetchingData: false,
};

const reviews = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.START_FETCHING_REVIEWS:
      return Object.assign({}, state, {
        isFetchingData: true,
      });

    case ActionType.FINISH_FETCHING_REVIEWS:
      return Object.assign({}, state, {
        isFetchingData: false,
      });

    case ActionType.PASTE_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload
      });
  }

  return state;
};

export {reviews};
