import React, {CSSProperties} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {SpinnerBlock} from './spinner.styled';
import theme from '../../../theme/theme'


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: theme.color.neonBlue

};

interface Props {
  isLoading?: boolean
}

const Spinner: React.FunctionComponent<Props> = (props) => {
  const {isLoading=false} = props;

  return (
    <SpinnerBlock className="spinner">
      <ClipLoader
        color={'blue'}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SpinnerBlock>
  );
}

Spinner.displayName = 'Spinner';

export default Spinner;
