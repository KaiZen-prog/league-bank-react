import React from 'react';
import {Block, Message} from './error.styled';

interface Props {
  error: string
}

const Error: React.FunctionComponent<Props> = ({error}) => (
  <Block>
    <Message>{error}</Message>
  </Block>
);

export default Error;
