import React from 'react';
import {AppRoute, ContactsTel, SocialLinks} from '../../../const';
import PageLink from '../../UI/page-link/page-link';
import {
  FooterBLock, Container, Address, Info,
  Nav, NavList, NavItem, NavLink,
  Contacts, ContactsList, ContactsItem, ContactsPhone, PhoneInfo,
  Socials, SocialsList, SocialsItem, SocialsLink
} from './footer.styled';

const Footer: React.FunctionComponent = () => {
  return (
    <FooterBLock>
      <Container>
        <Address>
          <PageLink link={AppRoute.MAIN} description={'ЛИГА Банк'} isFooterLogo />
          <Info>
            <p>150015, г. Москва, ул. Московская, д. 32</p>
            <p>Генеральная лицензия Банка России №1050</p>
            <p>Ⓒ Лига Банк, 2019</p>
          </Info >
          <Nav>
            <NavList>
              <NavItem>
                <NavLink href="#">
                  Услуги
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Рассчитать кредит
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Контакты
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Задать вопрос
                </NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </Address>

        <Contacts>
          <ContactsList>
            <ContactsItem>
              <ContactsPhone href="tel: *0904" $type={ContactsTel.mobile}>
                *0904
              </ContactsPhone>
              <PhoneInfo>
                Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
              </PhoneInfo>
            </ContactsItem>
            <ContactsItem $isPhone>
              <ContactsPhone href="tel: +78001112233" $type={ContactsTel.main}>
                8 800 111 22 33
              </ContactsPhone>
              <PhoneInfo>
                Бесплатный для всех городов России
              </PhoneInfo>
            </ContactsItem>
          </ContactsList>

          <Socials>
            <SocialsList>
              <SocialsItem>
                <SocialsLink href="#" $type={SocialLinks.facebook}>
                  <span className="visually-hidden">Мы в фейсбуке</span>
                </SocialsLink>
              </SocialsItem>
              <SocialsItem>
                <SocialsLink href="#" $type={SocialLinks.instagram}>
                  <span className="visually-hidden">Мы в инстаграме</span>
                </SocialsLink>
              </SocialsItem>
              <SocialsItem>
                <SocialsLink href="#" $type={SocialLinks.twitter}>
                  <span className="visually-hidden">Мы в твиттере</span>
                </SocialsLink>
              </SocialsItem>
              <SocialsItem>
                <SocialsLink href="#" $type={SocialLinks.youtube}>
                  <span className="visually-hidden">Наш канал на ютубе</span>
                </SocialsLink>
              </SocialsItem>
            </SocialsList>
          </Socials>
        </Contacts>
      </Container>
    </FooterBLock>
  );
};

Footer.displayName = 'Footer';

export default Footer;
