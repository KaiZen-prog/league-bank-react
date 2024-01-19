import React from 'react';

interface Props {
  options: Array<string>
}

const CurrencyOptions: React.FunctionComponent<Props> = (props) => {
  const {options} = props;

  return (
    <>
      {options.map((currency: string, i: number) => (
        <option key={i} value={currency}>{currency}</option>
      ))}
    </>
  );
};

CurrencyOptions.displayName = 'CurrencyOptions';
export default CurrencyOptions;
