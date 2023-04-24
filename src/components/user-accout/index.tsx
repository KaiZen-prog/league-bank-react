import React, {useState} from 'react';
import {KeyCode} from '../../const';
import PopupLogin from '../popup-log-in';
import {UserBlock, Link, Value} from './user-account.styled';

interface Props {
  isNavOpened: boolean
}

const UserAccount: React.FunctionComponent<Props> = (props) => {
  const {isNavOpened} = props;

  const [isLogInOpened, setIsLoginInOpened] = useState(false);

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

  function closeLogInKeydown(evt: KeyboardEvent) {
    if (evt.keyCode === KeyCode.ESC) {
      onLogInClosure();
    }
  }

  return (
    <UserBlock $isNavOpened={isNavOpened}>
      <Link href="#" $isNavOpened={isNavOpened} onClick={onLogInOpening}>
        <Value $isNavOpened={isNavOpened}>
          Войти в Интернет-банк
        </Value>
      </Link>
      {isLogInOpened && (
        <PopupLogin
          onLogInClosure={onLogInClosure}
        />
      )}
    </UserBlock>
  );
}

UserAccount.displayName = 'UserAccount';

export default UserAccount;
