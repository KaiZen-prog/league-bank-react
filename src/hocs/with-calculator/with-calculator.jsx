import React, { createRef, PureComponent } from 'react';

/* eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
const withCalculator = (Component) => {
  class WithCalculator extends PureComponent {
    constructor(props) {
      super(props);

      this.costInputRef = createRef();
      this.costDivRef = createRef();

      this.initialFeeInputRef = createRef();
      this.initialFeeDivRef = createRef();

      this.termInputRef = createRef();
      this.termDivRef = createRef();

      this.state = {
        step: 1,
        purpose: 'none',
        paramsCredit: {},

        cost: 0,
        initialFee: 0,
        term: 0,

        maternalCapital: false,
        casco: false,
        lifeInsurance: false,

        creditAmount: 0,
        percent: '0',
        monthlyPayment: 0,
        requiredIncome: 0,

        isLabelClicked: false,
        isFormValid: true,
      };

      this.onRegApplicationChange = this.onRegApplicationChange.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
    }

    onRegApplicationChange(evt) {
      const { name, value } = evt.target;

      this.setState({ name: value });
      localStorage.setItem(name, value);
    }

    onChangePhone(evt) {
      const { name, value } = evt.target;

      this.telRef.current.getInputDOMNode().style.borderColor = '#1F1E25';

      this.setState({ name, value });
      localStorage.setItem(name, value);
    }

    render() {
      return (
        <Component
          onRegApplicationChange={this.onRegApplicationChange}
          onChangePhone={this.onChangePhone}
        />
      );
    }
  }

  return WithCalculator;
};

export default withCalculator;
