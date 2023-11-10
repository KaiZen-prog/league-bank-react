import React from 'react';
import {Currencies} from '../../../const';

const CurrencyOptions: React.FunctionComponent = () => (
  <>
    {Currencies.map((currency: string, i: number) => (
      <option key={i} value={currency}>{currency}</option>
    ))}
  </>
);

CurrencyOptions.displayName = 'CurrencyOptions';
export default CurrencyOptions;
