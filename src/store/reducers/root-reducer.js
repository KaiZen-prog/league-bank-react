import { combineReducers } from 'redux';
import { converter } from './converter/converter';
import { calculator } from './calculator/calculator';

export const NameSpace = {
  CONVERTER: 'CONVERTER',
  CALCULATOR: 'CALCULATOR',
};

export default combineReducers({
  [NameSpace.CONVERTER]: converter,
  [NameSpace.CALCULATOR]: calculator,
});
