import styled, {StyledComponentBase} from 'styled-components';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Wrapper: StyledComponent = styled.div`
  position: relative;
  max-height: 375px;
  width: 50%;
  padding-top: 60px;
  padding-right: 40px;
`;


export const List: StyledComponent = styled.ul`
  list-style: none;

  height: 100%;
  overflow: auto;

  margin: 0;
  padding: 0;

  &::-webkit-scrollbar {
    background: transparent;
    width: 5px;
  };

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.color.silver};
    border-radius: 8px;
  }
`;
