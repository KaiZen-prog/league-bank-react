import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme'

const Login = styled.div`
position: fixed;

  display: none;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  background-color: ${theme.color.matterhorn};

  z-index: 99;
  
  ${(props) => {
    if (props.$isLogInOpened) {
        return css`
          display: flex;
        `;
    }
}
}
`;

export default Login;
