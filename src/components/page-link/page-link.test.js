import React from 'react';
import renderer from 'react-test-renderer';
import PageLink from './page-link';
import {AppRoute} from "../../const";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {createMemoryHistory} from "history";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`PageLink render correctly`, () => {
    const store = mockStore(InitialState);

    const tree = renderer
        .create(
            <Provider store={store}>
                <Router history={history}>
                    <PageLink
                        link={AppRoute.ROOT}
                        htmlClass={`some-class`}
                        description={`some description`}
                    />
                </Router>
            </Provider>
        ).toJSON();

    expect(tree).toMatchSnapshot();
});
