import React from "react";
import Converter from "../converter/converter";
import ConversionHistory from "../conversion-history/conversion-history";

const ConverterScreen = () => {
  return (
      <>
        <Converter/>
        <ConversionHistory/>
      </>
  );
};

ConverterScreen.displayName = `ConverterScreen`;

export default ConverterScreen;
