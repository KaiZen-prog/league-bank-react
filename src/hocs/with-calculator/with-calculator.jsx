import React, { createRef, PureComponent } from 'react';
import {
  KeyCode,
  PHONE_LENGTH
} from '../../const';

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

      this.telRef = createRef();

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

      this.onMakeRequest = this.onMakeRequest.bind(this);
      this.onRegApplicationChange = this.onRegApplicationChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPopupClose = this.onPopupClose.bind(this);
      this.closePopupKeydown = this.closePopupKeydown.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
    }

    onMakeRequest(evt) {
      evt.preventDefault();
      this.requestNumber =
        localStorage.getItem('requestNumber') !== null
          ? +localStorage.getItem('requestNumber') + 1
          : 1;

      this.setState({ step: 3 });
    }

    onRegApplicationChange(evt) {
      const { name, value } = evt.target;

      this.setState({ name: value });
      localStorage.setItem(name, value);
    }

    onSubmit(evt) {
      evt.preventDefault();
      if (this.telRef.current !== null && this.telRef.current.value.length < PHONE_LENGTH) {
        this.telRef.current.getInputDOMNode().style.borderColor = 'red';
        return;
      }

      localStorage.setItem('requestNumber', this.requestNumber);
      this.setState({ step: 4 });
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('keydown', this.closePopupKeydown);
    }

    onPopupClose() {
      this.setState({
        step: 1,
        purpose: 'none',
      });

      document.documentElement.style.overflow = 'auto';
      document.removeEventListener('keydown', this.closePopupKeydown);
    }

    closePopupKeydown(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.onPopupClose();
      }
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
          telRef={this.telRef}
          onMakeRequest={this.onMakeRequest}
          onSubmit={this.onSubmit}
          onPopupClose={this.onPopupClose}
          onRegApplicationChange={this.onRegApplicationChange}
          onChangePhone={this.onChangePhone}
          requestNumber={this.requestNumber}
        />
      );
    }
  }

  return WithCalculator;
};

export default withCalculator;
