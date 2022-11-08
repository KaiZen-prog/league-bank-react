import React, {useState, useEffect, useRef} from 'react';
import {
  CreditPurpose,
  CalculatorSteps,
  InputTypes,
  OfferTypes,
  SubmitButtonTypes,
  MortgageParams,
  CarParams, QUANTITY_MONTH, REQUIRED_INCOME
} from '../../const';
import { shakeEffect } from '../../utils/common';
import withCalculator from '../../hocs/with-calculator/with-calculator';
import { divideNumberToSpace } from '../../utils/common';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Block from './calculator.styled';
import PopupConfirm from '../popup-confirm';
import LoanParams from '../loan-params';
import StepTitle from '../step-title';
import InputContainer from '../input-container';

function Calculator(props) {
  const {
    telRef,
    onMakeRequest,
    onSubmit,
    onPopupClose,
    onRegApplicationChange,
    onChangePhone,
    requestNumber,
    onLabelClick,
    onCostChange,
    onInputChange,
    onInputFocus,
    onInitialFeeChange,
    onInputRangeChange,
    onTermChange,
    onAdditionalChange,
  } = props;

  const [isPurposeSelectOpened, setIsPurposeSelectOpened] = useState(false);

  const [state, setState] = useState({
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
  });

  const prevStateRef = useRef();

  useEffect(() => {
    prevStateRef.current = state;

    getCreditAmount();
    getInterestRate(prevStateRef.current);
    getMonthlyPayment();
  }, [state.purpose, state.creditAmount, state.monthlyPayment, state.requiredIncome,state.percent]);

  function getCreditAmount() {
    setState((prevState)=> ({
      ...prevState,
      creditAmount:
        prevState.cost -
        prevState.initialFee -
        (prevState.maternalCapital ? prevState.paramsCredit.maternalCapitalValue : 0),
    }));
  }

  function getInterestRate(previousState) {
    if (state.purpose === 'mortgage') {
      state.initialFee >=
      (state.cost * state.paramsCredit.percent.amountForSpecialPercent) / 100
        ? setState((prevState)=> ({
          ...prevState,
          percent: previousState.paramsCredit.percent.specialPercent.toFixed(2),
        }))
        : setState((prevState)=> ({
          ...prevState,
          percent: previousState.paramsCredit.percent.default.toFixed(2),
        }));
    }

    if (state.purpose === 'car') {
      let percent = state.paramsCredit.percent.default;

      if (state.cost >= state.paramsCredit.percent.amountForSpecialPercent) {
        percent = state.paramsCredit.percent.specialPercent;
      }

      if (state.casco || state.lifeInsurance) {
        percent = state.paramsCredit.percent.oneAddition;
      }

      if (state.casco && state.lifeInsurance) {
        percent = state.paramsCredit.percent.allAdditions;
      }

      setState((prevState)=> ({
        ...prevState,
        percent: percent.toFixed(2),
      }));
    }
  }

  function getMonthlyPayment() {
    const monthlyPercent = state.percent / 100 / QUANTITY_MONTH;

    const result = Math.floor(
      (state.creditAmount * monthlyPercent) /
      (1 - 1 / Math.pow(1 + monthlyPercent, state.term * QUANTITY_MONTH)),
    );

    setState((prevState)=> ({
      ...prevState,
      monthlyPayment: result,
      requiredIncome: Math.floor((result * 100) / REQUIRED_INCOME),
    }));
  }

  const togglePurposeSelect = () => {
    setIsPurposeSelectOpened(!isPurposeSelectOpened);
  };

  const onPurposeChange = (evt) => {
    const id = evt.currentTarget.id;
    const params = id === 'mortgage' ? MortgageParams : CarParams;

    setState((prevState)=> ({
      ...prevState,
      step: 2,
      purpose: id,
      paramsCredit: params,

      cost: params.minCost,
      initialFee: (params.minCost * params.minInitialFee) / 100,
      term: params.minTerm,

      maternalCapital: !!params.maternalCapital,
    }));

    togglePurposeSelect();
  };

  return (
    <Block>
      <a name="calculator"></a>
      <form action="#" onSubmit={onMakeRequest}>
        <Block.Title>Кредитный калькулятор</Block.Title>
        <Block.FlexContainer>
          <Block.Container>
            <Block.Purpose>
              <StepTitle value={'Шаг 1. Цель кредита'}/>
              <Block.PurposeSelect $isOpened={isPurposeSelectOpened}
                onClick={togglePurposeSelect}
              >
                <Block.PurposeSelectTitle>{CreditPurpose[state.purpose].name}</Block.PurposeSelectTitle>
                <Block.PurposeList $isClosed={!isPurposeSelectOpened}>
                  <Block.PurposeItem id="mortgage" onClick={onPurposeChange}>
                    Ипотечное кредитование
                  </Block.PurposeItem>
                  <Block.PurposeItem id="car" onClick={onPurposeChange}>
                    Автомобильное кредитование
                  </Block.PurposeItem>
                </Block.PurposeList>
              </Block.PurposeSelect>
            </Block.Purpose>
            {state.step >= 2 && (
              <LoanParams
                paramsCredit={state.paramsCredit}
                cost={state.cost}
                term={state.term}
                initialFee={state.initialFee}
                onLabelClick={onLabelClick}
                onCostChange={onCostChange}
                onInputChange={onInputChange}
                onInputFocus={onInputFocus}
                onInitialFeeChange={onInitialFeeChange}
                onInputRangeChange={onInputRangeChange}
                onTermChange={onTermChange}
                onAdditionalChange={onAdditionalChange}
              />
            )}
          </Block.Container>
          {state.step >= 2 && (
            <>
              {state.creditAmount >= state.paramsCredit.minCreditAmount && (
                <Block.Offer>
                  <Block.OfferTitle>Наше предложение</Block.OfferTitle>
                  <Block.OfferList>
                    <Block.OfferItem>
                      <Block.OfferValue>
                        {divideNumberToSpace(state.creditAmount)} рублей
                      </Block.OfferValue>
                      <Block.OfferName>Сумма ипотеки</Block.OfferName>
                    </Block.OfferItem>

                    <Block.OfferItem>
                      <Block.OfferValue>{state.percent}%</Block.OfferValue>
                      <Block.OfferName>Процентная ставка</Block.OfferName>
                    </Block.OfferItem>

                    <Block.OfferItem>
                      <Block.OfferValue>
                        {divideNumberToSpace(state.monthlyPayment)} рублей
                      </Block.OfferValue>
                      <Block.OfferName>Ежемесячный платеж</Block.OfferName>
                    </Block.OfferItem>

                    <Block.OfferItem>
                      <Block.OfferValue>
                        {divideNumberToSpace(state.requiredIncome)} рублей
                      </Block.OfferValue>
                      <Block.OfferName>Необходимый доход</Block.OfferName>
                    </Block.OfferItem>
                  </Block.OfferList>
                  <Block.SubmitButton
                    $type={SubmitButtonTypes.preorder}
                    type="submit"
                  >
                    Оформить заявку
                  </Block.SubmitButton>
                </Block.Offer>
              )}
              {state.creditAmount < state.paramsCredit.minCreditAmount && (
                <Block.Offer $type={OfferTypes.refusal}>
                  <Block.OfferTitle $type={OfferTypes.refusal}>
                    Наш банк не выдаёт{' '}
                    {state.purpose === CreditPurpose.mortgage.type ? 'ипотечные кредиты' : 'автокредиты'}{' '}
                    меньше {divideNumberToSpace(state.paramsCredit.minCreditAmount)} рублей.
                  </Block.OfferTitle>
                  <Block.OfferName $type={OfferTypes.refusal}>
                    Попробуйте использовать другие параметры для расчёта.
                  </Block.OfferName>
                </Block.Offer>
              )}
            </>
          )}
        </Block.FlexContainer>
      </form>
      {state.step >= 3 && (
        <Block.RegApplication action="#" onSubmit={onSubmit}>
          <StepTitle type={CalculatorSteps.request} value={'Шаг 3. Оформление заявки'}/>
          <Block.RequestTable>
            <tbody>
              <Block.RequestField>
                <Block.RequestValue>№ {`0000${requestNumber}`.slice(-4)}</Block.RequestValue>
                <Block.RequestName>Номер заявки</Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>
                  {state.purpose === 'mortgage' ? 'Ипотека' : 'Автокредит'}
                </Block.RequestValue>
                <Block.RequestName>Цель кредита</Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>{divideNumberToSpace(state.cost)} рублей</Block.RequestValue>
                <Block.RequestName>
                  Стоимость {state.purpose === 'mortgage' ? 'недвижимости' : 'автомобиля'}
                </Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>
                  {divideNumberToSpace(state.initialFee)} рублей
                </Block.RequestValue>
                <Block.RequestName>Первоначальный взнос</Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>{state.term} лет</Block.RequestValue>
                <Block.RequestName>Срок кредитования</Block.RequestName>
              </Block.RequestField>
            </tbody>
          </Block.RequestTable>

          <InputContainer type={InputTypes.userInfo}>
            <Block.Input
              $type={InputTypes.fullName}
              type="text"
              name="fullname"
              placeholder="ФИО"
              onChange={onRegApplicationChange}
              onInvalid={(evt) => {
                shakeEffect(evt.target);
              }}
              value={
                localStorage.getItem('fullname') !== null ? localStorage.getItem('fullname') : ''
              }
              autoFocus
              required
            />
            <Block.Input
              as={InputMask}
              $type={InputTypes.phone}
              mask="+7 (999) 999-9999"
              maskChar=""
              type="tel"
              name="tel"
              ref={telRef}
              minLength={17}
              placeholder="Телефон"
              onChange={onChangePhone}
              onInvalid={(evt) => {
                shakeEffect(evt.target);
              }}
              value={localStorage.getItem('tel') !== null ? localStorage.getItem('tel') : ''}
              required
            />
            <Block.Input
              $type={InputTypes.email}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={onRegApplicationChange}
              onInvalid={(evt) => {
                shakeEffect(evt.target);
              }}
              value={localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''}
              required
            />
          </InputContainer>
          <Block.SubmitButton
            $type={SubmitButtonTypes.request}
            type="submit"
          >
            Отправить
          </Block.SubmitButton>
        </Block.RegApplication>
      )}
      {state.step >= 4 && (
        <PopupConfirm onPopupClose={onPopupClose}/>
      )}
    </Block>
  );
}

Calculator.propTypes = {
  telRef: PropTypes.shape({}).isRequired,

  onMakeRequest: PropTypes.func.isRequired,
  onRegApplicationChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPopupClose: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
  requestNumber: PropTypes.number,
};

Calculator.displayName = 'Calculator';

export { Calculator };
export default withCalculator(Calculator);
