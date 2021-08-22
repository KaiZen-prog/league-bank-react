import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {MAX_HISTORY_LENGTH} from "../../../const";

const initialState = {
  history: [],
};

const conversionHistory = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TRANSACTION:
      return extend(state, {
        history: [action.payload, ...state.history].slice(0, MAX_HISTORY_LENGTH),
      });

    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        history: [],
      });
  }

  return state;
};

export {conversionHistory};
