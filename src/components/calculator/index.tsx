import React, {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {ActionType} from '../../store/actions/calculator';
import CalculatorSection from './calculator.styled';
import PopupConfirm from '../popup-confirm';
import CalculatorForm from '../calculator-form';
import ApplicationForm from '../applicaion-form';

const Calculator: React.FunctionComponent = () => {
  const state = useAppSelector((store) => store.calculator);
  const dispatch = useAppDispatch();

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
    <CalculatorSection>
      <CalculatorForm/>
      {state.step >= 3 && (<ApplicationForm/>)}
      {state.step >= 4 && (<PopupConfirm/>)}
    </CalculatorSection>
  );
}

Calculator.displayName = 'Calculator';

export default Calculator;
