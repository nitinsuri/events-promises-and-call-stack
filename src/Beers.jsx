import useFetch from './hooks/useFetch';
export default function Beers() {
  const { data, loading, error } = useFetch(
    'https://random-data-api.com/api/beer/random_beer'
  );
}
