import React from 'react';
import PropTypes from 'prop-types';
import Block from './log-in.styled';

const Login = (props) => {

  const {
    passwordInputRef,
    isLogInOpened,
    onLogInClosure,
    onLogInFieldChange,
    onPasswordShow,
    onPasswordHide
  } = props;

  return (
    <Block $isLogInOpened={isLogInOpened} onClick={onLogInClosure}>
      <Block.Form action="#" onClick={(evt) => evt.stopPropagation()}>
        <Block.Logo/>
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
            value={localStorage.getItem(`login`) !== null ? localStorage.getItem(`login`) : ``}
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
            value={localStorage.getItem(`password`) !== null ? localStorage.getItem(`password`) : ``}
            required
          />
        </Block.PasswordLabel>
        <Block.ShowPassword type="button" onMouseDown={onPasswordShow} onMouseUp={onPasswordHide}/>
        <Block.Submit type="submit">Войти</Block.Submit>
        <Block.RestorePasswordLink href="#top">Забыли пароль?</Block.RestorePasswordLink>
      </Block.Form>
    </Block>
  );
};

Login.propTypes = {
  passwordInputRef: PropTypes.shape({}).isRequired,
  isLogInOpened: PropTypes.bool.isRequired,
  onLogInClosure: PropTypes.func.isRequired,
  onLogInFieldChange: PropTypes.func.isRequired,
  onPasswordShow: PropTypes.func.isRequired,
  onPasswordHide: PropTypes.func.isRequired
};

export default Login;
