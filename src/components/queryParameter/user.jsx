import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!userName.trim() || !userAge.trim()) return ;
    setSearchParams({
      name : userName,
      age : userAge,
    })
  }
  return (
    <>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div>
              <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder='Enter user name' required className='form-control mb-3' />
              <input onChange={(e) => setUserAge(e.target.value)} value={userAge} type="number" placeholder='Enter user age' required className='form-control mb-3' />
            </div>
            <button type='submit' className='btn btn-info flex-shrink-0 w-100'>Add User</button>
          </form>
        </div>
        <div className="col-6">
          <div className='card'>
            <h4 className='mb-4'>Name: {searchParams.get("name")}</h4>
            <h4>Age: {searchParams.get("age")}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default User