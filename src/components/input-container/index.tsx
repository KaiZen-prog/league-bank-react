import React from 'react';
import Block from './input-container.styled';

interface Props {
  type?: string,
  children: any
}

const InputContainer: React.FunctionComponent<Props> = props => {
  const {type, children} = props;

  return (
    <Block $type={type}>
      {children}
    </Block>
  );
}

InputContainer.displayName = 'InputContainer';
export default InputContainer;
