import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const FieldBlock: StyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  max-width: 525px;

  margin-bottom: 85px;

  &:first-child {
    margin-right: 110px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    &:first-child {
      margin-right: 0;
    }
  }
`;

export const FieldTitle: StyledComponent = styled.h3`
  flex-grow: 1;
  width: 100%;

  font-size: 22px;
  font-style: normal;
  font-weight: 500;

  line-height: 31px;

  margin-top: 0;
  margin-bottom: 12px;
`;

export const InputWrapper: StyledComponent = styled.div`
  display: flex;
  width: 100%;
`;
