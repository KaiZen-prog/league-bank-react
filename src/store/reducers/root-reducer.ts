import {combineReducers} from 'redux';
import {converter} from './converter/converter';
import {calculator} from './calculator/calculator';
import {reviews} from './reviews/reviews';

const rootReducer = combineReducers({
  converter: converter,
  calculator: calculator,
  reviews: reviews
});

export default rootReducer;
