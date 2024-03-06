import React from 'react';

interface Props {
  options: Array<string>
  optionToExclude?: string
}

const CurrencyOptions: React.FunctionComponent<Props> = ({options, optionToExclude = ''}) => (
  <>
    {options.map((currency: string, i: number) => (
      optionToExclude !== currency && <option key={i} value={currency}>{currency}</option>
    ))}
  </>
);

CurrencyOptions.displayName = 'CurrencyOptions';
export default CurrencyOptions;
