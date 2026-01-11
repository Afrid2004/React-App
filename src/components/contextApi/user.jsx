import React, { useContext } from 'react'
import { Context } from '../../context/context'

const User = () => {
  const {user, setUser} = useContext(Context);

  const handleDelete = (id) => {
    const filterUser = [...user].filter(user => {
      return user.id !== id;
    });
    setUser(filterUser);
  }

  return (
    <div className='d-flex gap-2 flex-wrap'>
      {user.map((user,id) => {
        return <div className='card w-25' key={user.id}>
          <div>
            <p>New User</p>
            <h4>Name: {user.name}</h4>
            <h6>Id: {user.id}</h6>
          </div>
          <div>
            <button className='btn btn-outline-danger' onClick={() => {handleDelete(user.id)}}>Delete User</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default User