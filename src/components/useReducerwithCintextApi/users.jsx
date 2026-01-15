import React, { useContext } from 'react'
import { contextApi } from './contextApi';
import User from './user';

const Users = () => {
 const {users} = useContext(contextApi);
  return ( 
    <div className='row'>
      {users.map((user, index) => {
        return <User key={index} user={user}/>
      })}
    </div>
  )
}

export default Users;