import React from 'react';
import Converter from '../converter';
import ConversionHistory from '../conversion-history';

const ConverterScreen: React.FunctionComponent = () => {
  return (
    <>
      <Converter/>
      <ConversionHistory/>
    </>
  );
}

ConverterScreen.displayName = 'ConverterScreen';

export default ConverterScreen;
