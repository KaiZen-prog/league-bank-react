import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Block from './popup-confirm.styled';

const modalRoot = document.getElementById('modal-root');

function PopupConfirm(props) {
  const {
    onPopupClose = {},
  } = props;

  return ReactDOM.createPortal(
    <Block onClick={onPopupClose}>
      <Block.Container onClick={(evt) => evt.stopPropagation()}>
        <Block.CloseButton type="button" onClick={onPopupClose}></Block.CloseButton>
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
