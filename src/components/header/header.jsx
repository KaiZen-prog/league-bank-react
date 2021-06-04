import React from "react";
import PropTypes from "prop-types";
import withHeader from "../../hocs/with-header/with-header";
import LogIn from "../log-in/log-in";

const Header = (props) => {
  const {
    passwordInputRef,
    isNavOpened,
    onNavOpen,
    onNavClose,
    isLogInOpened,
    onLogInOpening,
    onLogInClosure,
    onLogInFieldChange,
    onPasswordShow,
    onPasswordHide
  } = props;

  return (
    <header className="header">
      <div className="header__wrapper">
        <button
          className="header__burger-button"
          onClick={onNavOpen}
        >
          <span className="visually-hidden">Открыть навигацию</span>
        </button>

        <a className="header__logo" href="#">ЛИГА Банк</a>

        <button
          className={`header__close-button ${isNavOpened ? `header__close-button--opened` : ``}`}
          onClick={onNavClose}
        >
          <span className="visually-hidden">Закрыть навигацию</span>
        </button>

        <div className="header__nav-wrapper">
          <nav className={`header__nav ${isNavOpened ? `header__nav--opened` : ``}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Услуги</a>
              </li>

              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Рассчитать кредит</a>
              </li>

              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Конвертер валют</a>
              </li>

              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Контакты</a>
              </li>
            </ul>
          </nav>

          <a className={`header__login ${isNavOpened ? `header__login--opened` : ``}`} href="#" onClick={onLogInOpening}>
            <span className={`header__login-title ${isNavOpened ? `header__login-title--opened` : ``}`}>Войти в Интернет-банк</span>
          </a>
          <LogIn
            passwordInputRef={passwordInputRef}
            isLogInOpened={isLogInOpened}
            onLogInClosure={onLogInClosure}
            onLogInFieldChange={onLogInFieldChange}
            onPasswordShow={onPasswordShow}
            onPasswordHide={onPasswordHide}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  passwordInputRef: PropTypes.shape({}).isRequired,

  isNavOpened: PropTypes.bool.isRequired,
  onNavOpen: PropTypes.func.isRequired,
  onNavClose: PropTypes.func.isRequired,

  isLogInOpened: PropTypes.bool.isRequired,

  onLogInOpening: PropTypes.func.isRequired,
  onLogInClosure: PropTypes.func.isRequired,
  onLogInFieldChange: PropTypes.func.isRequired,
  onPasswordShow: PropTypes.func.isRequired,
  onPasswordHide: PropTypes.func.isRequired,
};

Header.displayName = `Header`;

export default withHeader(Header);
