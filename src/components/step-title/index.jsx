import React from 'react';
import PropTypes from 'prop-types';
import Block from './step-title.styled';

function StepTitle(props) {
  const {
    type,
    value,
  } = props;

  return (
    <Block $type={type}>{value}</Block>
  );
}

StepTitle.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

StepTitle.displayName = 'StepTitle';

export default StepTitle;
