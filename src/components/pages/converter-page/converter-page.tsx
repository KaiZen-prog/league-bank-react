import React from 'react';
import Converter from '../../blocks/converter';
import ConversionHistory from '../../blocks/conversion-history';

const ConverterPage: React.FunctionComponent = () => (
  <>
    <Converter/>
    <ConversionHistory/>
  </>
);

ConverterPage.displayName = 'ConverterPage';

export default ConverterPage;
