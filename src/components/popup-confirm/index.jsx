import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Block from './popup-confirm.styled';
import {ActionType} from '../../store/actions/calculator';
import {KeyCode} from '../../const';

const modalRoot = document.getElementById('modal-root');

function PopupConfirm() {
  const dispatch = useDispatch();

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

  function closePopupKeydown(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      onPopupClose();
    }
  }

  return ReactDOM.createPortal(
    <Block onClick={onPopupClose}>
      <Block.Container onClick={(evt) => evt.stopPropagation()}>
        <Block.CloseButton type='button' onClick={onPopupClose}></Block.CloseButton>
        <Block.Title>Спасибо за обращение в наш банк.</Block.Title>
        <Block.Content>
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </Block.Content>
      </Block.Container>
    </Block>,
    modalRoot,
  );
}

PopupConfirm.displayName = 'PopupConfirm';

PopupConfirm.propTypes = {
  onPopupClose: PropTypes.func,
};

export default PopupConfirm;
