import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {MAX_HISTORY_LENGTH} from "../../../const";

const initialState = {
  conversionHistory: [],
};

const conversionHistory = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TRANSACTION:
      return extend(state, {
        conversionHistory: [action.payload, ...state.conversionHistory].slice(0, MAX_HISTORY_LENGTH),
      });

    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        conversionHistory: [],
      });
  }

  return state;
};

export {conversionHistory};
