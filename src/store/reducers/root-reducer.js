import {combineReducers} from "redux";
import {user} from "./user/user";
import {appProcess} from "./app-process/app-process";

export const NameSpace = {
  APP_PROCESS: `APP_PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.APP_PROCESS]: appProcess,
  [NameSpace.USER]: user
});
