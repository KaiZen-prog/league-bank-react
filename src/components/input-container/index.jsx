import React from 'react';
import Block from './input-container.styled';

function InputContainer(props) {

  const {
    type,
    children,
  } = props;

  return (
    <Block $type={type}>
      {children}
    </Block>
  );
}

InputContainer.propTypes = {

};

InputContainer.displayName = 'InputContainer';

export default InputContainer;
