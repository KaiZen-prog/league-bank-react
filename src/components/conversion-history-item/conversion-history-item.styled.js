import styled from 'styled-components';
import theme from '../../theme/theme';

import iconArrow from '../../img/icon-conversion-arrow.svg';

const ConversionHistoryItem = styled.li`
  display: flex;
  padding-right: 12px;

  box-sizing: border-box;

  p {
    font-size: 18px;
    line-height: 18px;

    margin-top: 0;
    margin-bottom: 28px;
  }

  @media (max-width: ${theme.converterHistoryListWidth}) {
    padding-right: 0;
  }

  @media (max-width: ${theme.converterHistoryListMobileWidth}) {
    flex-flow: column;
    margin-bottom: 20px;

    border-bottom: 1px solid ${theme.color.ghost};

  &:last-child {
      border-bottom: none;
    }

    p {
      margin-bottom: 5px;
    }
  }
`;

ConversionHistoryItem.Date = styled.p`
  margin-right: 41px;
`;

ConversionHistoryItem.Container = styled.div`
  position: relative;

  display: flex;
  flex-grow: 1;

  min-width: 248px;

  &::before {
    position: absolute;
    content: "";

    display: block;

    top: 1px;
    left: 174px;

    width: 41px;
    height: 18px;

    margin-left: -33px;

    background-image: url(${iconArrow});
    background-repeat: no-repeat;
  }
`;

ConversionHistoryItem.Before = styled.p`
  margin-right: 70px;
  width: 130px;
`;

ConversionHistoryItem.After = styled.p`
  width: 130px;
`;

export default ConversionHistoryItem;
