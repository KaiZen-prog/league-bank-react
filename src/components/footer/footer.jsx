import React from 'react';
import { AppRoute } from '../../const';
import PageLink from '../page-link/page-link';
import Block from './footer.styled';

function Footer() {
  return (
    <Block>
      <Block.Container>
        <Block.Address>
          <PageLink link={AppRoute.MAIN} description={'ЛИГА Банк'} isFooterLogo />
          <div className="footer__info">
            <p>150015, г. Москва, ул. Московская, д. 32</p>
            <p>Генеральная лицензия Банка России №1050</p>
            <p>Ⓒ Лига Банк, 2019</p>
          </div>
          <nav className="footer__nav footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <a href="#" className="footer-nav__link">
                  Услуги
                </a>
              </li>
              <li className="footer-nav__item">
                <a href="#" className="footer-nav__link">
                  Рассчитать кредит
                </a>
              </li>
              <li className="footer-nav__item">
                <a href="#" className="footer-nav__link">
                  Контакты
                </a>
              </li>
              <li className="footer-nav__item">
                <a href="#" className="footer-nav__link">
                  Задать вопрос
                </a>
              </li>
            </ul>
          </nav>
        </Block.Address>

        <section className="footer__contacts">
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <a href="tel: *0904" className="footer__tel footer__tel--mobile">
                *0904
              </a>
              <p className="footer__phone-info">
                Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
              </p>
            </li>
            <li className="footer__contacts-item footer__contacts-item--main-phone">
              <a href="tel: +78001112233" className="footer__tel footer__tel--main">
                8 800 111 22 33
              </a>
              <p className="footer__phone-info">Бесплатный для всех городов России</p>
            </li>
          </ul>
          <section className="footer__social social">
            <ul className="social__list">
              <li className="social__item">
                <a href="#" className="social__link social__link--fb">
                  <span className="visually-hidden">Мы в фейсбуке</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link social__link--inst">
                  <span className="visually-hidden">Мы в инстаграме</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link social__link--twitter">
                  <span className="visually-hidden">Мы в твиттере</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link social__link--youtube">
                  <span className="visually-hidden">Наш канал на ютубе</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </Block.Container>
    </Block>
  );
}

Footer.displayName = 'Footer';

export default Footer;
