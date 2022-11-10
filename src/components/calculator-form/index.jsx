import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CarParams, CreditPurpose, MortgageParams} from '../../const';
import {ActionType} from '../../store/actions/calculator';
import Block from './calculator-form.styled';
import LoanParams from '../loan-params';
import StepTitle from '../step-title';
import Offer from '../offer';

function CalculatorForm() {

  const state = useSelector((store) => store.CALCULATOR);
  const [isPurposeSelectOpened, setIsPurposeSelectOpened] = useState(false);
  const [requestNumber, setRequestNumber] = useState(localStorage.getItem('requestNumber') !== null
    ? localStorage.getItem('requestNumber')
    : 1);

  const dispatch = useDispatch();

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

  const onMakeRequest = (evt) => {
    evt.preventDefault();
    setRequestNumber(requestNumber + 1);
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
