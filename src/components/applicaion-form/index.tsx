import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import {CalculatorSteps, InputTypes, PHONE_LENGTH, SubmitButtonTypes} from '../../const';
import {FormSubmitEventHandler, InputChangeEventHandler} from '../../common/types';
import {ActionType} from '../../store/actions/calculator';
import {divideNumberToSpace, shakeEffect} from '../../utils/common';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import InputMask from 'react-input-mask';
import StepTitle from '../step-title';
import InputContainer from '../input-container';
import Block from './application-form.styled';

const ApplicationForm: React.FunctionComponent = () => {
  const telRef = useRef<HTMLInputElement>(null);

  const state = useAppSelector((store) => store.calculator);

  const requestNumber: string | null = localStorage.getItem('requestNumber') !== null
    ? localStorage.getItem('requestNumber')
    : '1';

  const [formFields, setFormFields] = useState({
    tel: localStorage.getItem('tel') !== null ? localStorage.getItem('tel') : '',
    fullName: localStorage.getItem('fullName') !== null ? localStorage.getItem('fullName') : '',
    email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
  });

  const dispatch = useAppDispatch();

  const onSubmit: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();
    if (telRef.current !== null && telRef.current.value.length < PHONE_LENGTH) {
      const node = ReactDOM.findDOMNode(telRef.current) as HTMLInputElement;
      node.style.borderColor = 'red';
      return;
    }

    let newRequestNumberInt: number = 0;

    if (requestNumber) {
      newRequestNumberInt = parseInt(requestNumber, 10) + 1;
    }

    localStorage.setItem('requestNumber', newRequestNumberInt.toString());
    dispatch({type: ActionType.CHANGE_STEP, payload: 4});

    document.documentElement.style.overflow = 'hidden';
  };

  const onChangePhone: InputChangeEventHandler = (evt) => {
    const { name, value } = evt.target;

    const node = ReactDOM.findDOMNode(telRef.current) as HTMLInputElement;
    node.style.borderColor = '#1F1E25';

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  const onRegApplicationChange: InputChangeEventHandler = (evt) => {
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
          onInvalid={(evt: Event) => {shakeEffect(evt.target);}}
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
          onInvalid={(evt: Event) => {shakeEffect(evt.target);}}
          value={formFields.tel}
          required
        />
        <Block.Input
          $type={InputTypes.email}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onRegApplicationChange}
          onInvalid={(evt: Event) => {shakeEffect(evt.target);}}
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
