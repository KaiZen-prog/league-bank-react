import styled, {StyledComponentBase} from 'styled-components';
import {closeButton} from '../../../theme/mixins';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const ModalConfirmBlock: StyledComponent = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  background-color: rgba(88, 87, 87, 0.6);

  z-index: 1;
`;

export const Container: StyledComponent = styled.div`
  position: fixed;

  width: 290px;
  min-height: 198px;

  padding: 35px 25px 27px 25px;

  background-color: ${theme.color.ghostWhite};
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 678px;
    min-height: 193px;

    padding-top: 52px;
    padding-bottom: 15px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 500px;
  }
`;

export const CloseButton: StyledComponent = styled.button`
  ${closeButton()};

  width: 15px;
  height: 15px;

  top: 14px;
  right: 14px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    top: 30px;
    right: 30px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 18px;
    height: 18px;

    top: 25px;
    right: 25px;
  }
`;

export const Title: StyledComponent = styled.h2`
  width: 200px;

  margin: 0 auto 13px;

  font-size: 18px;
  line-height: 25px;
  text-align: center;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-weight: 500;
    font-size: 22px;
    line-height: 31px;

    text-align: center;

    width: 400px;

    margin: 0 auto 13px;
  }
`;

export const Content: StyledComponent = styled.p`
  width: auto;

  font-size: 16px;
  line-height: 22px;
  text-align: center;

  margin: 0 auto;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 300px;
  }
`;

