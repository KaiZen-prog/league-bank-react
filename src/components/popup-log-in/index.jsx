import React, {createRef, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Block from './log-in.styled';

const modalRoot = document.getElementById('modal-root');

function PopupLogin(props) {
  const passwordInputRef = createRef();

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

  const onLogInFieldChange = (evt) => {
    const { name, value } = evt.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  return ReactDOM.createPortal(
    <Block onClick={onLogInClosure}>
      <Block.Form action="#" onClick={(evt) => evt.stopPropagation()}>
        <Block.Logo />
        <Block.Close type="button" onClick={onLogInClosure}>
          <span className="visually-hidden">Закрыть окно</span>
        </Block.Close>
        <Block.LoginLabel>
          Логин
          <Block.LoginInput
            id="login"
            type="text"
            name="login"
            onChange={onLogInFieldChange}
            value={state.login}
            autoFocus
            required
          />
        </Block.LoginLabel>
        <Block.PasswordLabel>
          Пароль
          <Block.PasswordInput
            id="password"
            type="password"
            name="password"
            ref={passwordInputRef}
            onChange={onLogInFieldChange}
            value={state.password}
            required
          />
        </Block.PasswordLabel>
        <Block.ShowPassword type="button" onMouseDown={onPasswordShow} onMouseUp={onPasswordHide} />
        <Block.Submit type="submit">Войти</Block.Submit>
        <Block.RestorePasswordLink href="#top">Забыли пароль?</Block.RestorePasswordLink>
      </Block.Form>
    </Block>,
    modalRoot,
  );
}

PopupLogin.propTypes = {
  onLogInClosure: PropTypes.func.isRequired,
};

export default PopupLogin;
