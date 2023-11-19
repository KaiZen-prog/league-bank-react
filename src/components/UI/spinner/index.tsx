import React, {CSSProperties} from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import {SpinnerBlock} from './spinner.styled';
import theme from '../../../theme/theme';


const override: CSSProperties = {
  margin: '0 auto',
};

interface Props {
  isLoading: boolean;
}

const Spinner: React.FunctionComponent<Props> = ({isLoading}) => (
  <SpinnerBlock className="spinner">
    <MoonLoader
      color={theme.color.neonBlue}
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </SpinnerBlock>
);

Spinner.displayName = 'Spinner';

export default Spinner;
