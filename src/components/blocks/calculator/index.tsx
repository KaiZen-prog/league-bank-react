import React, {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {setCreditData } from '../../../store/actions/calculator';
import Section from '../../UI/section/section';
import ModalConfirm from '../../modals/modal-confirm';
import CalculatorForm from '../calculator-form';
import ApplicationForm from '../applicaion-form';

const Calculator: React.FunctionComponent = () => {
  const state = useAppSelector((store) => store.calculator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCreditData(
      state.cost,
      state.initialFee,
      state.isMaternalCapital,
      state.isLifeInsurance,
      state.isCasco,
      state.creditParams.maternalCapitalValue,
      state.purpose,
      state.creditParams.percent,
      state.term
    ));
  }, [
    state.initialFee,
    state.term,
    state.purpose,
    state.cost,
    state.isCasco,
    state.isLifeInsurance,
    state.isMaternalCapital,
  ]);

  return (
    <Section>
      <CalculatorForm/>
      {state.step >= 3 && (<ApplicationForm/>)}
      {state.step >= 4 && (<ModalConfirm/>)}
    </Section>
  );
};

Calculator.displayName = 'Calculator';

export default Calculator;
