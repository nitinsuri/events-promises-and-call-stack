import React from 'react';
import useFetch from './hooks/useFetch';
export default function Beers() {
  const clickHandler = () => {};
  const { data, loading, error } = useFetch(
    'https://random-data-api.com/api/beer/random_beer?size=2'
  );
  return (
    <div className="App">
      {loading && <p>{loading}</p>}
      {error && <p className={'error-message'}>{error}</p>}
      {
        <ul>
          {data?.map((item) => {
            const { name, brand, malts, style, alcohol } = item;
            return (
              <li>
                {name} | {brand} | {malts} | {style} | {alcohol}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
