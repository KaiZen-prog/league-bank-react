import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {KeyCode} from '../../const';
import PopupLogin from '../popup-log-in';
import Block from './user-account.styled';

function UserAccount(props) {
  const [isLogInOpened, setIsLoginInOpened] = useState(false);

  const {isNavOpened} = props;

  const onLogInOpening = () => {
    setIsLoginInOpened(true);
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', closeLogInKeydown);
  };

  const onLogInClosure = () => {
    setIsLoginInOpened(false);
    document.documentElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closeLogInKeydown);
  };

  function closeLogInKeydown(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      onLogInClosure();
    }
  }

  return (
    <Block $isNavOpened={isNavOpened}>
      <Block.Link href="#" $isNavOpened={isNavOpened} onClick={onLogInOpening}>
        <Block.Value $isNavOpened={isNavOpened}>
          Войти в Интернет-банк
        </Block.Value>
      </Block.Link>
      {isLogInOpened && (
        <PopupLogin
          onLogInClosure={onLogInClosure}
        />
      )}
    </Block>
  );
}

UserAccount.propTypes = {
  isNavOpened: PropTypes.bool.isRequired,
};

UserAccount.displayName = 'UserAccount';

export default UserAccount;
