import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JsonServer = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get('http://localhost:3000/user');
    setData(response.data);
  }
  useEffect(()=> {
    getData();
  }, [])
  
  return (
    <div>
      <h2>Fetching JSON Data (AXIOS)</h2>
      <div className="row mt-4">
        {data.map((data) => {
        console.log(data);
        return <div className="col-lg-6" key={data.id}>
        <div className="card mb-2 mb-lg-0">
          <h4 className='mb-3'>Name : {data.name}</h4>
          <h6 className='mb-3'>Email : {data.email}</h6>
          <p>User ID: {data.id}</p>
        </div>
      </div>
      })}
      </div>
    </div>
  )
}

export default JsonServer