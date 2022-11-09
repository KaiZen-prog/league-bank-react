import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  CalculatorSteps,
  CarParams,
  CreditPurpose,
  InputTypes, KeyCode,
  MortgageParams,
  PHONE_LENGTH,
  SubmitButtonTypes
} from '../../const';
import {ActionType} from '../../store/actions/calculator';
import {divideNumberToSpace, shakeEffect} from '../../utils/common';
import withCalculator from '../../hocs/with-calculator/with-calculator';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Block from './calculator.styled';
import PopupConfirm from '../popup-confirm';
import LoanParams from '../loan-params';
import StepTitle from '../step-title';
import InputContainer from '../input-container';
import Offer from '../offer';

function Calculator(props) {
  const {
    onRegApplicationChange,
    onChangePhone,
  } = props;

  const telRef = useRef();

  const state = useSelector((store) => store.CALCULATOR);
  const [isPurposeSelectOpened, setIsPurposeSelectOpened] = useState(false);
  const [requestNumber, setRequestNumber] = useState(localStorage.getItem('requestNumber') !== null
    ? localStorage.getItem('requestNumber')
    : 1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: ActionType.SET_CREDIT_DATA});
  }, [
    state.initialFee,
    state.term,
    state.purpose,
    state.creditAmount,
    state.monthlyPayment,
    state.requiredIncome,
    state.percent,
    state.cost,
    state.casco,
    state.lifeInsurance,
    state.maternalCapital,
  ]);

  const togglePurposeSelect = () => {
    setIsPurposeSelectOpened(!isPurposeSelectOpened);
  };

  const onPurposeChange = (evt) => {
    const id = evt.currentTarget.id;
    const params = id === 'mortgage' ? MortgageParams : CarParams;

    dispatch({type: ActionType.CHANGE_PURPOSE, payload: {
      step: 2,
      purpose: id,
      paramsCredit: params,

      cost: params.minCost,
      initialFee: (params.minCost * params.minInitialFee) / 100,
      term: params.minTerm,

      maternalCapital: !!params.maternalCapital,
    }});

    togglePurposeSelect();
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (telRef.current !== null && telRef.current.value.length < PHONE_LENGTH) {
      telRef.current.getInputDOMNode().style.borderColor = 'red';
      return;
    }

    localStorage.setItem('requestNumber', this.requestNumber);
    dispatch({type: ActionType.CHANGE_STEP, payload: 4});

    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', closePopupKeydown);
  };

  const onPopupClose = () => {
    dispatch({type: ActionType.CLOSE_POPUP, payload: {
      step: 1,
      purpose: 'none',
    }});

    document.documentElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closePopupKeydown);
  };

  function closePopupKeydown(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      onPopupClose();
    }
  }

  const onMakeRequest = (evt) => {
    evt.preventDefault();
    setRequestNumber(requestNumber + 1);
    dispatch({type: ActionType.CHANGE_STEP, payload: 3});
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
              <LoanParams/>
            )}
          </Block.Container>
          {state.step >= 2 && (
            <Offer
              purpose={state.purpose}
              creditAmount={state.creditAmount}
              minCreditAmount={state.paramsCredit.minCreditAmount}
              percent={state.percent}
              monthlyPayment={state.monthlyPayment}
              requiredIncome={state.requiredIncome}
            />
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
        <PopupConfirm/>
      )}
    </Block>
  );
}

Calculator.propTypes = {
  onRegApplicationChange: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
};

Calculator.displayName = 'Calculator';

export { Calculator };
export default withCalculator(Calculator);
