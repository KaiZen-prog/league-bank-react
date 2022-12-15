import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
