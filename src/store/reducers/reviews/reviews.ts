import {ActionType} from '../../actions/reviews';
import {InitialReviewsState} from '../../../common/types';

const initialState: InitialReviewsState = [];

const reviews = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.PASTE_REVIEWS:
      return [...state, ...action.payload];

    case ActionType.CREATE_REVIEW:
      return [...state, action.payload];
  }

  return state;
};

export {reviews};
