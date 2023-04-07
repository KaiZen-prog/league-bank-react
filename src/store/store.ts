import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '../services/api';
import thunk from 'redux-thunk';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
