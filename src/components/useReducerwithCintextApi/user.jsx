import React from 'react';
import { useContext } from 'react'
import { contextApi } from './contextApi';

const User = ({user}) => {
  const {deleteUser} = useContext(contextApi);

  const handleDelete = (id) => {
    deleteUser(id);
  }
  return (
    <div className='col-md-4'>
      <div className='card mb-3'>
        <div className='mb-3'>
          <h4>User Name: {user.name}</h4>
          <p>User Id: {user.id}</p>
        </div>
        <div>
          <button className='btn btn-outline-danger' onClick={() => handleDelete(user.id)}>Delete User</button>
        </div>
      </div>
    </div>
  )
}

export default User