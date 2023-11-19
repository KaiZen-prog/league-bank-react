import {useState} from 'react';

export const useFetching = (callback: (...args: any[]) => any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const downloadData = async (...args: any[]) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [downloadData, isLoading, error] as const;
};
