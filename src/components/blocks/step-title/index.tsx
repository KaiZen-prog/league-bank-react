import React from 'react';
import {StepTitleBlock} from './step-title.styled';

interface Props {
  type?: string,
  value: string,
}

const StepTitle: React.FunctionComponent<Props> = (props) => {
  const {type, value} = props;

  return (
    <StepTitleBlock $type={type}>{value}</StepTitleBlock>
  );
};

StepTitle.displayName = 'StepTitle';

export default StepTitle;
