import React, { useEffect, useState } from 'react'

const UseEffectFetch = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const loadingMessage = <p>Loading Data...</p>

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetched. Please try again later.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoad(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoad(false);
      })
  }, [])


  return (
    <div>
      <div className='all-card'>
        {data && data.slice(0, 8).map(data =>
          <div className='card' key={data.id}>
            <p>{data.id + '. ' + data.title}</p>
          </div>
        )}
      </div>
      <div>
        {error && <p>{error}</p>}
        {load && loadingMessage}
      </div>
    </div>
  )
}

export default UseEffectFetch