import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {loadExchangeRate} from "./store/api-actions";
import App from "./components/app/app";
import "./sass/style.scss";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(loadExchangeRate(store.getState().CONVERTER.date)),
])
    .then(() => {
      ReactDOM.render(
          <Provider store={store}>
            <HashRouter>
              <App />
            </HashRouter>
          </Provider>,
          document.getElementById(`root`)
      );
    });
