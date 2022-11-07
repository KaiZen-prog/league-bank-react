import React from 'react';
import Converter from '../converter';
import ConversionHistory from '../conversion-history/conversion-history';

function ConverterScreen() {
  return (
    <>
      <Converter />
      <ConversionHistory />
    </>
  );
}

ConverterScreen.displayName = 'ConverterScreen';

export default ConverterScreen;
