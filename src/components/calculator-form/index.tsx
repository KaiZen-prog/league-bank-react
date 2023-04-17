import React, {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {CarParams, CreditPurpose, MortgageParams} from '../../const';
import {FormSubmitEventHandler, SelectChangeEventHandler} from '../../common/types';
import {ActionType} from '../../store/actions/calculator';
import Block from './calculator-form.styled';
import LoanParams from '../loan-params';
import StepTitle from '../step-title';
import Offer from '../offer';

const CalculatorForm: React.FunctionComponent = () => {

  const state = useAppSelector((store) => store.calculator);
  const [isPurposeSelectOpened, setIsPurposeSelectOpened] = useState(false);
  const [requestNumber, setRequestNumber] = useState(localStorage.getItem('requestNumber') !== null
    ? localStorage.getItem('requestNumber')
    : '1');

  const dispatch = useAppDispatch();

  const togglePurposeSelect = () => {
    setIsPurposeSelectOpened(!isPurposeSelectOpened);
  };

  const onPurposeChange: SelectChangeEventHandler = (evt) => {
    const id = evt.currentTarget.id;
    const params = id === 'mortgage' ? MortgageParams : CarParams;

    dispatch({type: ActionType.CHANGE_PURPOSE, payload: {
      step: 2,
      purpose: id,
      paramsCredit: params,

      cost: params.minCost,
      initialFee: (params.minCost * params.minInitialFee) / 100,
      term: params.minTerm
    }});

    togglePurposeSelect();
  };

  const onMakeRequest: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();

    let newNumber = parseInt(requestNumber) + 1;
    setRequestNumber(newNumber.toString());

    dispatch({type: ActionType.CHANGE_STEP, payload: 3});
  };

  return (
    <Block action="#" onSubmit={onMakeRequest}>
      <Block.Title>Кредитный калькулятор</Block.Title>
      <Block.FlexContainer>
        <Block.Container>
          <Block.Purpose>
            <StepTitle value={'Шаг 1. Цель кредита'}/>
            <Block.PurposeSelect
              $isOpened={isPurposeSelectOpened}
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
          <Offer/>
        )}
      </Block.FlexContainer>
    </Block>
  );
}

CalculatorForm.displayName = 'CalculatorForm';

export default CalculatorForm;
