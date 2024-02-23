import {lazy} from 'react';

const CalculatorAsync = lazy(() => import('./index'));

export default CalculatorAsync;
