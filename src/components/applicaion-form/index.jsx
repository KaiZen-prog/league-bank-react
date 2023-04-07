import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CalculatorSteps, InputTypes, PHONE_LENGTH, SubmitButtonTypes} from '../../const';
import {ActionType} from '../../store/actions/calculator';
import {divideNumberToSpace, shakeEffect} from '../../utils/common';
import InputMask from 'react-input-mask';
import Block from './application-form.styled';
import StepTitle from '../step-title';
import InputContainer from '../input-container';

function ApplicationForm() {
  const telRef = useRef();

  const state = useSelector((store) => store.calculator);

  const requestNumber = localStorage.getItem('requestNumber') !== null
    ? localStorage.getItem('requestNumber')
    : 1;

  const [formFields, setFormFields] = useState({
    tel: localStorage.getItem('tel') !== null ? localStorage.getItem('tel') : '',
    fullName: localStorage.getItem('fullName') !== null ? localStorage.getItem('fullName') : '',
    email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
  });

  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (telRef.current !== null && telRef.current.value.length < PHONE_LENGTH) {
      telRef.current.getInputDOMNode().style.borderColor = 'red';
      return;
    }

    const newRequestNumberInt = parseInt(requestNumber, 10) + 1;

    localStorage.setItem('requestNumber', newRequestNumberInt.toString());
    dispatch({type: ActionType.CHANGE_STEP, payload: 4});

    document.documentElement.style.overflow = 'hidden';
  };

  const onChangePhone = (evt) => {
    const { name, value } = evt.target;

    telRef.current.getInputDOMNode().style.borderColor = '#1F1E25';

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  const onRegApplicationChange = (evt) => {
    const { name, value } = evt.target;

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  return (
    <Block action="#" onSubmit={onSubmit}>
      <StepTitle type={CalculatorSteps.request} value={'Шаг 3. Оформление заявки'}/>
      <Block.RequestTable>
        <tbody>
          <Block.RequestField>
            <Block.RequestValue>№ {`0000${requestNumber}`.slice(-4)}</Block.RequestValue>
            <Block.RequestName>Номер заявки</Block.RequestName>
          </Block.RequestField>

          <Block.RequestField>
            <Block.RequestValue>
              {state.purpose === 'mortgage' ? 'Ипотека' : 'Автокредит'}
            </Block.RequestValue>
            <Block.RequestName>Цель кредита</Block.RequestName>
          </Block.RequestField>

          <Block.RequestField>
            <Block.RequestValue>{divideNumberToSpace(state.cost)} рублей</Block.RequestValue>
            <Block.RequestName>
              Стоимость {state.purpose === 'mortgage' ? 'недвижимости' : 'автомобиля'}
            </Block.RequestName>
          </Block.RequestField>

          <Block.RequestField>
            <Block.RequestValue>
              {divideNumberToSpace(state.initialFee)} рублей
            </Block.RequestValue>
            <Block.RequestName>Первоначальный взнос</Block.RequestName>
          </Block.RequestField>

          <Block.RequestField>
            <Block.RequestValue>{state.term} лет</Block.RequestValue>
            <Block.RequestName>Срок кредитования</Block.RequestName>
          </Block.RequestField>
        </tbody>
      </Block.RequestTable>

      <InputContainer type={InputTypes.userInfo}>
        <Block.Input
          $type={InputTypes.fullName}
          type="text"
          name="fullName"
          placeholder="ФИО"
          onChange={onRegApplicationChange}
          onInvalid={(evt) => {shakeEffect(evt.target);}}
          value={formFields.fullName}
          autoFocus
          required
        />
        <Block.Input
          as={InputMask}
          $type={InputTypes.phone}
          mask="+7 (999) 999-9999"
          maskChar=""
          type="tel"
          name="tel"
          ref={telRef}
          minLength={17}
          placeholder="Телефон"
          onChange={onChangePhone}
          onInvalid={(evt) => {shakeEffect(evt.target);}}
          value={formFields.tel}
          required
        />
        <Block.Input
          $type={InputTypes.email}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onRegApplicationChange}
          onInvalid={(evt) => {shakeEffect(evt.target);}}
          value={formFields.email}
          required
        />
      </InputContainer>
      <Block.SubmitButton
        $type={SubmitButtonTypes.request}
        type="submit"
      >
        Отправить
      </Block.SubmitButton>
    </Block>
  );
}

ApplicationForm.displayName = 'ApplicationForm';

export default ApplicationForm;
