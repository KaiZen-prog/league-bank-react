import React, {createRef} from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import {Calculator} from "./calculator";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

describe(`Calculator render correctly`, () => {
  const store = mockStore(InitialState);

  it(`Calculator step 1 closed`, () =>{
    let state = {
      step: 1,
      purpose: `none`,
      isPurposeSelectOpened: false,
      paramsCredit: {},

      cost: 0,
      initialFee: 0,
      term: 0,

      maternalCapital: false,
      casco: false,
      lifeInsurance: false,

      creditAmount: 0,
      percent: `0`,
      monthlyPayment: 0,
      requiredIncome: 0,

      isLabelClicked: false,
      isFormValid: true
    };

    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Calculator
                  costInputRef={createRef()}
                  costDivRef={createRef()}
                  initialFeeInputRef={createRef()}
                  initialFeeDivRef={createRef()}
                  termInputRef={createRef()}
                  termDivRef={createRef()}
                  telRef={createRef()}
                  state={state}
                  onSelectOpen={noop}
                  onSelectClose={noop}
                  onPurposeChange={noop}
                  onLabelClick={noop}
                  onInputFocus={noop}
                  onInputChange={noop}
                  onCostChange={noop}
                  onInitialFeeChange={noop}
                  onTermChange={noop}
                  onInputRangeChange={noop}
                  onAdditionalChange={noop}
                  onCostChangeSign={noop}
                  onMakeRequest={noop}
                  onSubmit={noop}
                  onPopupClose={noop}
                  onRegApplicationChange={noop}
                  onChangePhone={noop}
                  requestNumber={1}
                />
              </Router>
            </Provider>
        ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Calculator step 1 opened`, () =>{
    let state = {
      step: 1,
      purpose: `none`,
      isPurposeSelectOpened: true,
      paramsCredit: {},

      cost: 0,
      initialFee: 0,
      term: 0,

      maternalCapital: false,
      casco: false,
      lifeInsurance: false,

      creditAmount: 0,
      percent: `0`,
      monthlyPayment: 0,
      requiredIncome: 0,

      isLabelClicked: false,
      isFormValid: true
    };

    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Calculator
                  costInputRef={createRef()}
                  costDivRef={createRef()}
                  initialFeeInputRef={createRef()}
                  initialFeeDivRef={createRef()}
                  termInputRef={createRef()}
                  termDivRef={createRef()}
                  telRef={createRef()}
                  state={state}
                  onSelectOpen={noop}
                  onSelectClose={noop}
                  onPurposeChange={noop}
                  onLabelClick={noop}
                  onInputFocus={noop}
                  onInputChange={noop}
                  onCostChange={noop}
                  onInitialFeeChange={noop}
                  onTermChange={noop}
                  onInputRangeChange={noop}
                  onAdditionalChange={noop}
                  onCostChangeSign={noop}
                  onMakeRequest={noop}
                  onSubmit={noop}
                  onPopupClose={noop}
                  onRegApplicationChange={noop}
                  onChangePhone={noop}
                  requestNumber={1}
                />
              </Router>
            </Provider>
        ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
