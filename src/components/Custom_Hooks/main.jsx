import React from 'react'
import useFetch from './custom-hook'

const HookMain = () => {
  const { data, loadData, error, loadingMessage } = useFetch('https://jsonplaceholder.typicode.com/posts');

  const errorMessage = error && <p>{error}</p>;
  const loadMessage = loadData && <p>{loadingMessage}</p>

  const fetchData = data && data.slice(0, 8).map(data => (
    <div className='card' key={data.id}><p>{data.id + ". " + data.title}</p></div>
  ))

  return (
    <div className='all-card'>
      {fetchData}
      {loadMessage}
      {errorMessage}
    </div>
  )
}

export default HookMain