import React, { createRef, PureComponent } from 'react';
import {
  InputFields,
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


      this.onLabelClick = this.onLabelClick.bind(this);
      this.onInputBlur = this.onInputBlur.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onCostChange = this.onCostChange.bind(this);
      this.onInitialFeeChange = this.onInitialFeeChange.bind(this);
      this.onTermChange = this.onTermChange.bind(this);
      this.onInputRangeChange = this.onInputRangeChange.bind(this);
      this.onAdditionalChange = this.onAdditionalChange.bind(this);

      this.onMakeRequest = this.onMakeRequest.bind(this);
      this.onRegApplicationChange = this.onRegApplicationChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPopupClose = this.onPopupClose.bind(this);
      this.closePopupKeydown = this.closePopupKeydown.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
    }

    onLabelClick(evt) {
      this.setState({ isLabelClicked: true });

      switch (evt.target.htmlFor) {
        case InputFields.cost:
          this.costInputRef.current.style.display = 'block';
          this.costDivRef.current.style.display = 'none';
          break;

        case InputFields.initialFee:
          this.initialFeeInputRef.current.style.display = 'block';
          this.initialFeeDivRef.current.style.display = 'none';
          break;

        case InputFields.term:
          this.termInputRef.current.style.display = 'block';
          this.termDivRef.current.style.display = 'none';
          break;
      }
    }

    onInputFocus(evt) {
      evt.target.style.display = 'none';
      evt.target.previousElementSibling.style.display = 'block';
      evt.target.previousElementSibling.focus();
    }

    onInputBlur(evt, name, value) {
      evt.target.style.display = 'none';
      evt.target.nextElementSibling.style.display = 'block';
      this.setState({ [name]: value, isLabelClicked: false });
    }

    onInputChange(evt) {
      const { name, value } = evt.target;
      this.setState({ [name]: value });
    }

    onCostChange(evt) {
      const name = evt.target.name;
      let value = evt.target.value;

      if (value < this.state.paramsCredit.minCost || value > this.state.paramsCredit.maxCost) {
        evt.target.nextElementSibling.style.color = 'red';
        value = 'Некорректное значение';
      } else {
        evt.target.nextElementSibling.style.color = '#1F1E25';
        value = +value;
        this.setState((prevState) => ({
          initialFee: (value * prevState.paramsCredit.minInitialFee) / 100,
        }));
      }

      this.onInputBlur(evt, name, value);
    }

    onInitialFeeChange(evt) {
      const name = evt.target.name;
      let value = evt.target.value;

      if (value < (this.state.cost * this.state.paramsCredit.minInitialFee) / 100) {
        value = (this.state.cost * this.state.paramsCredit.minInitialFee) / 100;
      }
      if (value > this.state.cost) {
        value = this.state.cost;
      }

      this.onInputBlur(evt, name, value);
    }

    onTermChange(evt) {
      const name = evt.target.name;
      let value = evt.target.value;

      if (value < this.state.paramsCredit.minTerm) {
        value = this.state.paramsCredit.minTerm;
      }
      if (value > this.state.paramsCredit.maxTerm) {
        value = this.state.paramsCredit.maxTerm;
      }

      this.onInputBlur(evt, name, value);
    }

    onInputRangeChange(evt) {
      const { name, value } = evt.target;

      name === 'initialFee'
        ? this.setState((prevState) => ({ [name]: (prevState.cost * value) / 100 }))
        : this.setState({ [name]: value });
    }

    onAdditionalChange(evt) {
      this.setState((prevState) => ({ [evt.target.name]: !prevState[evt.target.name] }));
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
          onLabelClick={this.onLabelClick}
          onInputFocus={this.onInputFocus}
          onInputChange={this.onInputChange}
          onCostChange={this.onCostChange}
          onInitialFeeChange={this.onInitialFeeChange}
          onTermChange={this.onTermChange}
          onInputRangeChange={this.onInputRangeChange}
          onAdditionalChange={this.onAdditionalChange}
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
