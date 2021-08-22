import {combineReducers} from "redux";
import {converter} from "./converter/converter";
import {conversionHistory} from "./conversion-history/conversion-history";

export const NameSpace = {
  CONVERTER: `CONVERTER`,
  CONVERSION_HISTORY: `CONVERSION_HISTORY`
};

export default combineReducers({
  [NameSpace.CONVERTER]: converter,
  [NameSpace.CONVERSION_HISTORY]: conversionHistory
});
