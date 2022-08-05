import React from 'react';
import { AppRoute, ContactsTel, SocialLinks } from '../../const';
import PageLink from '../page-link/page-link';
import Block from './footer.styled';

function Footer() {
  return (
    <Block>
      <Block.Container>
        <Block.Address>
          <PageLink link={AppRoute.MAIN} description={'ЛИГА Банк'} isFooterLogo />
          <Block.Info  className="footer__info">
            <p>150015, г. Москва, ул. Московская, д. 32</p>
            <p>Генеральная лицензия Банка России №1050</p>
            <p>Ⓒ Лига Банк, 2019</p>
          </Block.Info >
          <Block.Nav>
            <Block.NavList>
              <Block.NavItem>
                <Block.NavLink href="#">
                  Услуги
                </Block.NavLink>
              </Block.NavItem>
              <Block.NavItem>
                <Block.NavLink href="#">
                  Рассчитать кредит
                </Block.NavLink>
              </Block.NavItem>
              <Block.NavItem>
                <Block.NavLink href="#">
                  Контакты
                </Block.NavLink>
              </Block.NavItem>
              <Block.NavItem>
                <Block.NavLink href="#">
                  Задать вопрос
                </Block.NavLink>
              </Block.NavItem>
            </Block.NavList>
          </Block.Nav>
        </Block.Address>

        <Block.Contacts>
          <Block.ContactsList>
            <Block.ContactsItem>
              <Block.ContactsTel href="tel: *0904" $type={ContactsTel.mobile}>
                *0904
              </Block.ContactsTel>
              <Block.TelInfo>
                Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
              </Block.TelInfo>
            </Block.ContactsItem>
            <Block.ContactsItem $isPhone>
              <Block.ContactsTel href="tel: +78001112233" $type={ContactsTel.main}>
                8 800 111 22 33
              </Block.ContactsTel>
              <Block.TelInfo>
                Бесплатный для всех городов России
              </Block.TelInfo>
            </Block.ContactsItem>
          </Block.ContactsList>

          <Block.Socials>
            <Block.SocialsList>
              <Block.SocialsItem>
                <Block.SocialsLink href="#" $type={SocialLinks.facebook}>
                  <span className="visually-hidden">Мы в фейсбуке</span>
                </Block.SocialsLink>
              </Block.SocialsItem>
              <Block.SocialsItem>
                <Block.SocialsLink href="#" $type={SocialLinks.instagram}>
                  <span className="visually-hidden">Мы в инстаграме</span>
                </Block.SocialsLink>
              </Block.SocialsItem>
              <Block.SocialsItem>
                <Block.SocialsLink href="#" $type={SocialLinks.twitter}>
                  <span className="visually-hidden">Мы в твиттере</span>
                </Block.SocialsLink>
              </Block.SocialsItem>
              <Block.SocialsItem>
                <Block.SocialsLink href="#" $type={SocialLinks.youtube}>
                  <span className="visually-hidden">Наш канал на ютубе</span>
                </Block.SocialsLink>
              </Block.SocialsItem>
            </Block.SocialsList>
          </Block.Socials>
        </Block.Contacts>
      </Block.Container>
    </Block>
  );
}

Footer.displayName = 'Footer';

export default Footer;
