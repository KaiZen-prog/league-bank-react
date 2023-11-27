import React, {createRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {InputChangeEventHandler} from '../../../common/types';
import {
  LoginBlock,
  Form,
  Logo,
  Close,
  LoginLabel,
  LoginInput,
  PasswordLabel,
  PasswordInput,
  ShowPassword,
  Submit,
  RestorePasswordLink
} from './modal-log-in.styled';

interface Props {
  onLogInClosure: (...args: any[]) => void
}

const modalRoot = document.getElementById('modal-root');

const ModalLogin: React.FunctionComponent<Props> = (props) => {
  const passwordInputRef: React.RefObject<HTMLInputElement> = createRef();

  const [state, setState] = useState({
    login: localStorage.getItem('login') !== null ? localStorage.getItem('login') : '',
    password: localStorage.getItem('password') !== null ? localStorage.getItem('password') : '',
  });

  const {
    onLogInClosure,
  } = props;

  const onPasswordShow = () => {
    passwordInputRef.current.type = 'text';
  };

  const onPasswordHide = () => {
    passwordInputRef.current.type = 'password';
  };

  const onLogInFieldChange: InputChangeEventHandler = (evt) => {
    const { name, value } = evt.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  return ReactDOM.createPortal(
    <LoginBlock onClick={onLogInClosure}>
      <Form action="#" onClick={(evt: React.MouseEvent) => evt.stopPropagation()}>
        <Logo />
        <Close type="button" onClick={onLogInClosure}>
          <span className="visually-hidden">Закрыть окно</span>
        </Close>
        <LoginLabel>
          Логин
          <LoginInput
            id="login"
            type="text"
            name="login"
            onChange={onLogInFieldChange}
            value={state.login}
            autoFocus
            required
          />
        </LoginLabel>
        <PasswordLabel>
          Пароль
          <PasswordInput
            id="password"
            type="password"
            name="password"
            ref={passwordInputRef}
            onChange={onLogInFieldChange}
            value={state.password}
            required
          />
        </PasswordLabel>
        <ShowPassword type="button" onMouseDown={onPasswordShow} onMouseUp={onPasswordHide} />
        <Submit type="submit">Войти</Submit>
        <RestorePasswordLink href="#top">Забыли пароль?</RestorePasswordLink>
      </Form>
    </LoginBlock>,
    modalRoot,
  );
};

export default ModalLogin;
