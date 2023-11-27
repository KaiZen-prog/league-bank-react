import React, {useEffect} from 'react';
import {useAppDispatch} from '../../../hooks/hooks';
import ReactDOM from 'react-dom';
import {resetCalculator} from '../../../store/actions/calculator';
import {KeyCode} from '../../../const';
import {
  ModalConfirmBlock,
  Container,
  CloseButton,
  Title,
  Content
} from './modal-confirm.styled';

const modalRoot = document.getElementById('modal-root');

const ModalConfirm: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener('keydown', closeModalKeydown);
  });

  const onModalClose = () => {
    dispatch(resetCalculator());

    document.documentElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closeModalKeydown);
  };

  function closeModalKeydown (evt: KeyboardEvent) {
    if (evt.keyCode === KeyCode.ESC) {
      onModalClose();
    }
  }

  return ReactDOM.createPortal(
    <ModalConfirmBlock onClick={onModalClose}>
      <Container onClick={(evt: MouseEvent) => evt.stopPropagation()}>
        <CloseButton type='button' onClick={onModalClose}></CloseButton>
        <Title>Спасибо за обращение в наш банк.</Title>
        <Content>
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </Content>
      </Container>
    </ModalConfirmBlock>,
    modalRoot,
  );
};

ModalConfirm.displayName = 'ModalConfirm';

export default ModalConfirm;
