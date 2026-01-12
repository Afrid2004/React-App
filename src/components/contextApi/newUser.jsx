import React, { useState } from 'react'
import { UserContext } from '../../hooks/userContext';
import { v4 as uuidV4 } from 'uuid';

const NewUser = () => {
  const {setUser} = UserContext();
  const [newUser, setNewUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newUser.trim()) return;
    setUser((prevUser) => {
      const addUser = {id : uuidV4(), name : newUser};
      return [...prevUser, addUser];
    });
    setNewUser('');
  }

  return (
    <>
      <form className='d-flex mb-4' onSubmit={handleSubmit}>
        <input type="text" name='text' value={newUser} onChange={(e) => { setNewUser(e.target.value)}} className='form-control' placeholder='Enter user name' required />
        <button type='submit' className='btn btn-info flex-shrink-0'>Add New User</button>
      </form>
    </>
  )
}

export default NewUser