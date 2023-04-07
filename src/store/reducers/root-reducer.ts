import {combineReducers} from 'redux';
import {converter} from './converter/converter';
import {calculator} from './calculator/calculator';

const rootReducer = combineReducers({
  converter: converter,
  calculator: calculator,
});

export default rootReducer;
