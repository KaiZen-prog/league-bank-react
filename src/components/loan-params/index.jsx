import React, {createRef, useState} from 'react';
import {CalculatorSteps, InputTypes, InputIconsTypes, LabelTypes} from '../../const';
import { divideNumberToSpace } from '../../utils/common';
import PropTypes from 'prop-types';
import Block from './loan-params.styled';
import StepTitle from '../step-title';
import InputContainer from '../input-container';

function LoanParams(props) {
  const costInputRef = createRef();
  const costDivRef = createRef();
  const initialFeeInputRef = createRef();
  const initialFeeDivRef = createRef();
  const termInputRef = createRef();
  const termDivRef = createRef();

  const {
    paramsCredit,
    cost,
    term,
    initialFee,
    onLabelClick,
    onCostChange,
    onInputChange,
    onInputFocus,
    onInitialFeeChange,
    onInputRangeChange,
    onTermChange,
    onAdditionalChange,
  } = props;

  const [state, setState] = useState({
    cost: cost,
    initialFee: initialFee,
  });

  const onCostChangeSign = (evt) => {
    costInputRef.current.style.color = '#1F1E25';
    costDivRef.current.style.color = '#1F1E25';

    let newCost =
      state.cost === 'Некорректное значение'
        ? paramsCredit.minCost
        : state.cost;

    evt.target.id === 'plus'
      ? (newCost += paramsCredit.step)
      : (newCost -= paramsCredit.step);

    if (newCost < paramsCredit.minCost) {
      newCost = paramsCredit.minCost;
    }

    if (newCost > paramsCredit.maxCost) {
      newCost = paramsCredit.maxCost;
    }

    setState((prevState) => ({
      cost: newCost,
      initialFee:
        prevState.cost === 'Некорректное значение'
          ? Math.round((newCost * paramsCredit.minInitialFee) / 100)
          : Math.round((newCost * initialFee) / prevState.cost),
    }));
  };

  const getRangeValuePosition = () => {
    let position =
      (((state.initialFee * 100) / state.cost - paramsCredit.minInitialFee) * 100) /
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
      <StepTitle type={CalculatorSteps.params} value={'Шаг 2. Введите параметры кредита'}/>

      <InputContainer>
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
          value={state.cost}
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
          {typeof state.cost === 'string' ? state.cost : `${divideNumberToSpace(state.cost)} рублей`}
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
      </InputContainer>


      <InputContainer type={InputTypes.initialFee}>
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
          value={state.initialFee}
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
          {divideNumberToSpace(state.initialFee)} рублей
        </Block.InputDiv>

        <Block.InputRange
          type="range"
          name="initialFee"
          min={paramsCredit.minInitialFee}
          max="100"
          step="5"
          value={(state.initialFee * 100) / state.cost}
          onChange={onInputRangeChange}
        />
        <Block.RangeValue
          style={{
            marginLeft: `${getRangeValuePosition()}%`,
            transform: `translateX(-${getRangeValuePosition() / 2}%)`,
          }}
        >
          {isNaN(Math.floor((state.initialFee * 100) / state.cost))
            ? 0
            : Math.floor((state.initialFee * 100) / state.cost)}
          %
        </Block.RangeValue>
      </InputContainer>

      <InputContainer type={InputTypes.term}>
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
      </InputContainer>

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
    </Block>
  );
}

LoanParams.propTypes = {
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
};

LoanParams.displayName = 'LoanParams';

export default LoanParams;
