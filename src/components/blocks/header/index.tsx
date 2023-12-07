import {useState} from 'react';
import {AppRoute} from '../../../const';
import PageLink from '../../UI/page-link/page-link';
import UserAccount from '../user-accout';
import {
  HeaderBlock,
  Container,
  Wrapper,
  BurgerButton,
  CloseNavButton,
  Nav,
  NavList,
  NavItem,
  NavLink
} from './header.styled';

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const onNavClose = () => {
    setIsNavOpened(false);
    document.documentElement.style.overflow = 'auto';
  };

  const onBurgerClick = () => {
    if (isNavOpened === false) {
      setIsNavOpened(true);
      document.documentElement.style.overflow = 'hidden';
    } else {
      onNavClose();
    }
  };

  return (
    <HeaderBlock $isNavOpened={isNavOpened}>
      <Container>
        <Wrapper>
          <BurgerButton type="button" onClick={onBurgerClick}>
            <span className="visually-hidden">Открыть меню</span>
          </BurgerButton>
          <PageLink link={AppRoute.MAIN} description={'ЛИГА Банк'}/>
          <CloseNavButton type="button" $isNavOpened={isNavOpened} onClick={onNavClose}>
            <span className="visually-hidden">Закрыть меню</span>
          </CloseNavButton>
        </Wrapper>

        <Nav $isNavOpened={isNavOpened}>
          <NavList>
            <NavItem>
              <NavLink to={AppRoute.MAIN} $isNavOpened={isNavOpened}>
                Услуги
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={AppRoute.MAIN} $isNavOpened={isNavOpened}>
                Рассчитать кредит
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={AppRoute.CONVERTER} $isNavOpened={isNavOpened}>
                Конвертер валют
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={AppRoute.MAIN} $isNavOpened={isNavOpened}>
                Контакты
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>

        <UserAccount isNavOpened={isNavOpened}/>

      </Container>
    </HeaderBlock>
  );
}

Header.displayName = 'Header';

export default Header;
