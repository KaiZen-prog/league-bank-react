import React, {useState, useRef} from 'react';
import {CalculatorSteps, InputTypes, PHONE_LENGTH, SubmitButtonTypes} from '../../../const';
import {FormSubmitEventHandler, InputChangeEventHandler} from '../../../common/types';
import {ActionType} from '../../../store/actions/calculator';
import {divideNumberToSpace, shakeEffect, setTermLine} from '../../../common/utils';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import StepTitle from '../step-title';
import InputContainer from '../input-container';
import {
  Form,
  TextInput,
  PhoneInput,
  RequestTable,
  RequestField,
  RequestValue,
  RequestName,
  SubmitButton
} from './application-form.styled';

const ApplicationForm: React.FunctionComponent = () => {
  const telRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const state = useAppSelector((store) => store.calculator);

  const requestNumber: string | null = localStorage.getItem('requestNumber') !== null
    ? localStorage.getItem('requestNumber')
    : '1';

  const [formFields, setFormFields] = useState({
    tel: localStorage.getItem('tel') !== null ? localStorage.getItem('tel') : '',
    fullName: localStorage.getItem('fullName') !== null ? localStorage.getItem('fullName') : '',
    email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
  });

  const [isTelValid, setIsTelValid] = useState(true);

  const dispatch = useAppDispatch();

  const onSubmit: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();
    if (telRef.current !== null && telRef.current.value.length < PHONE_LENGTH) {
      setIsTelValid(false);
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

  const onInputChange: InputChangeEventHandler = (evt) => {
    const { name, value } = evt.target;

    if (name === 'tel') {
      setIsTelValid(true);
    }

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  return (
    <Form action="#" onSubmit={onSubmit}>
      <StepTitle type={CalculatorSteps.request} value={'Шаг 3. Оформление заявки'}/>
      <RequestTable>
        <tbody>
          <RequestField>
            <RequestValue>№ {`0000${requestNumber}`.slice(-4)}</RequestValue>
            <RequestName>Номер заявки</RequestName>
          </RequestField>

          <RequestField>
            <RequestValue>
              {state.purpose === 'mortgage' ? 'Ипотека' : 'Автокредит'}
            </RequestValue>
            <RequestName>Цель кредита</RequestName>
          </RequestField>

          <RequestField>
            <RequestValue>{divideNumberToSpace(state.cost)} рублей</RequestValue>
            <RequestName>
              Стоимость {state.purpose === 'mortgage' ? 'недвижимости' : 'автомобиля'}
            </RequestName>
          </RequestField>

          <RequestField>
            <RequestValue>
              {divideNumberToSpace(state.initialFee)} рублей
            </RequestValue>
            <RequestName>Первоначальный взнос</RequestName>
          </RequestField>

          <RequestField>
            <RequestValue>{setTermLine(state.term)}</RequestValue>
            <RequestName>Срок кредитования</RequestName>
          </RequestField>
        </tbody>
      </RequestTable>

      <InputContainer type={InputTypes.userInfo}>
        <TextInput
          $type={InputTypes.fullName}
          type="text"
          name="fullName"
          placeholder="ФИО"
          onChange={onInputChange}
          onInvalid={(evt: Event) => {
            shakeEffect(evt.target as HTMLElement);
          }}
          value={formFields.fullName}
          autoFocus
          required
        />

        <PhoneInput
          ref={telRef}
          $type={InputTypes.phone}
          $isValid={isTelValid}
          mask="+7 (999) 999-99-99"
          maskChar=""
          type="tel"
          name="tel"
          minLength={17}
          placeholder="Телефон"
          onChange={onInputChange}
          onInvalid={(evt: Event) => {
            shakeEffect(evt.target as HTMLElement);
          }}
          value={formFields.tel}
          required
        />

        <TextInput
          ref={emailRef}
          $type={InputTypes.email}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onInputChange}
          onInvalid={(evt: Event) => {
            shakeEffect(evt.target as HTMLElement);
          }}
          value={formFields.email}
          required
        />
      </InputContainer>
      <SubmitButton
        $type={SubmitButtonTypes.request}
        type="submit"
      >
        Отправить
      </SubmitButton>
    </Form>
  );
};

ApplicationForm.displayName = 'ApplicationForm';

export default ApplicationForm;
