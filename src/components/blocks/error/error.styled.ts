import styled, {StyledComponentBase} from 'styled-components';
import {topper} from '../../../theme/mixins';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Block: StyledComponent = styled.div`
  ${topper()};
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message: StyledComponent = styled.strong`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  padding-top: 32px;
  padding-left: 44px;

  color: ${theme.color.freeSpeechRed};
`;
