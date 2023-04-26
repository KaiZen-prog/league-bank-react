import React, {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import ReactDOM from 'react-dom';
import {ActionType} from '../../store/actions/calculator';
import {KeyCode} from '../../const';
import {
  PopupConfirmBlock,
  Container,
  CloseButton,
  Title,
  Content
} from './popup-confirm.styled';

const modalRoot = document.getElementById('modal-root');

const PopupConfirm: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener('keydown', closePopupKeydown);
  });

  const onPopupClose = () => {
    dispatch({type: ActionType.CLOSE_POPUP, payload: {
      step: 1,
      purpose: 'none',
    }});

    document.documentElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closePopupKeydown);
  };

  function closePopupKeydown (evt: KeyboardEvent) {
    if (evt.keyCode === KeyCode.ESC) {
      onPopupClose();
    }
  }

  return ReactDOM.createPortal(
    <PopupConfirmBlock onClick={onPopupClose}>
      <Container onClick={(evt: MouseEvent) => evt.stopPropagation()}>
        <CloseButton type='button' onClick={onPopupClose}></CloseButton>
        <Title>Спасибо за обращение в наш банк.</Title>
        <Content>
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </Content>
      </Container>
    </PopupConfirmBlock>,
    modalRoot,
  );
}

PopupConfirm.displayName = 'PopupConfirm';

export default PopupConfirm;
