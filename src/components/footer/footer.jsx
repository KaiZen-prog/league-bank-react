import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <a className="footer__logo" href="#">ЛИГА Банк</a>

          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Услуги</a>
              </li>

              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Рассчитать кредит</a>
              </li>

              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Контакты</a>
              </li>

              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Задать вопрос</a>
              </li>
            </ul>
          </nav>

          <p className="footer__address">
              150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019
          </p>
        </div>

        <div className="footer__container">
          <ul className="footer__phone-list">
            <li className="footer__phone-item">
              <a className="footer__phone-link footer__phone-link--mobile" href="tel:*0904">*0904</a>
              <p className="footer__phone-description">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </li>

            <li className="footer__phone-item">
              <a className="footer__phone-link footer__phone-link--phone" href="tel:88001112233">8 800 111 22 33</a>
              <p className="footer__phone-description">Бесплатный для всех городов России</p>
            </li>
          </ul>

          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link--facebook" href="#howhere" aria-label="Наш Фейсбук"></a>
            </li>

            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link--instagram" href="#howhere" aria-label="Наш Инстаграм"></a>
            </li>

            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link--twitter" href="#howhere" aria-label="Наш Твиттер"></a>
            </li>

            <li className="footer__social-item">
              <a className="footer__social-link footer__social-link--youtube" href="#howhere" aria-label="Мы на Ютьюб"></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = `Footer`;

export default Footer;
