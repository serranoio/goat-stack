import { useQuery } from 'react-query';

export const useRandomQuote = () => {
  const fetchCall = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const msg = await response.json();

    return msg;
  };

  // we are using react query. This is just a basic call with a refetch function passed through
  const { data, isLoading, error, refetch } = useQuery('quote', fetchCall);

  return { data, isLoading, error, refetch };
};
