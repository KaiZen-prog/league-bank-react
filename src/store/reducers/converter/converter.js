import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import moment from "moment";

const initialState = {
  date: moment().utc().format(`YYYY-MM-DD`),
  exchangeRate: ``,
};

const converter = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_DATE:
      return extend(state, {
        date: action.payload,
      });

    case ActionType.PASTE_EXCHANGE_RATE:
      return extend(state, {
        exchangeRate: action.payload,
      });
  }

  return state;
};

export {converter};
