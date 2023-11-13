import {ActionType} from '../../actions/reviews';
import {InitialReviewsState} from '../../../common/types';

const initialState: InitialReviewsState = {
  reviews: [],
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
        reviews: [...state.reviews, ...action.payload]
      });
  }

  return state;
};

export {reviews};
