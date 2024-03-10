import React, {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {CarParams, CreditPurpose, MortgageParams} from '../../../const';
import {FormSubmitEventHandler, SelectChangeEventHandler} from '../../../common/types';
import {changePurpose, changeStep} from '../../../store/actions/calculator';
import LoanParams from '../loan-params';
import StepTitle from '../step-title';
import Offer from '../offer';
import {
  Form,
  Title,
  FlexContainer,
  Container,
  Purpose,
  PurposeSelect,
  PurposeSelectTitle,
  PurposeList,
  PurposeItem
} from './calculator-form.styled';

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

    dispatch(changePurpose(2, id, params));
    togglePurposeSelect();
  };

  const onMakeRequest: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();

    const newNumber = parseInt(requestNumber as string, 10) + 1;
    setRequestNumber(newNumber.toString());

    dispatch(changeStep(3));
  };

  return (
    <Form action="#" onSubmit={onMakeRequest}>
      <Title>Кредитный калькулятор</Title>
      <FlexContainer>
        <Container>
          <Purpose>
            <StepTitle value={'Шаг 1. Цель кредита'}/>
            <PurposeSelect
              $isOpened={isPurposeSelectOpened}
              onClick={togglePurposeSelect}
            >
              <PurposeSelectTitle>{CreditPurpose[state.purpose].name}</PurposeSelectTitle>
              <PurposeList $isClosed={!isPurposeSelectOpened}>
                <PurposeItem id="mortgage" onClick={onPurposeChange}>
                  Ипотечное кредитование
                </PurposeItem>
                <PurposeItem id="car" onClick={onPurposeChange}>
                  Автомобильное кредитование
                </PurposeItem>
              </PurposeList>
            </PurposeSelect>
          </Purpose>
          {state.step >= 2 && (
            <LoanParams/>
          )}
        </Container>
        {state.step >= 2 && (
          <Offer/>
        )}
      </FlexContainer>
    </Form>
  );
};

CalculatorForm.displayName = 'CalculatorForm';

export default CalculatorForm;
