import React from "react";
import withHeader from "../../hocs/with-header";

const Header = (props) => {

    const {
        isNavOpened,
        onNavOpen,
        onNavClose
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

                    <a className="header__login" href="#">
                        <span className="header__login-title">Войти в Интернет-банк</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

Header.displayName = `Header`;

export default withHeader(Header);
