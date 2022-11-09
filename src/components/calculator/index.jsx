import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  CalculatorSteps,
  CarParams,
  CreditPurpose,
  InputTypes,
  MortgageParams,
  OfferTypes,
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

function Calculator(props) {
  const {
    telRef,
    onMakeRequest,
    onSubmit,
    onPopupClose,
    onRegApplicationChange,
    onChangePhone,
    requestNumber,
  } = props;

  const state = useSelector((store) => store.CALCULATOR);
  const [isPurposeSelectOpened, setIsPurposeSelectOpened] = useState(false);

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
