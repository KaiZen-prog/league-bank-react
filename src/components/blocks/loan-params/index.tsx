import React, { ChangeEvent, createRef, RefObject, useState } from "react";
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {CalculatorSteps, InputTypes, InputIconsTypes, LabelTypes, InputFields} from '../../../const';
import {setTermLine} from '../../../utils/common';
import {MouseEventHandler, FocusEventHandler, InputChangeEventHandler} from '../../../common/types';
import {ActionType} from '../../../store/actions/calculator';
import {divideNumberToSpace} from '../../../utils/common';
import StepTitle from '../step-title';
import InputContainer from '../input-container';
import {
  LoanParamsBlock,
  Label,
  Icon,
  Input,
  InputDiv,
  HelpText,
  InputRange,
  RangeValue,
  TermContainer,
  Additional,
  InputCheckbox,
  CheckboxIcon,
} from './loan-params.styled';

const LoanParams: React.FunctionComponent = () => {
  const costInputRef: RefObject<HTMLElement> = createRef();
  const costDivRef: RefObject<HTMLElement> = createRef();
  const initialFeeInputRef: RefObject<HTMLElement> = createRef();
  const initialFeeDivRef: RefObject<HTMLElement> = createRef();
  const termInputRef: RefObject<HTMLElement> = createRef();
  const termDivRef: RefObject<HTMLElement> = createRef();

  const state = useAppSelector((store) => store.calculator);
  const [isLabelClicked, setIsLabelClicked] = useState(false);

  const dispatch = useAppDispatch();

  const onCostChangeSign: InputChangeEventHandler = (evt) => {
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

  const onLabelClick: MouseEventHandler = (evt) => {
    setIsLabelClicked(!isLabelClicked);

    const label = evt.target as HTMLLabelElement;

    switch (label.htmlFor) {
      case InputFields.cost:
        costInputRef.current.style.display = 'block';
        costDivRef.current.style.display = 'none';
        break;

      case InputFields.initialFee:
        initialFeeInputRef.current.style.display = 'block';
        initialFeeDivRef.current.style.display = 'none';
        break;

      case InputFields.term:
        termInputRef.current.style.display = 'block';
        termDivRef.current.style.display = 'none';
        break;
    }
  };

  const onInputChange: InputChangeEventHandler = (evt) => {
    const {name, value} = evt.target;
    dispatch({type: ActionType.CHANGE_FIELD_VALUE, payload: {
      name: name,
      value: value,
    }});
  };

  const onInputFocus: FocusEventHandler = (evt) => {
    const element: HTMLElement = evt.target;
    const prevElement: HTMLElement = element.previousElementSibling as HTMLElement;

    element.style.display = 'none';
    prevElement.style.display = 'block';
    prevElement.focus();
  };

  const onInputBlur = (evt: ChangeEvent<HTMLInputElement>) => {
    const element: HTMLElement = evt.target;
    const nextElement: HTMLElement = element.nextElementSibling as HTMLElement;

    element.style.display = 'none';
    nextElement.style.display = 'block';

    setIsLabelClicked(true);

    onInputChange(evt);
  };

  const onCostChange: InputChangeEventHandler = (evt) => {
    const element: HTMLInputElement = evt.target;
    const nextElement: HTMLElement = element.nextElementSibling as HTMLElement;
    let value = parseInt(element.value);

    if (value < state.paramsCredit.minCost || value > state.paramsCredit.maxCost) {
      nextElement.style.color = 'red';
      value = NaN;
    } else {
      nextElement.style.color = '#1F1E25';
      value = +value;

      dispatch({type: ActionType.CHANGE_INITIAL_FEE, payload: value});
    }

    onInputBlur(evt);
  };

  const onInitialFeeChange: InputChangeEventHandler = (evt) => {
    let value = parseInt(evt.target.value);

    if (value < (state.cost * state.paramsCredit.minInitialFee) / 100) {
      value = (state.cost * state.paramsCredit.minInitialFee) / 100;
    }
    if (value > state.cost) {
      value = state.cost;
    }

    onInputBlur(evt);
  };

  const onTermChange: InputChangeEventHandler = (evt) => {
    let value = parseInt(evt.target.value);

    if (value < state.paramsCredit.minTerm) {
      value = state.paramsCredit.minTerm;
    }
    if (value > state.paramsCredit.maxTerm) {
      value = state.paramsCredit.maxTerm;
    }

    onInputBlur(evt);
  };

  const onInputRangeChange: InputChangeEventHandler = (evt) => {
    const { name, value } = evt.target;
    const newValue = parseInt(value);

    name === 'initialFee'
      ? dispatch({type: ActionType.CHANGE_FIELD_VALUE, payload: {
        name: name,
        value: (state.cost * newValue) / 100,
      }})
      : onInputChange(evt);
  };

  const onAdditionalChange: InputChangeEventHandler = (evt) => {
    dispatch({type: ActionType.CHANGE_ADDITIONAL, payload: {
      name: evt.target.name,
      value: !state[evt.target.name],
    }});
  };

  return (
    <LoanParamsBlock>
      <StepTitle type={CalculatorSteps.params} value={'Шаг 2. Введите параметры кредита'}/>

      <InputContainer>
        <Label htmlFor="cost" onClick={onLabelClick}>
          Стоимость {state.paramsCredit.type === 'mortgage' ? 'недвижимости' : 'автомобиля'}
        </Label>
        <Icon
          $type={InputIconsTypes.minus}
          id="minus"
          onClick={onCostChangeSign}
        >
        </Icon>
        <Input
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
        <InputDiv
          tabIndex="0"
          ref={costDivRef}
          onClick={onLabelClick}
          onFocus={onInputFocus}
        >
          {divideNumberToSpace(state.cost)} рублей
        </InputDiv>
        <Icon
          $type={InputIconsTypes.plus}
          id="plus"
          onClick={onCostChangeSign}
        >
        </Icon>

        <HelpText>
          От {divideNumberToSpace(state.paramsCredit.minCost)} &nbsp;до{' '}
          {divideNumberToSpace(state.paramsCredit.maxCost)} рублей
        </HelpText>
      </InputContainer>


      <InputContainer type={InputTypes.initialFee}>
        <Label
          $type={InputTypes.initialFee}
          htmlFor="initialFee"
          onClick={onLabelClick}
        >
          Первоначальный взнос
        </Label>

        <Input
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
        <InputDiv
          $type={InputTypes.initialFee}
          tabIndex="0"
          ref={initialFeeDivRef}
          onClick={onLabelClick}
          onFocus={onInputFocus}
        >
          {divideNumberToSpace(state.initialFee)} рублей
        </InputDiv>

        <InputRange
          type="range"
          name="initialFee"
          min={state.paramsCredit.minInitialFee}
          max="100"
          step="5"
          value={(state.initialFee * 100) / state.cost}
          onChange={onInputRangeChange}
        />
        <RangeValue
          style={{
            marginLeft: `${getRangeValuePosition()}%`,
            transform: `translateX(-${getRangeValuePosition() / 2}%)`,
          }}
        >
          {isNaN(Math.floor((state.initialFee as number * 100) / state.cost as number))
            ? 0
            : Math.floor((state.initialFee as number * 100) / state.cost as number)}
          %
        </RangeValue>
      </InputContainer>

      <InputContainer type={InputTypes.term}>
        <Label htmlFor="term" onClick={onLabelClick}>
          Срок кредитования
        </Label>

        <Input
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
        <InputDiv
          $type={InputTypes.term}
          tabIndex="0"
          ref={termDivRef}
          onClick={onLabelClick}
          onFocus={onInputFocus}
        >
          {setTermLine(state.term)}
        </InputDiv>

        <InputRange
          type="range"
          name="term"
          min={state.paramsCredit.minTerm}
          max={state.paramsCredit.maxTerm}
          step="1"
          value={state.term}
          onChange={onInputRangeChange}
        />
        <TermContainer>
          <RangeValue>
            {state.paramsCredit.minTerm} {state.paramsCredit.minTerm === 1 ? 'год' : 'лет'}
          </RangeValue>
          <RangeValue>
            {state.paramsCredit.maxTerm} лет
          </RangeValue>
        </TermContainer>
      </InputContainer>

      {state.paramsCredit.maternalCapitalValue && (
        <Additional>
          <InputCheckbox
            type="checkbox"
            name="maternalCapital"
            onChange={onAdditionalChange}
          />
          <CheckboxIcon className="calculator__checkbox-icon"/>
          Использовать материнский капитал
        </Additional>
      )}
      {state.paramsCredit.additionalToCar && (
        <>
          <Additional $type={LabelTypes.car}>
            <InputCheckbox
              type="checkbox"
              name="casco"
              onChange={onAdditionalChange}
            />
            <CheckboxIcon className="calculator__checkbox-icon"/>
            Оформить КАСКО в нашем банке
          </Additional>
          <Additional $type={LabelTypes.car}>
            <InputCheckbox
              type="checkbox"
              name="lifeInsurance"
              onChange={onAdditionalChange}
            />
            <CheckboxIcon className="calculator__checkbox-icon"/>
            Оформить Страхование жизни в нашем банке
          </Additional>
        </>
      )}
    </LoanParamsBlock>
  );
}

LoanParams.displayName = 'LoanParams';

export default LoanParams;
