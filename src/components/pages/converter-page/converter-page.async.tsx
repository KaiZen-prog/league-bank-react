import {lazy} from 'react';

export const ConverterPageAsync = lazy(() => new Promise((resolve) => {
  //@ts-ignore
  setTimeout(() => resolve(import('./converter-page')), 3000);
}));
