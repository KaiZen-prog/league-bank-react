import React from 'react';
import { CreditPurpose, CalculatorSteps, InputTypes, InputIconsTypes, LabelTypes, OfferTypes, SubmitButtonTypes } from '../../const';
import { shakeEffect } from '../../utils/common';
import withCalculator from '../../hocs/with-calculator/with-calculator';
import { divideNumberToSpace } from '../../utils/common';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Block from './calculator.styled';
import PopupConfirm from '../popup-confirm';

function Calculator(props) {
  const {
    costInputRef,
    costDivRef,
    initialFeeInputRef,
    initialFeeDivRef,
    termInputRef,
    termDivRef,
    telRef,
    state,
    onSelectOpen,
    onSelectClose,
    onPurposeChange,
    onLabelClick,
    onInputFocus,
    onInputChange,
    onCostChange,
    onInitialFeeChange,
    onTermChange,
    onInputRangeChange,
    onAdditionalChange,
    onCostChangeSign,
    onMakeRequest,
    onSubmit,
    onPopupClose,
    onRegApplicationChange,
    onChangePhone,
    requestNumber,
  } = props;

  const {
    step,
    purpose,
    isPurposeSelectOpened,
    paramsCredit,

    cost,
    initialFee,
    term,

    creditAmount,
    percent,
    monthlyPayment,
    requiredIncome,
  } = state;

  const getRangeValuePosition = () => {
    let position =
      (((initialFee * 100) / cost - paramsCredit.minInitialFee) * 100) /
      (100 - paramsCredit.minInitialFee);
    if (position < 0) {
      position = 0;
    }
    if (position > 100) {
      position = 100;
    }

    return position;
  };

  const setTermLine = (str) => {
    if (str > 10 && str < 20) {
      return `${str} лет`;
    }

    switch (str.toString().substr(-1)) {
      case '1':
        return `${str} год`;

      case '2':
        return `${str} года`;

      case '3':
        return `${str} года`;

      case '4':
        return `${str} года`;

      default:
        return `${str} лет`;
    }
  };

  return (
    <Block>
      <a name="calculator"></a>
      <form action="#" onSubmit={onMakeRequest}>
        <Block.Title>Кредитный калькулятор</Block.Title>
        <Block.FlexContainer>
          <Block.Container>
            <Block.Purpose>
              <Block.StepTitle>Шаг 1. Цель кредита</Block.StepTitle>
              <Block.PurposeSelect $isOpened={isPurposeSelectOpened}
                onClick={isPurposeSelectOpened ? onSelectClose : onSelectOpen}
              >
                <Block.PurposeSelectTitle>{CreditPurpose[purpose].name}</Block.PurposeSelectTitle>
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
            {step >= 2 && (
              <Block.Params>
                <Block.StepTitle $type={CalculatorSteps.params}>Шаг 2. Введите параметры кредита</Block.StepTitle>

                <Block.InputContainer>
                  <Block.Label htmlFor="cost" onClick={onLabelClick}>
                    Стоимость {paramsCredit.type === 'mortgage' ? 'недвижимости' : 'автомобиля'}
                  </Block.Label>
                  <Block.Icon
                    $type={InputIconsTypes.minus}
                    id="minus"
                    onClick={onCostChangeSign}
                  >
                  </Block.Icon>
                  <Block.Input
                    type="number"
                    name="cost"
                    id="cost"
                    ref={costInputRef}
                    min={paramsCredit.minCost}
                    max={paramsCredit.maxCost}
                    value={cost}
                    onBlur={onCostChange}
                    onChange={onInputChange}
                  />
                  <Block.InputDiv
                    as="div"
                    tabIndex="0"
                    ref={costDivRef}
                    onClick={onLabelClick}
                    onFocus={onInputFocus}
                  >
                    {typeof cost === 'string' ? cost : `${divideNumberToSpace(cost)} рублей`}
                  </Block.InputDiv>
                  <Block.Icon
                    $type={InputIconsTypes.plus}
                    id="plus"
                    onClick={onCostChangeSign}
                  >
                  </Block.Icon>

                  <Block.HelpText>
                    От {divideNumberToSpace(paramsCredit.minCost)} &nbsp;до{' '}
                    {divideNumberToSpace(paramsCredit.maxCost)} рублей
                  </Block.HelpText>
                </Block.InputContainer>

                <Block.InputContainer $type={InputTypes.initialFee}>
                  <Block.Label
                    $type={InputTypes.initialFee}
                    htmlFor="initialFee"
                    onClick={onLabelClick}
                  >
                    Первоначальный взнос
                  </Block.Label>

                  <Block.Input
                    type="number"
                    name="initialFee"
                    id="initialFee"
                    ref={initialFeeInputRef}
                    min={(paramsCredit.minCost * paramsCredit.minInitialFee) / 100}
                    max={paramsCredit.maxCost}
                    value={initialFee}
                    onBlur={onInitialFeeChange}
                    onChange={onInputChange}
                  />
                  <Block.InputDiv
                    as="div"
                    $type={InputTypes.initialFee}
                    tabIndex="0"
                    ref={initialFeeDivRef}
                    onClick={onLabelClick}
                    onFocus={onInputFocus}
                  >
                    {divideNumberToSpace(initialFee)} рублей
                  </Block.InputDiv>

                  <Block.InputRange
                    type="range"
                    name="initialFee"
                    min={paramsCredit.minInitialFee}
                    max="100"
                    step="5"
                    value={(initialFee * 100) / cost}
                    onChange={onInputRangeChange}
                  />
                  <Block.RangeValue
                    style={{
                      marginLeft: `${getRangeValuePosition()}%`,
                      transform: `translateX(-${getRangeValuePosition() / 2}%)`,
                    }}
                  >
                    {isNaN(Math.floor((initialFee * 100) / cost))
                      ? 0
                      : Math.floor((initialFee * 100) / cost)}
                    %
                  </Block.RangeValue>
                </Block.InputContainer>

                <Block.InputContainer $type={InputTypes.term}>
                  <Block.Label htmlFor="term" onClick={onLabelClick}>
                    Срок кредитования
                  </Block.Label>

                  <Block.Input
                    type="number"
                    name="term"
                    id="term"
                    ref={termInputRef}
                    min={paramsCredit.minTerm}
                    max={paramsCredit.maxTerm}
                    value={term}
                    onBlur={onTermChange}
                    onChange={onInputChange}
                  />
                  <Block.InputDiv
                    as="div"
                    $type={InputTypes.term}
                    tabIndex="0"
                    ref={termDivRef}
                    onClick={onLabelClick}
                    onFocus={onInputFocus}
                  >
                    {setTermLine(term)}
                  </Block.InputDiv>

                  <Block.InputRange
                    type="range"
                    name="term"
                    min={paramsCredit.minTerm}
                    max={paramsCredit.maxTerm}
                    step="1"
                    value={term}
                    onChange={onInputRangeChange}
                  />
                  <Block.TermContainer>
                    <Block.RangeValue>
                      {paramsCredit.minTerm} {paramsCredit.minTerm === 1 ? 'год' : 'лет'}
                    </Block.RangeValue>
                    <Block.RangeValue>
                      {paramsCredit.maxTerm} лет
                    </Block.RangeValue>
                  </Block.TermContainer>
                </Block.InputContainer>

                {paramsCredit.maternalCapitalValue && (
                  <Block.Additional>
                    <Block.InputCheckbox
                      type="checkbox"
                      name="maternalCapital"
                      onChange={onAdditionalChange}
                    />
                    <Block.CheckboxIcon className="calculator__checkbox-icon"/>
                    Использовать материнский капитал
                  </Block.Additional>
                )}
                {paramsCredit.additionalToCar && (
                  <>
                    <Block.Additional $type={LabelTypes.car}>
                      <Block.InputCheckbox
                        type="checkbox"
                        name="casco"
                        onChange={onAdditionalChange}
                      />
                      <Block.CheckboxIcon className="calculator__checkbox-icon"/>
                      Оформить КАСКО в нашем банке
                    </Block.Additional>
                    <Block.Additional $type={LabelTypes.car}>
                      <Block.InputCheckbox
                        type="checkbox"
                        name="lifeInsurance"
                        onChange={onAdditionalChange}
                      />
                      <Block.CheckboxIcon className="calculator__checkbox-icon"/>
                      Оформить Страхование жизни в нашем банке
                    </Block.Additional>
                  </>
                )}
              </Block.Params>
            )}
          </Block.Container>
          {step >= 2 && (
            <>
              {creditAmount >= paramsCredit.minCreditAmount && (
                <Block.Offer>
                  <Block.OfferTitle>Наше предложение</Block.OfferTitle>
                  <Block.OfferList>
                    <Block.OfferItem>
                      <Block.OfferValue>
                        {divideNumberToSpace(creditAmount)} рублей
                      </Block.OfferValue>
                      <Block.OfferName>Сумма ипотеки</Block.OfferName>
                    </Block.OfferItem>

                    <Block.OfferItem>
                      <Block.OfferValue>{percent}%</Block.OfferValue>
                      <Block.OfferName>Процентная ставка</Block.OfferName>
                    </Block.OfferItem>

                    <Block.OfferItem>
                      <Block.OfferValue>
                        {divideNumberToSpace(monthlyPayment)} рублей
                      </Block.OfferValue>
                      <Block.OfferName>Ежемесячный платеж</Block.OfferName>
                    </Block.OfferItem>

                    <Block.OfferItem>
                      <Block.OfferValue>
                        {divideNumberToSpace(requiredIncome)} рублей
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
              {creditAmount < paramsCredit.minCreditAmount && (
                <Block.Offer $type={OfferTypes.refusal}>
                  <Block.OfferTitle $type={OfferTypes.refusal}>
                    Наш банк не выдаёт{' '}
                    {purpose === CreditPurpose.mortgage.type ? 'ипотечные кредиты' : 'автокредиты'}{' '}
                    меньше {divideNumberToSpace(paramsCredit.minCreditAmount)} рублей.
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
      {step >= 3 && (
        <Block.RegApplication action="#" onSubmit={onSubmit}>
          <Block.StepTitle $type={CalculatorSteps.request}>Шаг 3. Оформление заявки</Block.StepTitle>
          <Block.RequestTable>
            <tbody>
              <Block.RequestField>
                <Block.RequestValue>№ {`0000${requestNumber}`.slice(-4)}</Block.RequestValue>
                <Block.RequestName>Номер заявки</Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>
                  {purpose === 'mortgage' ? 'Ипотека' : 'Автокредит'}
                </Block.RequestValue>
                <Block.RequestName>Цель кредита</Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>{divideNumberToSpace(cost)} рублей</Block.RequestValue>
                <Block.RequestName>
                  Стоимость {purpose === 'mortgage' ? 'недвижимости' : 'автомобиля'}
                </Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>
                  {divideNumberToSpace(initialFee)} рублей
                </Block.RequestValue>
                <Block.RequestName>Первоначальный взнос</Block.RequestName>
              </Block.RequestField>

              <Block.RequestField>
                <Block.RequestValue>{term} лет</Block.RequestValue>
                <Block.RequestName>Срок кредитования</Block.RequestName>
              </Block.RequestField>
            </tbody>
          </Block.RequestTable>
          <Block.InputContainer $type={InputTypes.userInfo}>
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
          </Block.InputContainer>
          <Block.SubmitButton
            $type={SubmitButtonTypes.request}
            type="submit"
          >
            Отправить
          </Block.SubmitButton>
        </Block.RegApplication>
      )}
      {step >= 4 && (
        <PopupConfirm onPopupClose={onPopupClose}/>
      )}
    </Block>
  );
}

Calculator.propTypes = {
  costInputRef: PropTypes.shape({}).isRequired,
  costDivRef: PropTypes.shape({}).isRequired,
  initialFeeInputRef: PropTypes.shape({}).isRequired,
  initialFeeDivRef: PropTypes.shape({}).isRequired,
  termInputRef: PropTypes.shape({}).isRequired,
  termDivRef: PropTypes.shape({}).isRequired,
  telRef: PropTypes.shape({}).isRequired,

  state: PropTypes.shape({
    step: PropTypes.number.isRequired,
    purpose: PropTypes.string.isRequired,
    isPurposeSelectOpened: PropTypes.bool.isRequired,
    paramsCredit: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        minCost: PropTypes.number.isRequired,
        maxCost: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        minInitialFee: PropTypes.number.isRequired,
        minTerm: PropTypes.number.isRequired,
        maxTerm: PropTypes.number.isRequired,
        minCreditAmount: PropTypes.number.isRequired,
        maternalCapitalValue: PropTypes.number.isRequired,
        percent: PropTypes.shape({
          default: PropTypes.number.isRequired,
          specialPercent: PropTypes.number.isRequired,
          amountForSpecialPercent: PropTypes.number.isRequired,
        }),
      }),
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        minCost: PropTypes.number.isRequired,
        maxCost: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        minInitialFee: PropTypes.number.isRequired,
        minTerm: PropTypes.number.isRequired,
        maxTerm: PropTypes.number.isRequired,
        minCreditAmount: PropTypes.number.isRequired,
        percent: PropTypes.shape({
          default: PropTypes.number.isRequired,
          specialPercent: PropTypes.number.isRequired,
          amountForSpecialPercent: PropTypes.number.isRequired,
          oneAddition: PropTypes.number.isRequired,
          allAdditions: PropTypes.number.isRequired,
        }),
        additionalToCar: PropTypes.shape({
          casco: PropTypes.string.isRequired,
          lifeInsurance: PropTypes.string.isRequired,
        }),
      }),
    ]).isRequired,
    cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    initialFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    term: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    maternalCapital: PropTypes.bool.isRequired,
    casco: PropTypes.bool.isRequired,
    lifeInsurance: PropTypes.bool.isRequired,
    creditAmount: PropTypes.number.isRequired,
    percent: PropTypes.string.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
    requiredIncome: PropTypes.number.isRequired,
  }).isRequired,

  onLabelClick: PropTypes.func.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCostChange: PropTypes.func.isRequired,
  onInitialFeeChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
  onInputRangeChange: PropTypes.func.isRequired,
  onAdditionalChange: PropTypes.func.isRequired,
  onCostChangeSign: PropTypes.func.isRequired,

  onSelectOpen: PropTypes.func.isRequired,
  onSelectClose: PropTypes.func.isRequired,
  onPurposeChange: PropTypes.func.isRequired,
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
