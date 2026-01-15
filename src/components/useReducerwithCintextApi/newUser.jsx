import React, { useState } from 'react';
import { useContext } from 'react'
import { contextApi } from './contextApi';
import { v4 as uuidv4 } from "uuid";

const NewUser = () => {
  const {addUser} = useContext(contextApi);
  const [newUser, setNewUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newUser.trim()) return;
    const user = {id : uuidv4(), name : newUser};
    addUser(user);
    setNewUser('');
  }

  return (
    <>
      <form className='d-flex mb-3' onSubmit={handleSubmit}>
        <input onChange={(e) => setNewUser(e.target.value)} value={newUser} type="text" placeholder='Enter user name' required className='form-control' />
        <button type='submit' className='btn btn-info flex-shrink-0'>Add User</button>
      </form>
    </>
  )
}

export default NewUser