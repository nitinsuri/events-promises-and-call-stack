import {useEffect, useState} from React;

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setLoading('Loading data, please wait')
    setData(null)
    setError(null)
    fetch(url)
    .then(res=> res.json())
    .then(res => {
      setLoading(false)
      setData(res.data)
    })
    .catch(err=>{
      const errMessage = new Error(err)
      setLoading(false)
      setError(errMessage.message)
    })
  },[url])
  return {data, loading, error}
}