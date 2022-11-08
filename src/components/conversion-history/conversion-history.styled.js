import styled from 'styled-components';
import theme from '../../theme/theme';
import {visuallyHidden, button} from '../../theme/mixins';

const ConvertionHistory = styled.section`
  max-width: 1210px;

  margin: 0 auto 110px auto;
  padding-right: 20px;
  padding-left: 20px;
`;

ConvertionHistory.Wrapper = styled.div`
  position: relative;

  width: 100%;

  padding-top: 44px;
  padding-bottom: 30px;
  padding-left: 70px;

  background-color: ${theme.color.ghostWhite};
  border-radius: 0 4px 4px 4px;

  &::before {
    position: absolute;
    content: "";

    top: 100px;
    left: 585px;

    width: 0;
    height: 289px;

    border: 1px solid #C1C2CA;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: ${theme.converterHistoryListWidth}) {
    padding-left: 0;

    &::before {
      ${visuallyHidden()};
    }
  }
`;

ConvertionHistory.Header = styled.h2`
  width: 371px;

  font-weight: 500;
  font-size: 28px;
  line-height: 39px;

  margin-top: 0;
  margin-bottom: 52px;

  @media (max-width: ${theme.converterHistoryListWidth}) {
    text-align: center;

    margin-right: auto;
    margin-left: auto;
  }
`;

ConvertionHistory.List = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-wrap: wrap;

  list-style: none;

  min-height: 230px;
  max-height: 230px;

  margin: 0 0 22px 0;
  padding-right: 50px;
  padding-left: 0;

  @media (max-width: ${theme.converterHistoryListWidth}) {
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;

    min-height: 230px;
    max-height: 450px;

    padding: 0;
  }

  @media (max-width: ${theme.converterHistoryListMobileWidth}) {
    max-height: 650px;
  }
`;

ConvertionHistory.ButtonClear = styled.button`
  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

  width: 198px;
  height: 51px;

  font-size: 16px;
  line-height: 19px;

  @media (max-width: ${theme.converterHistoryListWidth}) {
    display: block;

    margin-right: auto;
    margin-left: auto;
  }
`;

export default ConvertionHistory;
