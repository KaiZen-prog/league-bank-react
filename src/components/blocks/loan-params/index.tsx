import React, { ChangeEvent, createRef, RefObject, useState } from 'react';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {CalculatorSteps, InputTypes, InputIconsTypes, LabelTypes, InputFields} from '../../../const';
import {setTermLine, getRangeValuePosition} from '../../../common/utils';
import {MouseEventHandler, FocusEventHandler, InputChangeEventHandler} from '../../../common/types';
import {ActionType, changeCost } from '../../../store/actions/calculator';
import {divideNumberToSpace} from '../../../common/utils';
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

    dispatch(changeCost(state.cost, state.creditParams.minCost, state.creditParams.maxCost, state.creditParams.step, state.initialFee, state.creditParams.minInitialFee, evtID));
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
    let value = parseInt(element.value, 10);

    if (value < state.creditParams.minCost || value > state.creditParams.maxCost) {
      nextElement.style.color = 'red';
      value = NaN;
    } else {
      nextElement.style.color = '#1F1E25';
      value = +value;

      dispatch({type: ActionType.CHANGE_INITIAL_FEE, payload: value});
    }

    onInputBlur(evt);
  };

  const onInputRangeChange: InputChangeEventHandler = (evt) => {
    const { name, value } = evt.target;
    const newValue = parseInt(value, 10);

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
          Стоимость {state.creditParams.type === 'mortgage' ? 'недвижимости' : 'автомобиля'}
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
          min={state.creditParams.minCost}
          max={state.creditParams.maxCost}
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
          От {divideNumberToSpace(state.creditParams.minCost)} &nbsp;до{' '}
          {divideNumberToSpace(state.creditParams.maxCost)} рублей
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
          min={(state.creditParams.minCost * state.creditParams.minInitialFee) / 100}
          max={state.creditParams.maxCost}
          value={state.initialFee}
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
          min={state.creditParams.minInitialFee}
          max="100"
          step="5"
          value={(state.initialFee * 100) / state.cost}
          onChange={onInputRangeChange}
        />
        <RangeValue
          style={{
            marginLeft: `${getRangeValuePosition(state.initialFee, state.creditParams.minInitialFee, state.cost)}%`,
            transform: `translateX(-${getRangeValuePosition(state.initialFee, state.creditParams.minInitialFee, state.cost) / 2}%)`,
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
          min={state.creditParams.minTerm}
          max={state.creditParams.maxTerm}
          value={state.term}
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
          min={state.creditParams.minTerm}
          max={state.creditParams.maxTerm}
          step="1"
          value={state.term}
          onChange={onInputRangeChange}
        />
        <TermContainer>
          <RangeValue>
            {state.creditParams.minTerm} {state.creditParams.minTerm === 1 ? 'год' : 'лет'}
          </RangeValue>
          <RangeValue>
            {state.creditParams.maxTerm} лет
          </RangeValue>
        </TermContainer>
      </InputContainer>

      {state.creditParams.maternalCapitalValue && (
        <Additional>
          <InputCheckbox
            type="checkbox"
            name="isMaternalCapital"
            onChange={onAdditionalChange}
          />
          <CheckboxIcon className="calculator__checkbox-icon"/>
          Использовать материнский капитал
        </Additional>
      )}
      {state.creditParams.additionalToCar && (
        <>
          <Additional $type={LabelTypes.car}>
            <InputCheckbox
              type="checkbox"
              name="isCasco"
              onChange={onAdditionalChange}
            />
            <CheckboxIcon className="calculator__checkbox-icon"/>
            Оформить КАСКО в нашем банке
          </Additional>
          <Additional $type={LabelTypes.car}>
            <InputCheckbox
              type="checkbox"
              name="isLifeInsurance"
              onChange={onAdditionalChange}
            />
            <CheckboxIcon className="calculator__checkbox-icon"/>
            Оформить Страхование жизни в нашем банке
          </Additional>
        </>
      )}
    </LoanParamsBlock>
  );
};

LoanParams.displayName = 'LoanParams';

export default LoanParams;
