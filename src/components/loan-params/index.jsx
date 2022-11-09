import React, {createRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CalculatorSteps, InputTypes, InputIconsTypes, LabelTypes, InputFields} from '../../const';
import {ActionType} from '../../store/actions/calculator';
import { divideNumberToSpace } from '../../utils/common';
import Block from './loan-params.styled';
import StepTitle from '../step-title';
import InputContainer from '../input-container';

function LoanParams() {
  const costInputRef = createRef();
  const costDivRef = createRef();
  const initialFeeInputRef = createRef();
  const initialFeeDivRef = createRef();
  const termInputRef = createRef();
  const termDivRef = createRef();

  const state = useSelector((store) => store.CALCULATOR);
  const [isLabelClicked, setIsLabelClicked] = useState(false);

  const dispatch = useDispatch();

  const onCostChangeSign = (evt) => {
    costInputRef.current.style.color = '#1F1E25';
    costDivRef.current.style.color = '#1F1E25';
    const evtID = evt.target.id;

    dispatch({type: ActionType.CHANGE_COST, payload: evtID});
  };

  const getRangeValuePosition = () => {
    let position =
      (((state.initialFee * 100) / state.cost - state.paramsCredit.minInitialFee) * 100) /
      (100 - state.paramsCredit.minInitialFee);
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

  const onLabelClick = (evt) => {
    setIsLabelClicked(!isLabelClicked);

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
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    dispatch({type: ActionType.CHANGE_FIELD_VALUE, payload: {
      name: name,
      value: value,
    }});
  };

  const onInputFocus = (evt) => {
    evt.target.style.display = 'none';
    evt.target.previousElementSibling.style.display = 'block';
    evt.target.previousElementSibling.focus();
  };

  const onInputBlur = (evt, name, value) => {
    evt.target.style.display = 'none';
    evt.target.nextElementSibling.style.display = 'block';

    setIsLabelClicked(true);

    onInputChange(evt, name, value);
  };

  const onCostChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    if (value < state.paramsCredit.minCost || value > state.paramsCredit.maxCost) {
      evt.target.nextElementSibling.style.color = 'red';
      value = 'Некорректное значение';
    } else {
      evt.target.nextElementSibling.style.color = '#1F1E25';
      value = +value;

      dispatch({type: ActionType.CHANGE_INITIAL_FEE, payload: value});
    }

    onInputBlur(evt, name, value);
  };

  const onInitialFeeChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    if (value < (state.cost * state.paramsCredit.minInitialFee) / 100) {
      value = (state.cost * state.paramsCredit.minInitialFee) / 100;
    }
    if (value > state.cost) {
      value = state.cost;
    }

    onInputBlur(evt, name, value);
  };

  const onTermChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    if (value < state.paramsCredit.minTerm) {
      value = state.paramsCredit.minTerm;
    }
    if (value > state.paramsCredit.maxTerm) {
      value = state.paramsCredit.maxTerm;
    }

    onInputBlur(evt, name, value);
  };

  const onInputRangeChange = (evt) => {
    const { name, value } = evt.target;

    name === 'initialFee'
      ? dispatch({type: ActionType.CHANGE_FIELD_VALUE, payload: {
        name: name,
        value: (state.cost * value) / 100,
      }})
      : onInputChange(evt);
  };

  const onAdditionalChange = (evt) => {
    dispatch({type: ActionType.CHANGE_ADDITIONAL, payload: {
      name: evt.target.name,
      value: !state[evt.target.name],
    }});
  };

  return (
    <Block>
      <StepTitle type={CalculatorSteps.params} value={'Шаг 2. Введите параметры кредита'}/>

      <InputContainer>
        <Block.Label htmlFor="cost" onClick={onLabelClick}>
          Стоимость {state.paramsCredit.type === 'mortgage' ? 'недвижимости' : 'автомобиля'}
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
          min={state.paramsCredit.minCost}
          max={state.paramsCredit.maxCost}
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
          От {divideNumberToSpace(state.paramsCredit.minCost)} &nbsp;до{' '}
          {divideNumberToSpace(state.paramsCredit.maxCost)} рублей
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
          min={(state.paramsCredit.minCost * state.paramsCredit.minInitialFee) / 100}
          max={state.paramsCredit.maxCost}
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
          min={state.paramsCredit.minInitialFee}
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
          min={state.paramsCredit.minTerm}
          max={state.paramsCredit.maxTerm}
          value={state.term}
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
          {setTermLine(state.term)}
        </Block.InputDiv>

        <Block.InputRange
          type="range"
          name="term"
          min={state.paramsCredit.minTerm}
          max={state.paramsCredit.maxTerm}
          step="1"
          value={state.term}
          onChange={onInputRangeChange}
        />
        <Block.TermContainer>
          <Block.RangeValue>
            {state.paramsCredit.minTerm} {state.paramsCredit.minTerm === 1 ? 'год' : 'лет'}
          </Block.RangeValue>
          <Block.RangeValue>
            {state.paramsCredit.maxTerm} лет
          </Block.RangeValue>
        </Block.TermContainer>
      </InputContainer>

      {state.paramsCredit.maternalCapitalValue && (
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
      {state.paramsCredit.additionalToCar && (
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

LoanParams.displayName = 'LoanParams';

export default LoanParams;
