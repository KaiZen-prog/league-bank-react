import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import * as apiActions from './api-actions';
import {ActionType} from './actions';
import {adaptExchangeRatesToApp} from "../utils/common";
import {APIValues, APIRoutes} from '../const';
import {mockDate, mockExchangeRateFromServer} from "../mocks/test-mocks";

const api = createAPI(() => {});

const adaptedExchangeRates = adaptExchangeRatesToApp(mockExchangeRateFromServer);

describe(`Data Async operations work correctly`, () => {
  it(`Should make a correct API GET /historical`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fetchExchangeRate = apiActions.loadExchangeRate(mockDate);

    apiMock
        .onGet(`${APIRoutes.HISTORICAL}${mockDate}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
        .reply(200, mockExchangeRateFromServer);

    return fetchExchangeRate(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.PASTE_EXCHANGE_RATE,
            payload: adaptedExchangeRates
          });
        });
  });
});
