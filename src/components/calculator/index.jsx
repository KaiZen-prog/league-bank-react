import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionType} from '../../store/actions/calculator';
import Block from './calculator.styled';
import PopupConfirm from '../popup-confirm';
import CalculatorForm from '../calculator-form';
import ApplicationForm from '../applicaion-form';

function Calculator() {
  const state = useSelector((store) => store.calculator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: ActionType.SET_CREDIT_DATA});
  }, [
    state.initialFee,
    state.term,
    state.purpose,
    state.cost,
    state.casco,
    state.lifeInsurance,
    state.maternalCapital,
  ]);

  return (
    <Block>
      <a name='calculator'></a>
      <CalculatorForm/>
      {state.step >= 3 && (<ApplicationForm/>)}
      {state.step >= 4 && (<PopupConfirm/>)}
    </Block>
  );
}

Calculator.displayName = 'Calculator';

export default Calculator;
